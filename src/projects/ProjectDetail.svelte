<script>
    export let text;
    export let heading;
    export let icons;
</script>

<div class="project">
    <div class="project-text">
        <div class="project-header">
            <h1 class="h1-mega">{heading}</h1>
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                width="80px"
                height="80px"
                alt="github"
            />
        </div>
        <p class="p-large">
            {text}
        </p>
        <div class="programming-logos">
            {#each icons as icon}
                <img src={icon.url} alt={icon.name} />
            {/each}
        </div>
        <div class="read-more">
            <h3 class="read-more-text">READ MORE</h3>
            <i class="bx bx-chevron-right bx-sm" />
        </div>
    </div>
    <div class="project-image">
        <img src={`/figma/job/group.png`} alt="movie" />
    </div>
</div>

<style>
    .project {
        color: white;
    }

    .read-more {
        cursor: pointer;
        transition: 0.5s ease all;
    }

    .read-more:hover {
        color: white;
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .project-header img {
        cursor: pointer;
    }

    .programming-logos {
        display: flex;
        align-items: center;
    }

    .programming-logos img {
        height: 35px;
        width: 35px;
        margin-right: 10px;
    }

    .read-more {
        display: flex;
        align-items: center;
        color: #1a75e8;
    }

    .project-text {
        height: 100vh;
        display: flex;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .project-image img {
        height: 60vh;
    }

    .project-text {
        padding: 40px;
        flex: 0.4;
    }

    .project-image {
        display: flex;
        justify-content: center;
        flex: 0.6;
    }

    .project {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }

    .h1-mega {
        font-size: 3vw;
        margin: 0;
        font-family: "PT Sans Narrow", sans-serif;
        padding-bottom: 30px;
        display: inline-block;
        border-bottom: 5px solid white;
    }

    .p-large {
        font-size: 1vw;
        font-family: "Bebas Neue", cursive;
        text-align: justify;
    }

    @media (max-width: 780px) {
        .project-image img {
            height: 20vh;
            margin: 30px 0;
        }
        .project,
        .project-reversed {
            flex-direction: column;
            height: 100%;
            padding: 30px;
        }
        .h1-mega {
            font-size: 36px;
            padding-bottom: 10px;
        }
        .p-large {
            font-size: 18px;
        }
        .project-text {
            padding: 0;
            flex: 0.4;
        }
        .read-more {
            font-size: 12px;
        }
    }
</style>
