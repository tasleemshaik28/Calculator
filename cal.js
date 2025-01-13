let input = document.getElementById('inputbox');
let items = document.querySelectorAll('.item');
let equalButton = document.querySelector('.equal');
let displayValue = "";

let arr = Array.from(items);
arr.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            try {
                displayValue = eval(displayValue);
                input.value = displayValue;
            } catch (error) {
                input.value = "Error";
            }
        } else if (e.target.innerHTML === "AC") {
            displayValue = "";
            input.value = displayValue;
        } else if (e.target.innerHTML === "Del") {
            displayValue = displayValue.slice(0, -1);
            input.value = displayValue;
        } else {
            displayValue += e.target.innerHTML;
            input.value = displayValue;
        }
    });
});

equalButton.addEventListener('click', () => {
    try {
        displayValue = eval(displayValue);
        input.value = displayValue;
    } catch (error) {
        input.value = "Error";
    }
});