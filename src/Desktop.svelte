<script>
    import CloseApp from "./CloseApp.svelte";

    import DesktopIcon from "./DesktopIcon.svelte";
    import MainWindow from "./MainWindow.svelte";
    import Navbar from "./Navbar.svelte";
    import AppWindow from "./AppWindow.svelte";
    import ProjectDetail from "./projects/ProjectDetail.svelte";
    import {
        navbarContent,
        closeAppStatus,
        mainWindowStatus,
    } from "./stores.js";
</script>

<div class="desktop">
    {#each $navbarContent as app}
        <DesktopIcon
            appId={app.appId}
            appName={app.appName}
            iconProp={app.icon}
        />
    {/each}

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
            >
                <ProjectDetail
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
                    heading="Movie Picker App"
                    icons={[
                        {
                            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                            name: "MySQL",
                        },
                        {
                            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                            name: "Firebase",
                        },
                        {
                            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                            name: "NextJs",
                        },
                    ]}
                />
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
