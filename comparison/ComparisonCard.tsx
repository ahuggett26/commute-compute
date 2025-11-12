import { Card, CardContent, Typography } from "@mui/material";
import { TimeComparison } from "./TimeComparison/TimeComparison";

interface ComparisonCardProps {
    comparison: TimeComparison;
    outputFreq: 'week' | 'month' | 'year';
    commuteMins: number;
}

export default function ComparisonCard(props: ComparisonCardProps) {
    return (
        <Card variant="elevation" sx={{ marginTop: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.comparison.getTitle()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.comparison.describeSelf()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    So... {props.comparison.describeFrequencyIn(props.outputFreq, props.commuteMins)}
                </Typography>
            </CardContent>
        </Card>
    );
} 