'use client';

import TimelineIcon from "@mui/icons-material/Timeline";
import { Divider, SpeedDial, SpeedDialAction, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import LayersIcon from '@mui/icons-material/Layers';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalculateIcon from '@mui/icons-material/Calculate';
import ThemeSwitch from "./ThemeSwitch";

const actions = [
  { icon: <HomeIcon />, name: 'Home', url: '/' },
  { icon: <CalculateIcon />, name: 'Quick Calculate', url: '/quick-calc' },
  { icon: <PersonIcon />, name: 'Account', url: '/account' },
  { icon: <TimelineIcon />, name: 'Timeline', url: '/timeline' },
  { icon: <MenuBookIcon />, name: 'Logs', url: '/logs' },
];

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white dark:bg-gray-900 dark:shadow-gray-500">
        <Typography variant="h3" className="p-3 pr-10 dark:text-white">Commute Compute</Typography>
        <ThemeSwitch />
        <SpeedDial
          className="absolute right-10 top-5"
          ariaLabel="SpeedDial navigation"
          icon={<LayersIcon />} direction="down">
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{
                tooltip: {
                  open: true,
                  title: action.name,
                },
              }}
              onClick={() => router.push(action.url)} />
          ))}
        </SpeedDial>
      </div>
      <Divider variant="middle" />
    </header>
  )
}