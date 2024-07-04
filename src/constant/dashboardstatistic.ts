import { RiDeviceFill, RemixiconComponentType } from "@remixicon/react";

interface DashboardStats {
  id: any;
  label: string;
  value: string;
  icon: RemixiconComponentType;
}

export const dashboardstats: Array<DashboardStats> = [
  { id: 1, label: "Device Info", value: "T0001", icon: RiDeviceFill },
  {
    id: 2,
    label: "Alert Info",
    value: "Current data is stable, no alarms",
    icon: RiDeviceFill,
  },
];
