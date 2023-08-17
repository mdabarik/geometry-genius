
function calculateTriangleArea() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    if (isNaN(base) || isNaN(height)) {
        alert("please insert number.");
        return;
    }
    const area = 0.5 * base * height;
    setTextFieldText('show-rect-area', area);
}

function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const height = getInputValue('rectangle-height')
    const area = width * height;
    setTextFieldText('show-rectangle-area', area);
}

function calculateParallelogramArea() {
    const height = getInputValue('parallelogram-height');
    const width = getInputValue('parallelogram-width');
    const area = height * width;
    setTextFieldText('show-parallelogram-area', area);

}

function calculateEllipseArea() {
    const largeRadius = getInputValue('ellipse-major-radius');
    const smallRadius = getInputValue('ellipse-minor-radius');
    const area = Math.PI * largeRadius * smallRadius;
    setTextFieldText('show-ellipse-area', area.toFixed(2));
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


// Data validation
/*
(NaN = Not a number)
1. set the proper type of the input field. (number, data, email)
2. check type using typeof
3. NaN means: Not a Number. isNaN is checking whether the input is not a number or not.

// validate input
*/