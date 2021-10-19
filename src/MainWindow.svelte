<script>
    import { slide, fly } from "svelte/transition";

    let icons = [
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
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            name: "Redux",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            name: "Git",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
            name: "Jenkins",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
            name: "SocketIO",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            name: "MongoDB",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
            name: "Kubernetes",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            name: "Docker",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            name: "Angular",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            name: "React",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            name: "PHP",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
            name: "C/C++",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            name: "NodeJs",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            name: "JavaScript (ES6+)",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            name: "Python",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            name: "Java",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
            name: "Tensorflow",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            name: "Bootstrap",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
            name: "Material UI",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            name: "Figma",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
            name: "jQuery",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            name: "Linux",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
            name: "Svelte",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            name: "Express",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
            name: "Flask",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
            name: "GraphQL",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
            name: "Spring",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
            name: "Raspberry Pi",
        },
    ].sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    let topSkills = [
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            name: "Python",
            experience: "7 years",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
            name: "C/C++",
            experience: "5 years",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            name: "Java",
            experience: "2 years",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            name: "JavaScript (ES6+)",
            experience: "5 years",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            name: "React",
            experience: "3 years",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            name: "Linux",
            experience: "4 years",
        },
    ].sort(function (a, b) {
        var textA = a.experience.toUpperCase();
        var textB = b.experience.toUpperCase();
        return textA > textB ? -1 : textA < textB ? 1 : 0;
    });

    function showSkills(page) {
        var skillsBox = document.getElementById("skills-box");
        skillsBox.scrollTop = 235 * page;
        document.querySelectorAll(".skills-buttons").forEach((skill) => {
            console.log(skill);
            skill.style.backgroundColor = "blue";
        });
        document.getElementById(`skills-button-${page}`).style.backgroundColor =
            "cyan";
    }
</script>

<div
    in:fly={{ y: 1000, duration: 250 }}
    out:fly={{ y: 1000, duration: 250 }}
    class="main-window"
    id="main-window-anchor"
>
    <div class="input-container">
        <i class="bx bx-search-alt-2" />
        <input id="main-window-ip" placeholder="Type here to search" />
    </div>
    <div id="skills">
        <div id="skills-container">
            <h2 id="skills-header">Skills</h2>
            <div id="skills-box">
                {#each icons as icon}
                    <div class="skill-box">
                        <img
                            src={icon.url}
                            class="skill-icons"
                            alt={icon.name}
                        />
                        <p class="icon-name">{icon.name}</p>
                    </div>
                {/each}
            </div>
        </div>
        <div id="next-skills">
            <div
                class="skills-buttons"
                id="skills-button-0"
                on:click={() => showSkills(0)}
            />
            <div
                class="skills-buttons"
                id="skills-button-1"
                on:click={() => showSkills(1)}
            />
        </div>
    </div>
    <div id="skills-container">
        <h2 id="skills-header">Top Skills</h2>
        <div id="top-skills-box">
            {#each topSkills as icon}
                <div class="top-skill-box">
                    <img src={icon.url} class="skill-icons" alt={icon.name} />
                    <div class="top-skill-box-text">
                        <h5>{icon.name}</h5>
                        <p class="icon-name">{icon.experience}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .top-skill-box-text {
        display: flex;
        flex-direction: column;
    }

    .top-skill-box-text h5 {
        margin: 0;
    }

    .top-skill-box {
        display: flex;
        align-items: center;
        padding: 10px;
    }

    .top-skill-box img {
        height: 35px;
        width: 35px;
        margin-right: 5px;
    }

    #skills-container {
        width: 100%;
    }

    #top-skills-box {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 1fr 1fr;
    }

    .skills-buttons {
        cursor: pointer;
    }

    #skills-header {
        display: inline-block;
    }

    #skills-button-0 {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: cyan;
        margin-bottom: 10px;
    }

    #skills-button-1 {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: blue;
    }

    #next-skills {
        align-self: center;
    }

    .icon-name {
        margin: 0;
        text-align: left;
        font-size: 14px;
    }

    .input-container {
        display: flex;
        align-items: center;
        width: 100%;
        background: #212121;
        border-radius: 5px;
        border-bottom: 2px solid #33ccff;
        padding: 5px;
    }

    #skills-box {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        justify-content: space-evenly;
        row-gap: 20px;
        overflow: hidden;
        height: 235px;
        text-align: left;
        scroll-behavior: smooth;
    }

    #skills {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .skill-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .skill-box img {
        height: 35px;
        width: 35px;
    }

    .input-container i {
        padding: 5px;
        font-size: 22px;
        color: grey;
    }

    #main-window-ip {
        width: 100%;

        border: none;
        box-shadow: none;
        background: transparent;
        outline: 0;
        color: white;
        height: 100%;
    }

    .main-window {
        position: absolute;
        bottom: 60px;
        left: 33%;
        width: 30vw;
        margin-left: auto;
        margin-right: auto;
        height: 70vh;
        z-index: 100;
        background: #0059b3;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px;
        color: white;
    }
</style>
