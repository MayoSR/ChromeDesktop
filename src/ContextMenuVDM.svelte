<script>
    import { fade } from "svelte/transition";
    import { topZIndex, navbarContent, closeAppStatus } from "./stores.js";

    function openVDMapp(e) {
        $navbarContent = $navbarContent.map((ele) => {
            if (ele.appId === 4) {
                return { ...ele, appWindowStatus: 1 };
            }
            return ele;
        });
        document.getElementById("icon-context-menu").style.top = "-1000px";
    }
</script>

<div
    in:fade={{ duration: 250 }}
    out:fade={{ duration: 250 }}
    id="icon-context-menu"
    on:click={(e) => openVDMapp(e)}
>
    <p>Open in Virtual Device Manager</p>
</div>

<style>
    #icon-context-menu {
        position: absolute;
        background: #0059b3;
        color: #fff;
        z-index: 900;
        cursor: pointer;
        top: -1000px;
    }

    #icon-context-menu p {
        margin: 0;
        font-size: 12px;
        padding: 5px;
    }
</style>
