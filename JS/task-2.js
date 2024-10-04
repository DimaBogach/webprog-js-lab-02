function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

if (confirm("Do you want to see the result for Task 2?")) {
    alert(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
    alert(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
    alert(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
}
