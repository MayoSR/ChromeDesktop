import { writable } from 'svelte/store';

export const topZIndex = writable(1000)
export const closeAppStatus = writable(0)
export const currentSelectedNavApp = writable({ icon: "", appName: "" })
export const mainWindowStatus = writable(0)
export const iconContextMenuStatus = writable({ status: 0, clientX: 0, clientY: 0 })
export const appLink = writable(null)
export const lockScreen = writable(0)
export const leftOffset = writable(100)
export const topOffset = writable(100)

export const navbarContent = writable([
    {
        appId: 1,
        appName: "Job Tracker App",
        icon: "/icons/suitcase",
        status: 0,
        appExe: "JobTracker",
        appWindowStatus: 0,
        fullScreen: 0,
        virtualDeviceLink: "https://jobpicker16.netlify.app",
        visibleOnDesktop: true,
        urlGitHub: "https://github.com/MayoSR/JobTracker",
        type: "UI and Mobile Apps"
    },
    {
        appId: 2,
        appName: "Movie Picker App",
        icon: "/icons/cinema",
        status: 0,
        appExe: "MoviePicker",
        appWindowStatus: 0,
        fullScreen: 0,
        virtualDeviceLink: "https://moviepicker16.netlify.app",
        visibleOnDesktop: true,
        urlGitHub: "https://github.com/MayoSR/MovieChoice",
        type: "UI and Mobile Apps"
    },
    {
        appId: 3,
        appName: "Recipe Picker App",
        icon: "/icons/recipe",
        status: 0,
        appExe: "RecipePicker",
        appWindowStatus: 0,
        fullScreen: 0,
        virtualDeviceLink: "https://recipebook16.netlify.app",
        visibleOnDesktop: true,
        urlGitHub: "https://github.com/MayoSR/RecipeBook",
        type: "UI and Mobile Apps"
    },
    {
        appId: 4,
        appName: "Virtual Device Manager",
        icon: "/icons/avd",
        appExe: "VirtualDeviceManager",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: false,
        appLink: null,
        virtualDeviceLink: null,
        urlGitHub: null,

    },
    {
        appId: 5,
        appName: "Resume",
        icon: "/icons/cv",
        appExe: "Resume",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: null,
        virtualDeviceLink: null,
        type: "About Me"

    },
    {
        appId: 6,
        appName: "Food Ordering App",
        icon: "/icons/menu",
        appExe: "FoodOrdering",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        virtualDeviceLink: "https://foodordering16.netlify.app/",
        appLink: null,
        urlGitHub: "https://github.com/MayoSR/FoodRepository",
        type: "UI and Mobile Apps"

    },
    {
        appId: 7,
        appName: "Question Bank Clustering",
        icon: "/icons/question",
        appExe: "Question",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: "https://github.com/MayoSR/MovieChoice",
        virtualDeviceLink: null,
        type: "Machine Learning and Data Science"
    },
    {
        appId: 8,
        appName: "Help Desk",
        icon: "/icons/help",
        appExe: "HelpDesk",
        status: 0,
        appWindowStatus: 1,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: null,
        virtualDeviceLink: null,
        disableSize: true,
        type: "About Me"
    },
    {
        appId: 9,
        appName: "Emergency App",
        icon: "/icons/emergency",
        appExe: "EmergencyApp",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: "https://github.com/MayoSR/EmergencyApp",
        virtualDeviceLink: "https://emergencyapp16.netlify.app",
        type: "UI and Mobile Apps"
    },
    {
        appId: 10,
        appName: "Connect 4",
        icon: "/icons/connect4",
        appExe: "Connect4",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: "https://github.com/MayoSR/connect4",
        virtualDeviceLink: null,
        type: "Games"
    },
    {
        appId: 11,
        appName: "Personal Info",
        icon: "/icons/team",
        appExe: "WhoAmI",
        status: 0,
        appWindowStatus: 1,
        fullScreen: -1,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: null,
        virtualDeviceLink: null,
        disableSize: true,
        type: "About Me"
    },
    {
        appId: 12,
        appName: "HTML Wireframe Converter",
        icon: "/icons/wireframe",
        appExe: "HTMLWireframeConverter",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: "https://github.com/MayoSR/HTML-Template-to-Website-converter/tree/master/8thSemProject",
        virtualDeviceLink: null,
        type: "Machine Learning and Data Science"
    },
    {
        appId: 13,
        appName: "Crop Analysis",
        icon: "/icons/farming",
        appExe: "CropAnalysis",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: null,
        virtualDeviceLink: null,
        type: "Machine Learning and Data Science"
    },
    {
        appId: 14,
        appName: "Digital Pen Controller",
        icon: "/icons/farming",
        appExe: "DigiPen",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: null,
        virtualDeviceLink: null,
        type: "Machine Learning and Data Science"
    },
    {
        appId: 15,
        appName: "Programming language analysis from Stackoverflow Users",
        icon: "/icons/farming",
        appExe: "ProgrammingAnalysis",
        status: 0,
        appWindowStatus: 0,
        fullScreen: 0,
        visibleOnDesktop: true,
        appLink: null,
        urlGitHub: null,
        virtualDeviceLink: null,
        type: "Machine Learning and Data Science"
    },
]);