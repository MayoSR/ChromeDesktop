<script>
    import {
        topZIndex,
        navbarContent,
        closeAppStatus,
        appLink,
    } from "./stores.js";
    import { get } from "svelte/store";
    import { fade } from "svelte/transition";
    export let windowId;
    export let applicationName;
    export let screen;
    export let hasAppLink;
    let cursorStartX = null;
    let cursorStartY = null;
    export let hasGitHub = null;
    import { scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    let preFullScreenSizes = [];

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

        let newNavContent = $navbarContent.map((ele) => {
            if (ele.appId == appWindowEleId && ele.fullScreen >= 0) {
                appWindowEle.classList.add("full-screen");
                return { ...ele, fullScreen: 1 };
            }
            return ele;
        });
        $navbarContent = [...newNavContent];
        bringToFront(e);
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
        topZIndex.set(value + 1);
        e.target.closest(".app-window").style.zIndex = value;
    }

    function openVDMapp(e) {
        $navbarContent = $navbarContent.map((ele) => {
            if (ele.appId === 4) {
                return { ...ele, appWindowStatus: 1 };
            }
            return ele;
        });
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

    <div class="app-links-container">
        <div class="app-links">
            {#if hasGitHub !== null}
                <a href={hasGitHub}>
                    <div class="img-icon-container">
                        <i class="devicon-github-original" />
                        <h5>View on GitHub</h5>
                    </div>
                </a>
            {/if}
            {#if hasAppLink !== null}
                <div
                    class="img-icon-container"
                    on:click={(e) => {
                        $appLink = hasAppLink;
                        openVDMapp(e);
                    }}
                >
                    <i class="bx bx-devices" />
                    <h5>Live Demo</h5>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .img-icon-container {
        background: rgba(41, 41, 41, 0.8);
        border-radius: 5px;
        padding: 3px 5px;
        cursor: pointer;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        color: white;
    }

    .img-icon-container img,
    .img-icon-container i {
        pointer-events: none;
        font-size: 32px;
    }

    .app-links a {
        text-decoration: none;
        color: black;
    }

    .img-icon-container h5 {
        margin: 0;
        margin-left: 10px;
    }

    .img-icon-container:hover {
        background: rgba(0, 0, 0, 0.2);
    }

    .app-links-container {
        position: absolute;
        top: 60px;
        left: 20px;
    }

    .app-links {
        position: fixed;
        display: flex;
        flex-direction: column;
    }

    .app-links img {
        height: 30px;
        width: 30px;
    }

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
        box-shadow: 0px 10px 19px 2px rgba(0, 0, 0, 0.29);
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
