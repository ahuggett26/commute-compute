import { TimeComparison, TimeUnit } from "./TimeComparison";

export class TaskTimeComparison extends TimeComparison {
    constructor(private desc: string, unit: TimeUnit, amount: number) {
        super(unit, amount);
    }

    describeSelf(): string {
        return `It takes ${this.amount} ${this.unit} to ${this.desc}`;
    }

    protected describeComparison(outputFreq: string, frequency: string): string {
        return `in a ${outputFreq} of your commute, you could ${this.desc} approximately ${frequency} times.`
    }
}