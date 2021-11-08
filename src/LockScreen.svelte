<script>
    import { lockScreen, navbarContent } from "./stores.js";
    import { slide, fly } from "svelte/transition";
    function login() {
        toggleFullScreen();
        setTimeout(() => {
            lockScreen.set(0);
        }, 500);
    }

    $navbarContent = $navbarContent.map((ele) => {
        if (ele.appId == 8) {
            return { ...ele, appWindowStatus: 1 };
        }
        return ele;
    });

    function toggleFullScreen() {
        if (
            (document.fullScreenElement &&
                document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)
        ) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(
                    Element.ALLOW_KEYBOARD_INPUT
                );
            }
        }
    }
</script>

<div
    class="lock-screen"
    in:fly={{ y: 1000, duration: 500 }}
    out:fly={{ y: 1000, duration: 500 }}
>
    <div class="img-background">
        <img src="/static/windowsbg.jpg" alt="lock-screen" />
    </div>
    <div class="lock-content">
        <img src="/static/windowsbg.jpg" alt="lock-screen" />
        <div class="input-container" on:click={(e) => login(e)}>
            <input
                type="button"
                id="lock-window-ip"
                placeholder="Type here to search"
                value="Login"
            />
        </div>
    </div>
</div>

<style>
    .lock-screen {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh !important;
        width: 100vw !important;
        z-index: 10000000;
    }

    .img-background img {
        filter: blur(10px);
    }

    .img-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10000000;
    }

    .lock-content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10000000;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .input-container {
        display: flex;
        align-items: center;
        width: 15%;
        background: #212121;
        border-radius: 5px;
        border-bottom: 2px solid #33ccff;
        padding: 5px;
        height: 30px;
        color: grey;
        cursor: pointer;
    }

    #lock-window-ip {
        width: 100%;

        border: none;
        box-shadow: none;
        background: transparent;
        outline: 0;
        color: white;
        height: 100%;
        cursor: pointer;
    }

    .lock-content img {
        border-radius: 50%;
        height: 200px;
        width: 200px;
        margin-bottom: 15px;
    }
</style>
