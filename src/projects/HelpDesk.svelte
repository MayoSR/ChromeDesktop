<script>
    import { onMount } from "svelte";

    import { slide, fly } from "svelte/transition";

    onMount((async) => {
        document.getElementById("app-window-8").style.height = "46vh";
        document.getElementById("app-window-8").style.width = "400px";
        document.getElementById("app-window-8").style.left =
            window.innerWidth - 420 + "px";
        document.getElementById("app-window-8").style.top = "45vh";
    });
</script>

<div
    in:fly={{ y: 1000, duration: 250 }}
    out:fly={{ y: 1000, duration: 250 }}
    class="howto-window"
>
    <h3>Q: What is this?</h3>
    <p>
        <span class="answer-weight">A:</span> Welcome! This is a website that mimics
        the Windows 11 OS and design, wherein all the rudimentary features from Windows
        11 have been integrated to give the illusion of an operating system like
        environment in the browser.
    </p>
    <h3>Q: How does this work?</h3>
    <p>
        <span class="answer-weight">A:</span> It works similar to how a real OS functions.
        There is a process queue that handles applications, which when invoked, creates
        an application window within which application specific code runs. The Apps
        all have the same window controlled by the "OS", however each App also renders
        its own component within the window.
    </p>
    <h3>Q: How do I use this?</h3>
    <p>
        <span class="answer-weight">A:</span> It works the same way as a desktop
        does! You can open apps by
        <span class="answer-weight">double clicking</span>, see full names of
        apps by <span class="answer-weight">single clicking</span> and
        <span class="answer-weight">right clicking</span> to open the Virtual Device
        Manager for compatible apps. Source code can also be viewed by right clicking
        and viewing it on GitHub. Alternatively, you can watch the tutorial video.
    </p>
    <h3>Q: Why are all the apps not hosted?</h3>
    <p>
        <span class="answer-weight">A:</span> While I have - to the best of my abilities
        - tried to host every app, not all of them are easy to host and many of the
        games are multiplayer or rely on socket connections. The others are Machine
        Learning related and contain models of gigantic proportions that cannot be
        feasibly hosted on a cost effective server. For these, a video of the app's
        functioning has been provided instead. If you would still like to try them,
        most of them can be downloaded and run straight from GitHub.
    </p>
</div>

<style>
    .howto-window {
        padding: 20px;
        background: white;
    }

    .howto-window h3 {
        margin: 0;
    }

    .answer-weight {
        font-weight: bold;
    }
</style>
