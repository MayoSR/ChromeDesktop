<div class="spread">
    <div class="content">
        <h1 class="h1-max">Movie Picker App</h1>
        <h3>About</h3>
        <p>
            Have you ever tried to find a movie you wanted to watch with
            friends? Did you end up spending at least an hour trying to find
            what to watch? Well this app aims to solve that problem! The app
            allows users to create friend groups where they can add movies they
            like into a playlist. Users within the group can then mark movies as
            watched if they have already seen it, and when the time comes to
            pick a movie to watch as a group, the ones that no one has viewed
            can be chosen. This also allows you to keep track of what movies
            your friends are watching and watch them yourself if you would like.
            Besides that, the app offers its own details about a movie as well,
            allowing users to get a brief idea of the movie they might want to
            watch.
        </p>
        <h3>Made with</h3>
        <div class="frameworks">
            <div class="framework-box">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                />
                <p>Material UI</p>
            </div>
            <div class="framework-box">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                />
                <p>ReactJs</p>
            </div>
            <div class="framework-box">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                />
                <p>Redux</p>
            </div>
            <div class="framework-box">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                />
                <p>Figma</p>
            </div>
        </div>
        <h3>Hosted on</h3>
        <div class="framework-box">
            <img src="/icons/netlify.png" />
            <p>Netlify</p>
        </div>
    </div>
    <img src="/figma/movie/banner.png" />
</div>

<style>
    .h1-max {
        font-size: 56px;
    }

    .spread {
        display: flex;
        justify-content: space-between;
    }

    .framework-box img {
        height: 40px;
    }

    .framework-box p {
        margin-top: 5px;
        font-size: 14px;
        white-space: pre-wrap;
    }

    .frameworks {
        display: flex;
    }

    .framework-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 80px;
        width: 80px;
    }

    .content {
        background: #f8f8f8;
        padding: 20px 40px;
    }

    @media screen and (max-width: 1200px) {
        .spread {
            flex-direction: column;
        }
    }
</style>
