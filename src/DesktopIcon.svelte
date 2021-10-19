<script>
    import { element } from "svelte/internal";

    import {
        currentSelectedNavApp,
        navbarContent,
        closeAppStatus,
    } from "./stores.js";
    export let appId;
    export let iconProp;
    export let appName;

    let newAppId = null;
    const regex = /bxs-.*/g;

    function selectedIcon(e) {
        $navbarContent = $navbarContent.map((element) => {
            if (element.appId == e.target.id.split("icon-")[1]) {
                currentSelectedNavApp.set(element);
                let newElement = element;
                newElement.status = 1 - newElement.status;
                return newElement;
            }
            return element;
        });
        e.stopPropagation();
    }

    function openApplication(e) {
        let icon = e.target.id;
        newAppId = e.target.id.split("icon-")[1];
        e.stopPropagation();
        if ($navbarContent.filter((app) => app.appId == newAppId).length <= 0) {
            $navbarContent = [
                ...$navbarContent,
                {
                    appId: newAppId,
                    appName: document.querySelector(
                        `#${icon} > .p-container > p`
                    ).textContent,
                    icon: document
                        .querySelector(`#${icon} > .icon-container > .bx`)
                        .className.match(regex)[0]
                        .split(" ")[0],
                    status: 0,
                    appWindowStatus: 1,
                    fullScreen: 0,
                },
            ];
        } else {
            let newNavContent = $navbarContent.map((ele) => {
                if (ele.appId == newAppId) {
                    return { ...ele, appWindowStatus: 1 };
                }
                return ele;
            });
            $navbarContent = [...newNavContent];
        }
    }

    document.addEventListener("click", () => {
        $navbarContent = $navbarContent.map((element) => {
            return { ...element, status: 0 };
        });
        $closeAppStatus = 0;
    });
</script>

<div
    class={`icon-${$currentSelectedNavApp.appId}` === `icon-${appId}`
        ? "desktop-icon-selected"
        : "desktop-icon"}
    id={`icon-${appId}`}
    on:click={(e) => selectedIcon(e)}
    on:dblclick={(e) => openApplication(e)}
>
    <div class="icon-container">
        <i class={`${iconProp} desktop-icon`} />
    </div>
    <div class="p-container">
        <p class="icon-name">
            {appName}
        </p>
    </div>
</div>

<style>
    .desktop-icon {
        height: 80px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95px;
        color: white;
    }

    .desktop-icon > *,
    .desktop-icon-selected > * {
        pointer-events: none;
    }

    .desktop-icon-selected {
        height: 80px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95px;
        color: white;
    }

    .desktop-icon > .icon-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        font-size: 36px;
        display: flex;
        justify-content: center;
        height: 60px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .desktop-icon-selected > .icon-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        font-size: 36px;
        display: flex;
        justify-content: center;
        height: 55px;
        background: rgba(255, 255, 255, 0.2);
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .desktop-icon > .icon-container i,
    .desktop-icon-selected > .icon-container i {
        margin-top: 15px;
        color: #fdb900;
    }

    .desktop-icon > .p-container,
    .desktop-icon-selected > .p-container {
        top: 50px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 14px;
        display: flex;
        justify-content: center;
        z-index: 200;
    }

    .desktop-icon > .p-container p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 95px;
        margin: 0;
        margin-top: 5px;
        padding: 0 5px;
        text-align: center;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .desktop-icon-selected > .p-container p {
        width: 95px;
        margin: 0;
        margin-top: 5px;
        padding: 0 5px;
        background: rgba(255, 255, 255, 0.2);
        max-height: 110px;
        min-height: 40px;
        text-align: center;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
    }
</style>
