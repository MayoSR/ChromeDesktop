<script>
    import { onMount } from "svelte";

    import { appLink, topZIndex } from "./stores.js";
    import { get } from "svelte/store";

    onMount(async () => {
        let appWindow = document
            .getElementById("virtual-device-frame")
            .closest(".app-window");
        let appContent = document
            .getElementById("virtual-device-frame")
            .closest(".app-content");

        let value = get(topZIndex);
        topZIndex.set(value + 1);

        appWindow.style.height = "862px";
        appWindow.style.width = "395px";
        appWindow.style.top = 0;
        appWindow.style.zIndex = value + 1;
        appContent.style.overflow = "hidden";
    });
</script>

<div id="virtual-device-frame">
    <iframe
        title="live demo"
        src={$appLink}
        height="812px"
        width="375px"
        style="border-radius:40px"
        class="responsive-iframe"
    />
</div>

<style>
    #virtual-device-frame {
        background: black;
        height: 100vh;
        display: flex;
        justify-content: center;
    }

    @media screen and (min-width: 1025px) and (max-width: 1280px) {
        .responsive-iframe {
            width: 345px;
            height: 630px;
            border-radius: 10px;
        }
    }

    .responsive-iframe::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    /* Track */

    .responsive-iframe::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }

    /* Handle */

    .responsive-iframe::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */

    .responsive-iframe::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
