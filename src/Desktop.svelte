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
    import HTMLWireframeConverter from "./projects/HTMLWireframeConverter.svelte";
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
        HTMLWireframeConverter: HTMLWireframeConverter,
    };
</script>

{#if $lockScreen}
    <LockScreen />
{:else}
    <div class="desktop">
        <div class="icon-grid">
            {#each $navbarContent as app}
                {#if app.visibleOnDesktop}
                    <div class="desktop-icon">
                        <DesktopIcon
                            appId={app.appId}
                            appName={app.appName}
                            iconProp={app.icon}
                        />
                    </div>
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
                    hasGitHub={app.urlGitHub}
                    hasAppLink={app.virtualDeviceLink}
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
        display: grid;
        grid-template-columns: fit-content(20%) fit-content(20%);
        grid-template-rows: repeat(10, 100px);
        grid-auto-flow: column;
    }

    .desktop-icon {
        height: 80px;
    }

    .desktop {
        width: 100vw;
        height: 100vh;
        background: url("/static/windowsbg.jpg");
        background-size: cover;
        padding: 20px;
    }

    @media screen and (max-height: 1000px) {
        .icon-grid {
            grid-template-rows: repeat(9, 100px);
        }
    }

    @media screen and (max-height: 800px) {
        .icon-grid {
            grid-template-rows: repeat(8, 100px);
        }
    }

    @media screen and (max-height: 845px) {
        .icon-grid {
            grid-template-rows: repeat(7, 100px);
        }
    }
</style>
