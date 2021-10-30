<script>
    let animation = null;
    import {
        navbarContent,
        closeAppStatus,
        currentSelectedNavApp,
        mainWindowStatus,
        topZIndex,
    } from "./stores.js";
    import { get } from "svelte/store";
    import { slide, fly } from "svelte/transition";
    import { element } from "svelte/internal";

    function toggleWindow(e) {
        $navbarContent = $navbarContent.map((element) => {
            if (element.appId == e.target.id.split("nav-app-")[1]) {
                let newElement = element;
                newElement.status = 1 - newElement.status;

                return newElement;
            }
            return element;
        });

        e.stopPropagation();
    }

    function closeApp(e) {
        e.preventDefault();
        closeAppStatus.set(
            e.target.getClientRects()[0]["x"] +
                e.target.getClientRects()[0]["width"]
        );
        $navbarContent = $navbarContent.map((element) => {
            if (element.appId == e.target.id.split("nav-app-")[1]) {
                currentSelectedNavApp.set(element);
                let newElement = element;
                newElement.status = 1 - newElement.status;
                return newElement;
            }
            return element;
        });
    }

    function reOpenApp(e) {
        app = e.target.id.split("nav-app-")[1];
        let newNavContent = $navbarContent.map((ele) => {
            if (ele.appId == app) {
                return {
                    ...ele,
                    appWindowStatus: ele.appWindowStatus === 1 ? -1 : 1,
                };
            }
            return ele;
        });
        $navbarContent = [...newNavContent];
    }

    function bringToFront(e) {
        app = e.target.id.split("nav-app-")[1];
        let value = get(topZIndex);
        console.log(value);
        topZIndex.set(value + 1);
        document.getElementById(`app-window-${app}`).style.zIndex = value + 1;
    }

    function specialWindowToggle() {
        mainWindowStatus.set(1 - $mainWindowStatus);
    }

    let dateTodayTemp = new Date().toLocaleString().split(", ")[0].split("/");
    let dateToday =
        dateTodayTemp[1] + "-" + dateTodayTemp[0] + "-" + dateTodayTemp[2];
    let timeNow = new Date().toLocaleString().split(", ")[1].slice(0, 5);

    setInterval(() => {
        dateTodayTemp = new Date().toLocaleString().split(", ")[0].split("/");
        dateToday =
            dateTodayTemp[1] + "-" + dateTodayTemp[0] + "-" + dateTodayTemp[2];
        timeNow = new Date().toLocaleString().split(", ")[1].slice(0, 5);
    }, 60000);
</script>

<div class="navbar-container">
    <div class="navbar">
        <img
            src={`/icons/m.png`}
            on:click={() => specialWindowToggle()}
            class={"nav-icons"}
            in:fly={{ y: 1000, duration: 250 }}
            out:fly={{ y: 1000, duration: 250 }}
            alt="osicon"
        />
        {#each $navbarContent as content, ind}
            {#if content.appWindowStatus}
                <img
                    src={`${content.icon}.png`}
                    alt={content.icon}
                    id={`nav-app-${content.appId}`}
                    class={"nav-icons"}
                    on:click={(e) => toggleWindow(e)}
                    in:fly={{ y: 1000, duration: 250 }}
                    out:fly={{ y: 1000, duration: 250 }}
                    on:contextmenu={(e) => closeApp(e)}
                    on:click={(e) => bringToFront(e)}
                />
            {/if}
        {/each}
    </div>
    <div class="data-nav">
        <div class="language">
            <p>ENG</p>
            <p>US</p>
        </div>
        <div class="device-icons">
            <i class="bi bi-wifi" />
            <i class="bi bi-volume-up" />
            <i class="bi bi-battery-charging" />
        </div>
        <div class="nav-time">
            <p>{timeNow}</p>
            <p>{dateToday}</p>
        </div>
    </div>
</div>

<style>
    .nav-time p {
        text-align: right !important;
        font-size: 14px !important;
    }

    .data-nav {
        height: 60px;
        position: absolute;
        bottom: -2px;
        right: 0;
        align-items: center;
        display: flex;
        color: white;
        font-size: 14px;
    }

    .device-icons i {
        margin-right: 10px;
        font-size: 20px;
    }

    .data-nav div {
        margin-right: 10px;
    }

    .data-nav p {
        margin: 0;
        text-align: center;
    }

    #windows-icon {
        color: #003660;
    }

    .nav-icons {
        font-size: 32px;
        height: 35px;
        width: 35px;
        margin-bottom: 2px;
        cursor: pointer;
        padding: 5px;
    }

    .nav-icons:hover {
        background: rgba(255, 255, 255, 0.2);
        padding: 5px;
        border-radius: 5px;
    }

    .navbar-container,
    .navbar {
        height: 55px;
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        width: 100vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100000;
    }

    .navbar-container {
        background: linear-gradient(
            to right,
            #3b679e 0%,
            #7db9e8 19%,
            #7db9e8 19%,
            #2b88d9 34%,
            #7db9e8 47%,
            #0084e2 58%,
            #207cca 66%,
            #207cca 66%,
            #207cca 75%,
            #7db9e8 84%,
            #7db9e8 84%,
            #3b679e 91%
        );
    }
</style>
