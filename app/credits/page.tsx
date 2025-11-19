import { ImagesWithCredits } from "@/credits/Credits";
import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

export default function Credits() {
    return (
        <div>
            <Typography variant="h4" className="pb-4">Credits</Typography>
            {ImagesWithCredits.ALL_CREDITS.map((credit, index) => (
                <div key={index} className="mb-6">
                    <Card variant="outlined" sx={{ marginTop: 2, display: 'flex' }}>
                        <CardMedia
                            sx={{ height: 140, width: 140 }}
                            image={credit.imageUrl}
                        />
                        <CardContent>
                            <Typography variant="h6">{credit.creditTitle}</Typography>
                            <Typography variant="body2">Licence: <Link href={credit.creditLicense.link}>{credit.creditLicense.name}</Link></Typography>
                            <Typography variant="body2">Author: <Link href={credit.authorLink}>{credit.author}</Link></Typography>
                            <Typography variant="body2"><Link href={credit.imageUrl}>Image url</Link></Typography>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
}