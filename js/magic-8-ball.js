
const quoteArray = ["Love For All, Hatred For None", "Change the world by being yourself", "Every moment is a fresh beginning",
 "Never regret anything that made you smile"
, "Aspire to inspire before we expire", "Everything you can imagine is real"];


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
                document.getElementById("permission").style.backgroundColor = 'green';
                document.getElementById("permission").disabled = true;
            }
          })
          .catch(console.error);
        } else {
            window.addEventListener('shake', shakeEventDidOccur, false);

        }})

myShakeEvent.start();

//function to call when shake occurs
function shakeEventDidOccur () {
    //put your own code here etc.
    document.getElementById('ball').style.animation = "bubble-anim 2s ease-out infinite";
    document.getElementById("permission").disabled = true;
    document.getElementById("permission").style.backgroundColor = 'green';
    setTimeout(() => {
        document.getElementById('quote').innerText = quoteArray[getRandomInt(5)];
        document.getElementById('ball').style.animation = "";

    }, 3000)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
