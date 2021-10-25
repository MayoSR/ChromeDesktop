import { writable } from 'svelte/store';

export const topZIndex = writable(1000)
export const closeAppStatus = writable(0)
export const currentSelectedNavApp = writable({ icon: "", appName: "" })
export const mainWindowStatus = writable(0)
export const iconContextMenuStatus = writable({ status: 0, clientX: 0, clientY: 0 })
export const appLink = writable(null)
export const lockScreen = writable(0)

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
        visibleOnDesktop: true,
        urlGitHub: "https://github.com/MayoSR/JobTracker"
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
        visibleOnDesktop: true,
        urlGitHub: "https://github.com/MayoSR/MovieChoice"
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
        visibleOnDesktop: true,
        urlGitHub: "https://github.com/MayoSR/RecipeBook"
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

    },
    {
        appId: 5,
        appName: "Resume",
        icon: "/resume/resume",
        appExe: "Resume",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
    },
    {
        appId: 6,
        appName: "Food Ordering App",
        icon: "/ordering/ordering",
        appExe: "FoodOrdering",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        virtualDeviceLink: "https://foodordering16.netlify.app/",
        appLink: null,
        urlGitHub: "https://github.com/MayoSR/FoodRepository"
    },
    {
        appId: 7,
        appName: "Question Bank Clustering",
        icon: "/question/question",
        appExe: "Question",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: "https://github.com/MayoSR/MovieChoice"
    },
    {
        appId: 8,
        appName: "Help Desk",
        icon: "/question/question",
        appExe: "HelpDesk",
        status: 0,
        appWindowStatus: 1,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
    },
    {
        appId: 9,
        appName: "Crop Analysis",
        icon: "/ids/ids",
        appExe: "CropAnalysis",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
    },
    {
        appId: 10,
        appName: "Connect 4",
        icon: "/ids/ids",
        appExe: "Connect4",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: "https://github.com/MayoSR/connect4"
    },
    {
        appId: 11,
        appName: "Personal Info",
        icon: "/ids/ids",
        appExe: "WhoAmI",
        status: 0,
        appWindowStatus: 1,
        fullScreen: -1,
        visibleOnDesktop: true,
        appLink: null,
    },
]);