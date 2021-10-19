<script>
    let animation = null;
    import {
        navbarContent,
        closeAppStatus,
        currentSelectedNavApp,
        mainWindowStatus,
    } from "./stores.js";
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

    function specialWindowToggle() {
        mainWindowStatus.set(1 - $mainWindowStatus);
    }
</script>

<div class="navbar-container">
    <div class="navbar">
        <i
            on:click={() => specialWindowToggle()}
            class={"nav-icons bx bx-command"}
            in:fly={{ y: 1000, duration: 250 }}
            out:fly={{ y: 1000, duration: 250 }}
        />
        {#each $navbarContent as content, ind}
            {#if content.appWindowStatus}
                <i
                    id={`nav-app-${content.appId}`}
                    class={"nav-icons bx " + content.icon}
                    on:click={(e) => toggleWindow(e)}
                    in:fly={{ y: 1000, duration: 250 }}
                    out:fly={{ y: 1000, duration: 250 }}
                    on:contextmenu={(e) => closeApp(e)}
                    on:click={(e) => reOpenApp(e)}
                />
            {/if}
        {/each}
    </div>
</div>

<style>
    #windows-icon {
        color: #003660;
    }

    .nav-icons {
        font-size: 32px;
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

    .navbar {
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
