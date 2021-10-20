import { writable } from 'svelte/store';

export const topZIndex = writable(1000)
export const closeAppStatus = writable(0)
export const currentSelectedNavApp = writable({ icon: "", appName: "" })
export const mainWindowStatus = writable(0)
export const iconContextMenuStatus = writable({ status: 0, clientX: 0, clientY: 0 })
export const appLink = writable(null)
export const navbarContent = writable([
    {
        appId: 1,
        appName: "Job Tracker App",
        icon: "/job/joblogo",
        status: 0,
        appExe: "JobTracker",
        appWindowStatus: 0,
        fullScreen: 0,
        virtualDeviceLink: "https://jobpicker16.netlify.app",
        visibleOnDesktop: true
    },
    {
        appId: 2,
        appName: "Movie Picker App",
        icon: "/movie/movielogo",
        status: 0,
        appExe: "MoviePicker",
        appWindowStatus: 0,
        fullScreen: 0,
        virtualDeviceLink: "https://moviepicker16.netlify.app",
        visibleOnDesktop: true
    },
    {
        appId: 3,
        appName: "Recipe Picker App",
        icon: "/food/foodlogo",
        status: 0,
        appExe: "RecipePicker",
        appWindowStatus: 0,
        fullScreen: 0,
        virtualDeviceLink: "https://recipebook16.netlify.app",
        visibleOnDesktop: true
    },
    {
        appId: 4,
        appName: "Virtual Device Manager",
        icon: "/avd/avd",
        appExe: "VirtualDeviceManager",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: false,
        appLink: null,
    }
]);