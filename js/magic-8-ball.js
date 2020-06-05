
const quoteArray = ["Love For All, Hatred For None", "Change the world by being yourself", "Every moment is a fresh beginning",
 "Never regret anything that made you smile"
, "Aspire to inspire before we expire", "Everything you can imagine is real"];


var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();


if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
            window.addEventListener('shake', shakeEventDidOccur, false);
        }
      })
      .catch(console.error);
    } else {
        window.addEventListener('shake', shakeEventDidOccur, false);
    }


//function to call when shake occurs
function shakeEventDidOccur () {
    //put your own code here etc.
    alert(quoteArray[getRandomInt(5)]);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
