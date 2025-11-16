import { Alert, AlertTitle, Typography } from "@mui/material";

export default function Timeline() {
    return (
        <div>
            <Typography variant="h4" className="pb-4">Timeline</Typography>
            <Alert severity="error">
                <AlertTitle>Not Found</AlertTitle>
                We're sorry, this has not yet been implemented.
            </Alert>
        </div>
    );
}