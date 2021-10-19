import { writable } from 'svelte/store';

export const closeAppStatus = writable(0)
export const currentSelectedNavApp = writable({ icon: "", appName: "" })
export const mainWindowStatus = writable(0)

export const navbarContent = writable([
    {
        appId: 1,
        appName: "Job Tracker App",
        icon: "/job/joblogo",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
    },
    {
        appId: 2,
        appName: "Movie Picker App",
        icon: "/movie/movielogo",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
    },
    {
        appId: 3,
        appName: "Recipe Picker App",
        icon: "/food/foodlogo",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
    },
]);