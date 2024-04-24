export const formatNumber = (number: number): string => {
    const roundedNumber: number = Math.round(number * 100) / 100;
    let formattedNumber: string = roundedNumber.toString();
    if (formattedNumber.indexOf('.') !== -1) {
        formattedNumber = formattedNumber.slice(0, formattedNumber.indexOf('.') + 3);
    }
    // Replace dot with comma if needed
    formattedNumber = formattedNumber.replace('.', ',');
    return formattedNumber;
};
