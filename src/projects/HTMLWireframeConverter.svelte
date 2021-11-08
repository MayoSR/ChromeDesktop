<div class="page-container">
    <h1 class="h1-max">HTML Wireframe to Website Converter</h1>
    <h3>About</h3>
    <p>
        My final year engineering project. This project was intended to be used
        by designers or UI developers as a quick way of showing design
        prototypes. It mainly handles basic CSS and positioning along with
        responsiveness. Contains special helper algorithms that help align items
        with each other, so for example if two elements are skewed by a small
        enough distance (hand drawn images will never be perfectly straight
        after all) there's a compensator that aligns them to a common baseline.
    </p>

    <h3>How it works</h3>
    <ul>
        <li>
            <p>
                A hand drawn wireframe is inserted through the UI. The image is
                sent to the backend where all the irrelevant channels like color
                are removed and a simple black and white image is generated. At
                the end, the image is only represented as 0s and 1s, elements
                and boundaries are pure black and anything else is masked to
                pure white. This was done to remove the effect of lights,
                shadows or innacuracies during recording.
            </p>
        </li>
        <li>
            <p>
                Once masked and processed, the image cutter first detects the
                content inside the page. Once the document (the largest
                rectangle encompassing all the other elements) is found, it
                iteratively finds all the elements and crops them out. This is
                to feed our ML model later on. The cropped images also have
                their position stored so they can be rendered later.
            </p>
        </li>
        <li>
            <p>
                The next stage involves our SVM. The model is trained on several
                thousand images. The data was partly crowd sourced, but due to
                the pandemic we were not able to collect sufficient data. To
                mitigate this, I wrote an algorithm that basically flips all the
                images in various orientations, along with adding some white
                noise to prevent the SVM from overfitting to our data. While not
                fool-proof, it created enough fake data that an SVM could be
                trained successfully. The SVM receives the cropped images from
                the previous stage and detects the type of HTML element in the
                image.
            </p>
        </li>
        <li>
            <p>
                The next step involves adding the metadata to each image. Each
                image is encoded as a class object, along with all the metadata
                for each image. Each object also has a method that renders the
                HTML to a file. This file uses Jinja2 to render the elements.
                The CSS is a Python formatted string that is written to the CSS
                file post rendering. The HTML and CSS files are sent to the user
                and can be downloaded together.
            </p>
        </li>
    </ul>
    <h3>References</h3>
    <p>
        My final year engineering project. This project was intended to be used
        by designers or UI developers as a quick way of showing design
        prototypes. It mainly handles basic CSS and positioning along with
        responsiveness. Contains special helper algorithms that help align items
        with each other, so for example if two elements are skewed by a small
        enough distance (hand drawn images will never be perfectly straight
        after all) there's a compensator that aligns them to a common baseline.
    </p>
</div>

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
    <iframe
        src="https://www.loom.com/embed/8c6ee684140d4613893b3b1f2bbe0fd2"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        title="video"
    />
</div>

<style>
    .h1-max {
        font-size: 56px;
    }

    .page-container {
        background: #f8f8f8;
        padding: 20px 40px;
    }
</style>
