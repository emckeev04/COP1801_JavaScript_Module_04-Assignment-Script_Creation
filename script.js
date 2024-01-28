// Declare and initialization for all variables used for user input.
const serviceAmount = prompt("Enter the dollar amount of service:");
const serviceQuality = prompt("How would you rate the service? Great, Okay, Poor?");
var tipPercent = 0.00;

// Sets the tip percentage based on the user entering good, okay or poor service quality.
const serviceQualityValidation = function () {
    switch (serviceQuality.toLowerCase()) {
        case "great":
            tipPercent = 0.20;
            return true;
        case "okay":
            tipPercent = 0.15;
            return true;
        case "poor":
            tipPercent = .10;
            return true;
        default:
            document.write("An invalid service quality was entered. The code will stop running.");
    }
    return false;
};

// Used to determine if the user entered a service amount between 5.00 and 500.00.
const serviceAmountValidation = function () {
    if (serviceAmount > 5.00 && serviceAmount < 500.00)
        return true;

    document.write("An invalid service amount was entered. The code will stop running now.");
    return false;
};

// Displays the recommended tip by multiplying the tip percent by the service amount.
const displayTipAmount = () => {
    let tipAmount = serviceAmount * tipPercent;
    document.write(`Based on a service amount of $${serviceAmount} and ${serviceQuality} quality, the recommended tip is $${tipAmount}`);
};

// Checks if the user input valid data and displays recommended tip if the data is valid.
if(serviceQualityValidation() && serviceAmountValidation())
    displayTipAmount();
