const videoElement = document.querySelector('video');
const startButton = document.querySelector('button')


async function fetchMediaStreamContent() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        alert(error)
    }
}

startButton.addEventListener('click', async () => {
    startButton.disabled = true;
    await videoElement.requestPictureInPicture()
    startButton.disabled = false
})

fetchMediaStreamContent()