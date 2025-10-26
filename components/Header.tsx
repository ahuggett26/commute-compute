'use client';

import TimelineIcon from "@mui/icons-material/Timeline";
import { Divider, SpeedDial, SpeedDialAction } from "@mui/material";
import { useRouter } from "next/navigation";
import LayersIcon from '@mui/icons-material/Layers';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalculateIcon from '@mui/icons-material/Calculate';

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
      <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-2 shadow-md">
        <h1 className="text-4xl font-bold p-4">Commute Compute</h1>
        <SpeedDial
          className="absolute right-10 top-4"
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