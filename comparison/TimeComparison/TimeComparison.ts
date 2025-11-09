/**
 * An amount of time for a single event to be completed.
 */
export abstract class TimeComparison {
    constructor(protected unit: TimeUnit, protected amount: number) { }

    /**
     * Calculates how many times an event can occur within a given period.
     * @param periodAmount The duration of the period.
     * @param periodUnit The scale of the duration.
     * @returns 
     */
    occasionsIn(commuteTimeMins: number): number {
        const eventTimeInMins = timeInMinutes(this.amount, this.unit);
        return commuteTimeMins / eventTimeInMins;
    }

    /**
     * Describes how often the event could've occurred within a given period.
     * @param periodUnit The period to compare with.
     * @returns A string description of the frequency of the event.
     */
    describeFrequencyIn(outputFreq: string, commuteTimeMins: number): string {
        const occasions = this.occasionsIn(commuteTimeMins).toFixed(2);
        return this.describeComparison(outputFreq, occasions);
    }

    protected abstract describeComparison(outputFreq: string, frequency: string): string;

    /**
     * Describes the action taken with the amount of time to complete the event.
     * @returns A string description of the event.
     */
    abstract describeSelf(): string;
}

export enum TimeUnit {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days",
    Weeks = "weeks",
    Years = "years"
}

function timeInMinutes(amount: number, unit: TimeUnit): number {
    switch (unit) {
        case TimeUnit.Minutes:
            return amount;
        case TimeUnit.Hours:
            return timeInMinutes(amount, TimeUnit.Minutes) * 60;
        case TimeUnit.Days:
            return timeInMinutes(amount, TimeUnit.Hours) * 24;
        case TimeUnit.Weeks:
            return timeInMinutes(amount, TimeUnit.Days) * 7;
        case TimeUnit.Years:
            return timeInMinutes(amount, TimeUnit.Days) * 365;
    }
}
