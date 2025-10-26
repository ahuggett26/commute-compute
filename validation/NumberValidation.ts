export function validatePositiveInt(value: string): string {
    const numberPattern = /^[0-9]*$/;
    if (numberPattern.test(value)) {
        const numberValue = Number(value);
        if (!Number.isInteger(numberValue)) {
            return "Input is not an integer";
        } else if (numberValue < 0) {
            return "Input cannot be negative";
        } else {
            return "";
        }
    } else {
        return "Input is not an acccepted number";
    }
}