import { TimeComparison, TimeUnit } from "./TimeComparison";

export class HistoricalTimeComparison extends TimeComparison {
    constructor(private subj: string, private desc: string, unit: TimeUnit, amount: number) {
        super(unit, amount);
    }

    describeSelf(): string {
        return `${this.subj} ${this.desc} in ${this.amount} ${this.unit}.`;
    }

    protected describeComparison(outputFreq: string, frequency: string): string {
        return `in a ${outputFreq} of your commute, ${this.subj} could have ${this.desc} approximately ${frequency} times.`
    }
}