<script>
    import { topZIndex, navbarContent, closeAppStatus } from "./stores.js";
    import { fade } from "svelte/transition";
    export let windowId;
    export let applicationName;
    export let screen;
    let cursorStartX = null;
    let cursorStartY = null;
    import { scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    let preFullScreenSizes = [];
    import { get } from "svelte/store";

    function windowStart(e) {
        let ele = e.target.getBoundingClientRect();
        if (cursorStartX === null && cursorStartY === null) {
            cursorStartX = e.clientX;
            cursorStartY = e.clientY;
        }
    }

    function windowStop(e) {
        let ele = e.target.getBoundingClientRect();
        let offsetX = cursorStartX - ele.x;
        let offsetY = cursorStartY - ele.y;
        let shiftX = e.clientX - offsetX;
        let shiftY = e.clientY - offsetY;
        if (shiftX < 0) {
            shiftX = 0;
        }
        if (shiftY < 0) {
            shiftY = 0;
        }
        if (shiftX > window.innerWidth - 60) {
            shiftX = window.innerWidth - 60;
        }
        if (shiftY > window.innerHeight - 60) {
            shiftY = window.innerHeight - 60;
        }
        e.target.style.left = shiftX + "px";
        e.target.style.top = shiftY + "px";
        cursorStartX = null;
        cursorStartY = null;
    }

    function goFullScreen(e) {
        let appWindowEle = e.target.closest(".app-window");
        let appWindowEleId = appWindowEle.id.split("app-window-")[1];
        preFullScreenSizes = appWindowEle.getBoundingClientRect();
        appWindowEle.classList.add("full-screen");
        let newNavContent = $navbarContent.map((ele) => {
            if (ele.appId == appWindowEleId) {
                return { ...ele, fullScreen: 1 };
            }
            return ele;
        });
        $navbarContent = [...newNavContent];
    }

    function unFullScreen(e) {
        let appWindowEle = e.target.closest(".app-window");
        let appWindowEleId = appWindowEle.id.split("app-window-")[1];
        let newNavContent = $navbarContent.map((ele) => {
            if (ele.appId == appWindowEleId) {
                return { ...ele, fullScreen: 0 };
            }
            return ele;
        });
        $navbarContent = [...newNavContent];
        appWindowEle.style.left = preFullScreenSizes.x;
        appWindowEle.style.top = preFullScreenSizes.y;
        appWindowEle.style.width = preFullScreenSizes.width;
        appWindowEle.style.height = preFullScreenSizes.height;
    }

    function minimize(e) {
        let appWindowId = e.target
            .closest(".app-window")
            .id.split("app-window-")[1];
        let newNavContent = $navbarContent.map((ele) => {
            if (ele.appId == appWindowId) {
                return { ...ele, appWindowStatus: -1 };
            }
            return ele;
        });
        $navbarContent = [...newNavContent];
    }

    function close(e) {
        let appWindowId = e.target
            .closest(".app-window")
            .id.split("app-window-")[1];
        let newNavContent = $navbarContent.map((ele) => {
            if (ele.appId == appWindowId) {
                return { ...ele, appWindowStatus: 0 };
            }
            return ele;
        });
        $navbarContent = [...newNavContent];
    }

    function bringToFront(e) {
        let value = get(topZIndex);
        console.log(value);
        topZIndex.set(value + 1);
        e.target.closest(".app-window").style.zIndex = value;
    }
</script>

<div
    in:scale={{
        duration: 500,
        opacity: 0.5,
        start: 0,
        easing: quintOut,
    }}
    out:scale={{
        duration: 500,
        opacity: 0,
        start: 0,
        easing: quintOut,
    }}
    class={screen ? "app-window full-screen" : "app-window"}
    draggable="true"
    id={windowId}
    on:dragstart={(e) => windowStart(e)}
    on:dragend={(e) => windowStop(e)}
    on:mousedown={(e) => bringToFront(e)}
>
    <div class="window-controls">
        <div class="app-name-in-window">
            <p>{applicationName}</p>
        </div>
        <div class="app-window-controls">
            <div class="icon-box" on:click={(e) => minimize(e)}>
                <i class="bx bx-minus" />
            </div>
            {#if screen}
                <div class="icon-box" on:click={(e) => unFullScreen(e)}>
                    <i class="bx bx-exit-fullscreen" />
                </div>
            {:else}
                <div class="icon-box" on:click={(e) => goFullScreen(e)}>
                    <i class="bx bx-fullscreen" />
                </div>
            {/if}
            <div class="icon-box" id="close-icon" on:click={(e) => close(e)}>
                <i class="bx bx-x" />
            </div>
        </div>
    </div>
    <div class="app-content">
        <slot />
    </div>
</div>

<style>
    #close-icon:hover {
        background: rgba(255, 0, 0, 1);
    }

    .app-content {
        overflow: scroll;
        height: calc(100% - 40px);
        width: 100%;
    }

    .icon-box {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        padding: 0 10px;
    }

    .icon-box:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .window-controls {
        height: 40px;
        background: #3b679e;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .app-window-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .window-controls .app-name-in-window {
        padding: 5px;
        padding-left: 2%;
    }

    .app-name-in-window {
        overflow: hidden;
        flex-shrink: 5;
    }

    .app-name-in-window p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .app-window-controls i {
        font-size: 24px;
        pointer-events: none;
    }

    .bx-fullscreen {
        font-size: 18px !important;
    }

    .app-window {
        position: absolute;
        height: 50vh;
        width: 50vw;
        resize: both;
        left: 100px;
        top: 100px;
        z-index: 1000;
        overflow: hidden;
        border-radius: 10px;
        min-width: 150px;
        min-height: 40px;
        background: grey;
    }

    :global(.full-screen) {
        left: 0 !important;
        top: 0 !important;
        height: 100vh !important;
        width: 100vw !important;
        border-radius: 0 !important;
        position: absolute;
        z-index: 1000;
        background: #f8f8f8;
        overflow: auto;
    }
</style>
