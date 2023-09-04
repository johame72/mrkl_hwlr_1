const STATIONS = {
    "KEXP": {
        name: "KEXP Seattle",
        url: "https://kexp.streamguys1.com/kexp320.aac",
        type: "audio/aac"
    },
    "ClassicFM": {
        name: "ClassicFM",
        url: "http://media-ice.musicradio.com/ClassicFMMP3",
        type: "audio/mp3"
    },
    "KDHX": {
        name: "KDHX",
        url: "http://kdhx-ice.streamguys1.com/live",
        type: "audio/mp3"
    }
};

let currentStation = null;
let sound = null;

// Populate the station select dropdown
const stationSelect = document.getElementById('stationSelect');
for (let key in STATIONS) {
    let option = document.createElement('option');
    option.value = key;
    option.textContent = STATIONS[key].name;
    stationSelect.appendChild(option);
}

document.getElementById('playPauseBtn').addEventListener('click', function() {
    if (!currentStation) {
        currentStation = STATIONS[stationSelect.value];
        sound = new Howl({
            src: [currentStation.url],
            format: [currentStation.type.split('/')[1]],
            html5: true,
            onload: function() {
                document.getElementById('trackInfo').textContent = "Loaded";
            },
            onplay: function() {
                document.getElementById('trackInfo').textContent = "Playing: " + sound.playing();
            },
            onpause: function() {
                document.getElementById('trackInfo').textContent = "Paused";
            }
        });
    }

    if (sound.playing()) {
        sound.pause();
    } else {
        sound.play();
    }
});
