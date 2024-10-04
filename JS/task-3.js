function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // для обох сторін
    const borderWidth = parseFloat(border) * 2; // для обох сторін
    return contentWidth + paddingWidth + borderWidth;
}

if (confirm("Do you want to see the result for Task 3?")) {
    alert(getElementWidth("50px", "8px", "4px")); // 74
    alert(getElementWidth("60px", "12px", "8.5px")); // 101
    alert(getElementWidth("200px", "0px", "0px")); // 200
}
