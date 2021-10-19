import { writable } from 'svelte/store';

export const closeAppStatus = writable(0)
export const currentSelectedNavApp = writable({ icon: "", appName: "" })
export const mainWindowStatus = writable(0)

export const navbarContent = writable([
    {
        appId: 1,
        appName: "Job Tracker App",
        icon: "bi bi-briefcase-fill",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
    },
    {
        appId: 2,
        appName: "Movie Picker App",
        icon: "bi bi-camera-reels-fill",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
    },
    {
        appId: 3,
        appName: "Recipe Picker App",
        icon: "bi bi-menu-app-fill",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
    },
]);