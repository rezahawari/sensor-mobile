import {
  RiFileChartFill,
  RiFileChartLine,
  RiHomeSmile2Fill,
  RiHomeSmile2Line,
  RiMapPin2Fill,
  RiMapPin2Line,
} from "@remixicon/react";

const navs = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: RiHomeSmile2Line,
    iconFill: RiHomeSmile2Fill,
  },
  {
    label: "Maps",
    link: "/jadwal",
    icon: RiMapPin2Line,
    iconFill: RiMapPin2Fill,
  },
  {
    label: "Grafik",
    link: "/chart",
    icon: RiFileChartLine,
    iconFill: RiFileChartFill,
  },
];

export default navs;
