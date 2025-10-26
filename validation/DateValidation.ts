import { validatePositiveInt } from "./NumberValidation";

export function validNoDays(days: string, freq: string): string {
    const numericValidation = validatePositiveInt(days);
    if (numericValidation.length != 0) {
        return numericValidation;
    }

    const daysNum = Number(days);
    switch (freq) {
        case 'weekly':
            return daysNum <= 7 ? "" : "Input is too large";
        case 'monthly':
            return daysNum <= 31 ? "" : "Input is too large";
        case 'yearly':
            return daysNum <= 365 ? "" : "Input is too large";
        default:
            return "Invalid frequency";
    }
}
