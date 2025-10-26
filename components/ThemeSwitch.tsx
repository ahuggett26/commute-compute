import { ToggleButton, ToggleButtonGroup, useColorScheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect } from 'react';

export default function ThemeSwitchComponent() {
    const { mode, setMode } = useColorScheme();
    const isLight = mode === 'light';

    useEffect(() => {
        document.body.className = mode === 'dark' ? 'dark' : '';
    }, [mode])

    return (
        <ToggleButtonGroup
            // color="warning"
            value={isLight ? 'light' : 'dark'}
            exclusive
            onChange={(_evt, newVal) => setMode(newVal as 'light' | 'dark')}
            aria-label="Theme"
        >
            <ToggleButton value="light">
                <LightModeIcon sx={{ color: isLight ? 'orange' : 'grey' }} />
            </ToggleButton>
            <ToggleButton value="dark">
                <DarkModeIcon sx={{ color: isLight ? 'grey' : 'white' }} />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}