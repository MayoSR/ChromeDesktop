<script>
    import { onMount } from "svelte";

    import { slide, fly } from "svelte/transition";

    onMount((async) => {
        document.getElementById("app-window-11").style.height = "40vh";
        document.getElementById("app-window-11").style.width = "400px";
        document.getElementById("app-window-11").style.left =
            window.innerWidth - 420 + "px";
        document.getElementById("app-window-11").style.top = "20px";
        document.getElementById("app-window-11").style.resize = "none";
    });

    function copyEmail() {
        navigator.clipboard.writeText("myemail@gmail.com");
        document.getElementById("copied-snackbar").style.display = "block";
        setTimeout(() => {
            document.getElementById("copied-snackbar").style.display = "none";
        }, 1000);
    }
</script>

<div
    in:fly={{ y: 1000, duration: 250 }}
    out:fly={{ y: 1000, duration: 250 }}
    class="personal-window"
>
    <div class="info-box">
        <div id="viewport-box">
            <div class="content-box">
                <div class="image-content">
                    <img src="/figma/me/me.jpg" alt="profile pic" />
                    <div class="about-me">
                        <h2>Jonathon Joestar</h2>
                    </div>
                </div>
                <div class="link-content">
                    <a href="https://github.com/MayoSR">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="github"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/mayank-rao-87155a223/">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                            alt="linkedin"
                        />
                    </a>
                    <a href="https://www.hackerrank.com/mayankrao16?hr_r=1">
                        <img
                            src="/figma/me/hackerrank.png"
                            id="hackerrank"
                            alt="hackerrank"
                        />
                    </a>
                    <div id="email-link" on:click={copyEmail}>
                        <p id="copied-snackbar">Email Copied!</p>
                        <i class="bx bx-envelope bx-md" />
                    </div>
                </div>
            </div>
            <h1 style="margin:0;margin-top:10px;text-align:center">
                Who am I?
            </h1>
        </div>
        <p>
            It works similar to how a real OS functions. There is a process
            queue that handles applications, which when invoked, creates an
            application window within which application specific code runs. The
            Apps all have the same window controlled by the "OS", however each
            App also renders its own component within the window.
        </p>
    </div>
</div>

<style>
    #viewport-box {
        height: 30vh;
    }

    #email-link {
        position: relative;
        cursor: pointer;
    }

    #copied-snackbar {
        display: none;
        position: absolute;
        left: -20px;
        bottom: -20px;
        right: 0;
        white-space: nowrap;
        font-size: 12px;
        background: #f8f8f8;
        border-radius: 5px;
    }

    #hackerrank {
        height: 50px;
        width: 50px;
    }

    .link-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: absolute;
        right: 0;
    }

    .link-content > * {
        margin-bottom: 10px;
    }

    .link-content img {
        height: 35px;
        width: 35px;
    }

    .about-me h2 {
        margin: 0;
        margin-left: 5px;
    }

    .content-box {
        display: flex;
        justify-content: center;
        position: relative;
    }

    .image-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .about-me * {
        margin: 0;
        display: inline-block;
    }

    .about-me p {
        margin-top: 2px;
    }

    .personal-window {
        padding: 20px;
        background: white;
        display: flex;
        justify-content: center;
    }

    .info-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .image-content img {
        width: 50%;
        border-radius: 50%;
    }
</style>
