
function calculateTriangleArea() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const area = 0.5 * base * height;
    setTextFieldText('show-rect-area', area);
}

function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const height = getInputValue('rectangle-height')
    const area = width * height;
    document.getElementById('show-rectangle-area').innerText = area;
}

function calculateParallelogramArea() {
    const height = getInputValue('parallelogram-height');
    const width = getInputValue('parallelogram-width');
    const area = height * width;
    document.getElementById('show-parallelogram-area').innerText = area;

}

// reuseable get input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuseable set span, p, div etc. text
function setTextFieldText(elementId, area) {
    document.getElementById(elementId).innerText = area;
}