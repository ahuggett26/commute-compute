import "./ComparisonOutput.css";
import { Card, CardContent, Typography } from "@mui/material";
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
                <Card variant="elevation" sx={{ margin: '2 0' }}>
                    <div className="w-full">
                        <h1 className="car-commute-icon inline-block leading-none">
                            🚗
                        </h1>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Your Commute</Typography>
                        <Typography variant="body2">{staticComp.title()}</Typography>
                        <Typography variant="body2">{staticComp.minutesInPeriod(props.outputFreq)} or {staticComp.hoursInPeriod(props.outputFreq)}</Typography>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Typography className="pt-4">Here is what that looks like in other contexts:</Typography>
                {allComparitors().map((comp, index) => (
                    <ComparisonCard key={`Comparison${index}`} comparison={comp} commuteMins={commuteMins} />
                ))}
            </div>
        </div>
    );
}