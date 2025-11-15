import ComparisonCard from "./ComparisonCard";
import { allComparitors } from "./Comparitors";
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
    const commuteMins = staticComp.commuteMins(props.outputFreq);

    return (
        <div className="pt-4">
            <div>
                <p>{staticComp.title()}</p>
                <p>{staticComp.minutesInPeriod(props.outputFreq)} or {staticComp.hoursInPeriod(props.outputFreq)}</p>
            </div>
            <div>
                <p className="pt-4">Here is what that looks like in other contexts:</p>
                {allComparitors().map((comp, index) => (
                    <ComparisonCard key={`Comparison${index}`} comparison={comp} commuteMins={commuteMins} />
                ))}
            </div>
        </div>
    );
}