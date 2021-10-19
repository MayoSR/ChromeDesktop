<script>
    import CloseApp from "./CloseApp.svelte";

    import DesktopIcon from "./DesktopIcon.svelte";
    import MainWindow from "./MainWindow.svelte";
    import Navbar from "./Navbar.svelte";
    import AppWindow from "./AppWindow.svelte";
    import {
        navbarContent,
        closeAppStatus,
        mainWindowStatus,
    } from "./stores.js";
</script>

<div class="desktop">
    <DesktopIcon />
    <Navbar />
    {#if $mainWindowStatus}
        <MainWindow />
    {/if}
    {#if $closeAppStatus}
        <CloseApp />
    {/if}
    {#each $navbarContent as app}
        {#if app.appId !== 0 && app.appWindowStatus > 0}
            <AppWindow
                windowId={`app-window-${app.appId}`}
                applicationName={app.appName}
                screen={app.fullScreen}
            />
        {/if}
    {/each}
</div>

<style>
    .desktop {
        width: 100vw;
        height: 100vh;
        background: url("/static/windowsbg.jpg");
        background-size: cover;
        padding: 20px;
    }
</style>
