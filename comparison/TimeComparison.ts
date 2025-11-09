/**
 * An amount of time for a single event to be completed.
 */
export class TimeComparison {
    constructor(private desc: string, private unit: TimeUnit, private amount: number) { }

    /**
     * Calculates how many times an event can occur within a given period.
     * @param periodAmount The duration of the period.
     * @param periodUnit The scale of the duration.
     * @returns 
     */
    frequencyIn(commuteTimeMins: number): number {
        const eventTimeInMins = timeInMinutes(this.amount, this.unit);
        return commuteTimeMins / eventTimeInMins;
    }

    /**
     * Describes the action taken with the amount of time to complete the event.
     * @returns A string description of the event.
     */
    describeSelf(): string {
        return `It takes ${this.amount} ${this.unit} to ${this.desc}`;
    }

    /**
     * Describes how often the event could've occurred within a given period.
     * @param periodUnit The period to compare with.
     * @returns A string description of the frequency of the event.
     */
    describeFrequencyIn(outputFreq: string, commuteTimeMins: number): string {
        const frequency = this.frequencyIn(commuteTimeMins);
        return `in a ${outputFreq} of your commute, you could ${this.desc} approximately ${frequency.toFixed(2)} times.`;
    }
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
