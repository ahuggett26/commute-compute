import { TimeComparison, TimeUnit } from "./TimeComparison";

export class TaskTimeComparison extends TimeComparison {
    constructor(private desc: string, unit: TimeUnit, amount: number, private compFormat?: string, ) {
        super(unit, amount);
    }

    describeSelf(): string {
        return `It takes ${this.amount} ${this.unit} to ${this.desc}`;
    }

    protected describeComparison(outputFreq: string, frequency: string): string {
        const compString = this.compFormat ? this.compFormat.replace("XXX", `approximately ${frequency}`) : `${this.desc} approximately ${frequency} times`;
        return `in a ${outputFreq} of your commute, you could ${compString}.`
    }
}