
let currentExpression = '';

function appendToMonitor(value) {
    currentExpression += value;
    document.getElementById('monitor').innerText = currentExpression;
}

function clearMonitor() {
    currentExpression = '';
    document.getElementById('monitor').innerText = '0';
}

function deleteLastCharacter() {
    currentExpression = currentExpression.slice(0, -1);
    document.getElementById('monitor').innerText = currentExpression === '' ? '0' : currentExpression;
}

function calculate() {
    try {
        const result = eval(currentExpression);
        document.getElementById('monitor').innerText = result;
        currentExpression = result.toString();
    } catch (error) {
        document.getElementById('monitor').innerText = 'Error';
        currentExpression = '';
    }
}

const ThemeButton = document.getElementById("Theme_Change");
let darkModeState = false;
let themeName = "Light";

function changeThemeMode() {
    darkModeState = !darkModeState;
    if (darkModeState==true) {
        // Dark mode activated
        document.body.classList.add('dark');
        themeName = "Dark";
    } else {
        // Light mode activated
        document.body.classList.remove('dark');
        themeName = "Light";
    }
    // Update button text to reflect current theme
    ThemeButton.innerText = themeName;
}


function getThemeButton(){
    return darkModeState;
}


document.addEventListener('DOMContentLoaded', () => {
    // Get all the buttons
    const buttons = document.querySelectorAll('.btn');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the ID of the clicked button
            const buttonId = button.id;

            // Call the corresponding function based on the button ID
            switch (buttonId) {
                case 'AC':
                    clearMonitor();
                    break;
                case 'C':
                    deleteLastCharacter();
                    break;
                case 'equals':
                    calculate();
                    break;
                default:
                    // For all other buttons, append their value to the monitor
                    appendToMonitor(button.innerText);
                    break;
            }
        });
    });
});




