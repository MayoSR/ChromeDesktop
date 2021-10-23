<script>
    import { fade } from "svelte/transition";
    import {
        topZIndex,
        navbarContent,
        currentSelectedNavApp,
    } from "./stores.js";

    let selectedApp = null;

    function openVDMapp(e) {
        $navbarContent = $navbarContent.map((ele) => {
            if (ele.appId === 4) {
                return { ...ele, appWindowStatus: 1 };
            }
            return ele;
        });
        document.getElementById("icon-context-menu").style.top = "-1000px";
    }

    function openGitHub(e) {
        selectedApp = $navbarContent.filter(
            (ele) => ele.appId == $currentSelectedNavApp.id.split("icon-")[1]
        )[0];
        window.open(selectedApp.urlGitHub, "_blank");
    }
</script>

<div
    in:fade={{ duration: 250 }}
    out:fade={{ duration: 250 }}
    id="icon-context-menu"
>
    <p on:click={(e) => openVDMapp(e)}>Open in Virtual Device Manager</p>
    <p on:click={(e) => openGitHub(e)}>View source code on GitHub</p>
</div>

<style>
    #icon-context-menu {
        position: absolute;

        color: #fff;
        z-index: 900;
        cursor: pointer;
        top: -1000px;
    }

    #icon-context-menu p {
        margin: 0;
        font-size: 12px;
        padding: 5px;
        background: #0059b3;
    }

    #icon-context-menu p:hover {
        margin: 0;
        font-size: 12px;
        padding: 5px;
        background: rgba(0, 89, 179, 0.8);
    }
</style>
