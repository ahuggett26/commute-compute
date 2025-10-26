import { validatePositiveInt } from "./NumberValidation";

export function validHours(hours: string): string {
    const numericValidation = validatePositiveInt(hours);
    if (numericValidation.length != 0) {
        return numericValidation;
    }

    const hoursNum = Number(hours);
    if (hoursNum > 23) {
        return "Input is too large";
    }
    return "";
}

export function validMinutes(minutes: string): string {
    const numericValidation = validatePositiveInt(minutes);
    if (numericValidation.length != 0) {
        return numericValidation;
    }
    
    const minsNum = Number(minutes);
    if (minsNum > 59) {
        return "Input is too large";
    }
    return "";
}