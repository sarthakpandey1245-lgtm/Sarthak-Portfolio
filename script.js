const videos = [
    "background1.mp4",
    "background2.mp4",
    "background3.mp4"
    
];

let current = 0;

document.getElementById("changeBg").addEventListener("click", function () {

    current++;

    if (current >= videos.length) {
        current = 0;
    }

    const video = document.getElementById("bg-video");

    video.querySelector("source").src = videos[current];

    video.load();
    video.play();

});