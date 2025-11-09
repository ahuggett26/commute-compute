export class StaticTimeConversion {
    minsPerWeek: number = 0;
    minsPerMonth: number = 0;
    minsPerYear: number = 0;

    constructor(totalHours: number, totalMinutes: number, totalDays: number, frequency: 'weekly' | 'monthly' | 'yearly') {
        const minsPerDay = (totalHours * 60 + totalMinutes) * 2;
        const minsPerFreq = minsPerDay * totalDays;

        switch (frequency) {
            case 'weekly':
                this.minsPerWeek = minsPerFreq;
                this.minsPerMonth = minsPerFreq * 4.3;
                this.minsPerYear = minsPerFreq * 52;
                break;
            case 'monthly':
                this.minsPerWeek = minsPerFreq / 4.3;
                this.minsPerMonth = minsPerFreq;
                this.minsPerYear = minsPerFreq * 12;
                break;
            case 'yearly':
                this.minsPerWeek = minsPerFreq / 52;
                this.minsPerMonth = minsPerFreq / 12;
                this.minsPerYear = minsPerFreq;
                break;
        }
    }


    title(): string {
        return "Your commute takes:";
    }

    minutesInPeriod(timePeriod: 'week' | 'month' | 'year' ): string {
        switch (timePeriod) {
            case 'week':
                return `${Math.round(this.minsPerWeek)} minutes per week`;
            case 'month':
                return `${Math.round(this.minsPerMonth)} minutes per month`;
            case 'year':
                return `${Math.round(this.minsPerYear)} minutes per year`;
        }
    }

    hoursInPeriod(timePeriod: 'week' | 'month' | 'year' ): string {
        switch (timePeriod) {
            case 'week':
                return `${(this.minsPerWeek / 60).toFixed(1)} hours per week`;
            case 'month':
                return `${(this.minsPerMonth / 60).toFixed(1)} hours per month`;
            case 'year':
                return `${(this.minsPerYear / 60).toFixed(1)} hours per year`;
        }
    }
}