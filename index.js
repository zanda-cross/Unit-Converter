const mainSection = document.getElementById("main-sec")
const convertBtnEl = document.getElementById("convert-btn")
const outputLengthEl = document.getElementById("output-length")
const outputVolumeEl = document.getElementById("output-volume")
const outputMassEl = document.getElementById("output-mass")
const inputValueEl = document.getElementById("input-value")

convertBtnEl.addEventListener("click", function() {
    CalculateLength()
    CalculateVolume()
    CalculateMass()
})

function CalculateLength() {
    const inputValue = Number(inputValueEl.value)
    const feet = inputValue * 3.281 // meter to feet
    const meter = inputValue / 3.281 // feet to meter
    outputLengthEl.textContent = `${inputValue} meters = ${feet.toFixed(3)} feet | ${inputValue} feet = ${meter.toFixed(3)} meters`
}

function CalculateVolume() {
    const inputValue = Number(inputValueEl.value)
    const gallons = inputValue * 0.264172 // litre to gallons
    const litres = inputValue / 0.264172 // gallons to litre
    outputVolumeEl.textContent = `${inputValue} litres = ${gallons.toFixed(3)} gallons | ${inputValue} gallons = ${litres.toFixed(3)} litres`
}

function CalculateMass() {
    const inputValue = Number(inputValueEl.value)
    const pounds = inputValue * 2.204 // kilos to pounds
    const kilos = inputValue / 2.204 // pounds to kilos
    outputMassEl.textContent = `${inputValue} kilos = ${pounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilos.toFixed(3)} kilos`
}

const resetBtnEl = document.getElementById("btn-reset")

function reset() {
    inputValueEl.value = 0;
    outputLengthEl.textContent = ``;
    outputVolumeEl.textContent = ``;
    outputMassEl.textContent = ``;
}

resetBtnEl.addEventListener("click", function() {
    reset()
})

const btnIconEl = document.getElementById("btn-icon");

function applyMode(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode")
    } else {
        document.body.classList.remove("dark-mode")
    }
}

const savedMode = localStorage.getItem("darkMode");
applyMode(savedMode === "true");

btnIconEl.addEventListener("click", function() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark)
    applyMode(isDark)
})
