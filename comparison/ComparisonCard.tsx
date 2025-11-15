import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { TimeComparison } from "./TimeComparison";

interface ComparisonCardProps {
    comparison: TimeComparison;
    commuteMins: number;
}

export default function ComparisonCard(props: ComparisonCardProps) {
    return (
        <Card variant="elevation" sx={{ marginTop: 2, display: 'flex' }}>
            <CardMedia
                sx={{ height: 120, width: 120 }}
                image={props.comparison.getImageUrl()}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.comparison.getTitle()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.comparison.describeSelf()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    In this time {props.comparison.describeFrequencyIn(props.commuteMins)}
                </Typography>
            </CardContent>
        </Card>
    );
} 