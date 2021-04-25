const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.getElementById("RangePicker").oninput = function () { RangeFunction() };

function RangeFunction() {
    const val = document.getElementById("RangePicker");
    const output = document.getElementById("output");
    output.innerHTML = val.value;

}


document.getElementById("controlsIcon").onclick = function () { clickControlsIcon() };

function clickControlsIcon() {
    const controls = document.getElementById("controlsIcon");
    const text = controls.innerText;
    const show = '↓ Show Controls';
    const menu = document.getElementById('hideAndShow');

    if (text === show) {
        controls.innerText = '↑ Hide Controls';
        menu.style.display = 'block';
    }
    else {
        controls.innerText = '↓ Show Controls'
        menu.style.display = 'none';
    }

}
