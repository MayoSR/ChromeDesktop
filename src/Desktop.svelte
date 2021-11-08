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
    import EmergencyApp from "./projects/EmergencyApp.svelte";
    import DigiPen from "./projects/DigiPen.svelte";
    import ProgrammingAnalysis from "./projects/ProgrammingAnalysis.svelte";
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
        EmergencyApp: EmergencyApp,
        DigiPen: DigiPen,
        ProgrammingAnalysis: ProgrammingAnalysis,
    };
</script>

{#if $lockScreen}
    <LockScreen />
{:else}
    <div class="desktop">
        {#each ["UI and Mobile Apps", "About Me", "Machine Learning and Data Science", "Games"] as category}
            <div class="category-container">
                <h2>{category}</h2>
                <div class="icon-content-box">
                    {#each $navbarContent as app}
                        {#if app.type === category && app.visibleOnDesktop}
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
            </div>
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
                    screen={app.fullScreen > 0 ? app.fullScreen : 0}
                    hasGitHub={app.urlGitHub}
                    hasAppLink={app.virtualDeviceLink}
                    hasDisableSize={app.disableSize}
                >
                    <svelte:component this={componentMapper[app.appExe]} />
                </AppWindow>
            {/if}
        {/each}
    </div>
{/if}

<style>
    .category-container {
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        margin-bottom: 20px;
        padding: 0 20px;
    }

    .category-container > h2 {
        text-align: center;
        color: white;
    }

    .icon-content-box {
        display: grid;
        grid-template-columns: fit-content(20%) fit-content(20%);
        grid-template-rows: repeat(2, 90px);
        grid-auto-flow: column;
        margin-bottom: 20px;
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
        display: grid;
        grid-template-columns: fit-content(20%) fit-content(20%);
        grid-template-rows: repeat(2, 31vh);
        grid-auto-flow: column;
        column-gap: 20px;
    }

    @media screen and (max-height: 930px) {
        .desktop {
            grid-template-rows: repeat(2, 45vh);
        }
        .icon-content-box {
            grid-template-rows: repeat(2, 120px);
        }
    }
</style>
