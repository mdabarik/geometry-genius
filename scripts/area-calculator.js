

function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;
    document.getElementById('show-rect-area').innerText = area;
}


function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const heightField = document.getElementById('rectangle-height');
    const lengthValueText = heightField.value;
    const length = parseFloat(lengthValueText);

    const area = width * length;

    document.getElementById('show-rectangle-area').innerText = area;
}