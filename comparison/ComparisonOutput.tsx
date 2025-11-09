import { StaticTimeConversion } from "./StaticTimeConversion";

interface ComparisonOutputProps {
    totalHours: number;
    totalMinutes: number;
    daysPerPeriod: number;
    inputFreq: 'weekly' | 'monthly' | 'yearly';
    outputFreq: 'week' | 'month' | 'year';
}

export default function ComparisonOutput(props: ComparisonOutputProps) {
    const staticComp = new StaticTimeConversion(props.totalHours, props.totalMinutes, props.daysPerPeriod, props.inputFreq);

    return (
        <div className="pt-4">
            <div>
                <p>{staticComp.title()}</p>
                <ul className="list-disc list-inside">
                    <li>{staticComp.minutesInPeriod(props.outputFreq)}</li>
                </ul>
                <p>or</p>
                <ul className="list-disc list-inside">
                    <li>{staticComp.hoursInPeriod(props.outputFreq)}</li>
                </ul>
            </div>
        </div>
    );
}