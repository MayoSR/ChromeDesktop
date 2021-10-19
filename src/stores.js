import { writable } from 'svelte/store';

export const closeAppStatus = writable(0)
export const currentSelectedNavApp = writable({ icon: "", appName: "" })
export const mainWindowStatus = writable(0)

export const navbarContent = writable([
    {

    },
]);