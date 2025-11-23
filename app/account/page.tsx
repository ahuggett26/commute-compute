import { Alert, AlertTitle, Typography } from "@mui/material";

export default function Account() {
    return (
        <div>
            <Typography variant="h4" className="pb-4">Account</Typography>
            <Alert severity="error">
                <AlertTitle>Not Found</AlertTitle>
                Sorry, this is not available as accounts have not yet been implemented.
            </Alert>
        </div>
    );
}