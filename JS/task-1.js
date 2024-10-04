function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

if (confirm("Do you want to see the result for Task 1?")) {
    alert(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
}
