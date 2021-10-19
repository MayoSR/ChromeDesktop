<script>
    import { slide, fly } from "svelte/transition";
    import {
        navbarContent,
        closeAppStatus,
        currentSelectedNavApp,
    } from "./stores.js";

    function closeWindow() {
        let appId = $currentSelectedNavApp.appId;
        closeAppStatus.set(0);
        let newNavContent = $navbarContent.map((ele) => {
            if (ele.appId == appId) {
                return { ...ele, appWindowStatus: 0 };
            }
            return ele;
        });
        $navbarContent = [...newNavContent];
    }

    function currentSelectedApp() {}
</script>

<div
    in:fly={{ y: 1000, duration: 250 }}
    out:fly={{ y: 1000, duration: 250 }}
    class="close-app-window"
    id="close-app-anchor"
    style={"left:" + ($closeAppStatus - 100) + "px"}
>
    <div class="close-tabs">
        <div
            id="open-app"
            class="close-window-items"
            on:click={(e) => currentSelectedApp(e)}
        >
            <i class={`bx ${$currentSelectedNavApp.icon} bx-sm`} />
            <p>{$currentSelectedNavApp.appName}</p>
        </div>
        <div
            id="close-app"
            class="close-window-items"
            on:click={(e) => closeWindow(e)}
        >
            <i class="bx bx-x bx-sm" />
            <p>Close Window</p>
        </div>
    </div>
</div>

<style>
    .close-window-items {
        display: flex;
        align-items: center;
        height: 4vh;
        cursor: pointer;
    }

    .close-window-items i {
        margin-right: 5px;
    }

    .close-window-items p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 14vw;
    }

    .close-window-items {
        margin: 0;
    }

    .close-app-window {
        position: absolute;
        bottom: 60px;
        left: 33%;
        width: 18vw;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        height: 8vh;
        z-index: 10000;
        background: #0059b3;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: white;
    }
</style>
