
const quoteArray = ["Love For All, Hatred For None", "Change the world by being yourself", "Every moment is a fresh beginning",
 "Never regret anything that made you smile"
, "Let the beauty of what you love be what you do.", "Everything you can imagine is real", "May your choices reflect your hopes, not your fears"];


var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

document.getElementById("permission").addEventListener("click", () => {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
                window.addEventListener('shake', shakeEventDidOccur, false);
                document.getElementById("permission").remove()

            }
          })
          .catch(console.error);
        } else {
            document.getElementById("permission").remove()
            window.addEventListener('shake', shakeEventDidOccur, false);

        }})

myShakeEvent.start();

//function to call when shake occurs
function shakeEventDidOccur () {
    //put your own code here etc.
    document.getElementById('ball').style.background = "linear-gradient(237deg, #178a6d, #508a17, #c3632c, #2cc35a, #c32cb7, #e3ff00, #ff0000, #00ffeb)";
    document.getElementById('ball').style.backgroundSize = '1000% 1000%'
    document.getElementById('ball').style.animation = "rainbow 8s ease infinite";
    setTimeout(() => {
        document.getElementById('quote').innerText = quoteArray[getRandomInt(5)];
        document.getElementById('ball').style.animation = "";

    }, 3000)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
