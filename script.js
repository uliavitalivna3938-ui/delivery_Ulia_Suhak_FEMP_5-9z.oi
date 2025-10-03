const rates = {
    kyiv: { standard: 50, express: 100 },
    lviv: { standard: 70, express: 120 },
    odessa: { standard: 80, express: 150 },
};

function calculateDelivery() {
    const city = document.getElementById('city').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const deliveryType = document.getElementById('delivery-type').value;
    const resultElement = document.getElementById('result');

    if (!weight || weight <= 0) {
        resultElement.innerText = 'Будь ласка, введіть правильну вагу.';
        resultElement.className = 'show';
        resultElement.style.backgroundColor = '#ffe8e8';
        resultElement.style.borderLeftColor = '#cc0000';
        return;
    }

    const baseRate = rates[city][deliveryType];
    const totalCost = baseRate + (weight * 10);

    resultElement.innerText = `Вартість доставки: ${totalCost} грн.`;
    resultElement.className = 'show';
    resultElement.style.backgroundColor = '#e8f4f8';
    resultElement.style.borderLeftColor = '#0066cc';
}