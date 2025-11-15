import { ImageWithCredit } from "@/Credits/Credits";

/**
 * An amount of time for a single event to be completed.
 */
export class TimeComparison {
    constructor(
        private image: ImageWithCredit,
        private selfDescription: (dur: string) => string,
        private comparisonDesc: (freq: string) => string,
        private unit: TimeUnit,
        private amount: number) { }

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
    describeFrequencyIn(commuteTimeMins: number): string {
        const occasions = this.occasionsIn(commuteTimeMins).toFixed(2);
        return this.describeComparison(occasions);
    }

    getTitle(): string {
        return this.image.title;
    }

    getImageUrl(): string {
        return this.image.imageUrl;
    }

    describeComparison(frequency: string): string {
        return this.comparisonDesc(frequency);
    }

    /**
     * Describes the action taken with the amount of time to complete the event.
     * @returns A string description of the event.
     */
    describeSelf(): string {
        return this.selfDescription(`${this.amount} ${this.unit}`);
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
