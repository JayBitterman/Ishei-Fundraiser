document.addEventListener("DOMContentLoaded", function() {
    const goalAmount = 1000000; // Adjust goal amount
    let currentAmount = 0; // Initial amount

    function updateThermometer(donation) {
        currentAmount += donation;
        const fillPercentage = Math.min((currentAmount / goalAmount) * 100, 97); // Ensure it doesn't go above 100%

        document.querySelector(".total").innerText = `$${currentAmount}`;
        document.querySelector(".total").style.bottom = `${fillPercentage}%`;
        document.querySelector(".amount").style.height = `${fillPercentage}%`;
    }

    // Put total donations here
    updateThermometer(500000);
});
