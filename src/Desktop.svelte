<script>
    import CloseApp from "./CloseApp.svelte";

    import DesktopIcon from "./DesktopIcon.svelte";
    import MainWindow from "./MainWindow.svelte";
    import Navbar from "./Navbar.svelte";
    import AppWindow from "./AppWindow.svelte";
    import JobTracker from "./projects/JobTracker.svelte";
    import RecipePicker from "./projects/RecipePicker.svelte";
    import MoviePicker from "./projects/MoviePicker.svelte";
    import VirtualDeviceManager from "./VirtualDeviceManager.svelte";
    import {
        navbarContent,
        closeAppStatus,
        mainWindowStatus,
        iconContextMenuStatus,
        appLink,
    } from "./stores.js";
    import ContextMenuVdm from "./ContextMenuVDM.svelte";

    let componentMapper = {
        VirtualDeviceManager: VirtualDeviceManager,
        MoviePicker: MoviePicker,
        RecipePicker: RecipePicker,
        JobTracker: JobTracker,
    };
</script>

<div class="desktop">
    {#each $navbarContent as app}
        {#if app.visibleOnDesktop}
            <DesktopIcon
                appId={app.appId}
                appName={app.appName}
                iconProp={app.icon}
            />
        {/if}
    {/each}

    <Navbar />
    {#if $mainWindowStatus}
        <MainWindow />
    {/if}
    <ContextMenuVdm />
    {#if $closeAppStatus}
        <CloseApp />
    {/if}
    {#each $navbarContent as app}
        {#if app.appId !== 0 && app.appWindowStatus > 0}
            <AppWindow
                windowId={`app-window-${app.appId}`}
                applicationName={app.appName}
                screen={app.fullScreen}
            >
                <svelte:component this={componentMapper[app.appExe]} />
            </AppWindow>
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
