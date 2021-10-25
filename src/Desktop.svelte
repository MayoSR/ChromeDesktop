<script>
    import CloseApp from "./CloseApp.svelte";

    import DesktopIcon from "./DesktopIcon.svelte";
    import MainWindow from "./MainWindow.svelte";
    import Navbar from "./Navbar.svelte";
    import AppWindow from "./AppWindow.svelte";
    import JobTracker from "./projects/JobTracker.svelte";
    import RecipePicker from "./projects/RecipePicker.svelte";
    import MoviePicker from "./projects/MoviePicker.svelte";
    import Resume from "./projects/Resume.svelte";
    import Question from "./projects/Question.svelte";
    import HelpDesk from "./projects/HelpDesk.svelte";
    import CropAnalysis from "./projects/CropAnalysis.svelte";
    import Connect4 from "./projects/Connect4.svelte";
    import WhoAmI from "./projects/WhoAmI.svelte";
    import VirtualDeviceManager from "./VirtualDeviceManager.svelte";
    import LockScreen from "./LockScreen.svelte";
    import {
        navbarContent,
        closeAppStatus,
        mainWindowStatus,
        iconContextMenuStatus,
        appLink,
        lockScreen,
    } from "./stores.js";
    import ContextMenuVdm from "./ContextMenuVDM.svelte";

    let componentMapper = {
        VirtualDeviceManager: VirtualDeviceManager,
        MoviePicker: MoviePicker,
        RecipePicker: RecipePicker,
        JobTracker: JobTracker,
        Resume: Resume,
        Question: Question,
        HelpDesk: HelpDesk,
        CropAnalysis: CropAnalysis,
        Connect4: Connect4,
        WhoAmI: WhoAmI,
    };
</script>

{#if $lockScreen}
    <LockScreen />
{:else}
    <div class="desktop">
        <div class="icon-grid">
            {#each $navbarContent as app}
                {#if app.visibleOnDesktop}
                    <DesktopIcon
                        appId={app.appId}
                        appName={app.appName}
                        iconProp={app.icon}
                    />
                {/if}
            {/each}
        </div>
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
                    screen={app.fullScreen > 0 ? app.fullScreen : 0}
                >
                    <svelte:component this={componentMapper[app.appExe]} />
                </AppWindow>
            {/if}
        {/each}
    </div>
{/if}

<style>
    .icon-grid {
        height: 90vh;
    }

    .desktop {
        width: 100vw;
        height: 100vh;
        background: url("/static/windowsbg.jpg");
        background-size: cover;
        padding: 20px;
    }
</style>
