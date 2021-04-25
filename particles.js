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
    let x;
    if (x == 0) {
        controls.innerHTML = 'hellloooo';
        x = 1;
    }
    else {
        x = 0;
        controls.innerHTML = 'byeeeee';
    }
}

let x;