const temperatureDisplay = document.getElementById('temperatureDisplay');
const temperatureMood = document.getElementById('temperatureMood');
const lightingToggle = document.getElementById('toggleLights');
const lightingStatus = document.getElementById('lightingStatus');
const notePrompt = document.getElementById('notePrompt');
const newPromptButton = document.getElementById('newPrompt');

let temperature = 78;

const gentlePrompts = [
    "Pause between tasks and check in with your breathing.",
    "Notice one small joy hiding today.",
    "Take ten seconds to feel your pulse and befriend it.",
    "Let one thought drift by without labeling it.",
    "Sip water like it is part of the meditation."
];

const getRandomItem = (collection) => collection[Math.floor(Math.random() * collection.length)];

const updateTemperatureDisplay = () => {
    temperatureDisplay.textContent = `${temperature}`;
    temperatureMood.textContent = deriveCalmMood(temperature);
};

const deriveCalmMood = (value) => {
    if (value < 70) return "deep steadiness";
    if (value < 80) return "steady focus";
    if (value < 88) return "curiosity sparked";
    return "time for a soft pause";
};

document.getElementById('increaseTemp').addEventListener('click', () => {
    temperature++;
    updateTemperatureDisplay();
});

document.getElementById('decreaseTemp').addEventListener('click', () => {
    temperature--;
    updateTemperatureDisplay();
});

const updateLightingStatus = (isOn) => {
    lightingStatus.textContent = isOn ? "warm aurora engaged" : "still + grounded";
    document.body.classList.toggle('ambient-on', isOn);
};

lightingToggle.addEventListener('change', (event) => {
    updateLightingStatus(event.target.checked);
});

const setRandomPrompt = () => {
    notePrompt.textContent = getRandomItem(gentlePrompts);
};

newPromptButton.addEventListener('click', setRandomPrompt);

updateTemperatureDisplay();
updateLightingStatus(lightingToggle.checked);
setRandomPrompt();
