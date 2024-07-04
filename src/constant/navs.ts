import {
  RiBarChartFill,
  RiBarChartLine,
  RiHomeSmile2Fill,
  RiHomeSmile2Line,
  RiMapPin2Fill,
  RiMapPin2Line,
  RiSettingsFill,
  RiSettingsLine,
} from "@remixicon/react";

const navs = [
  {
    label: "Home",
    link: "/home",
    icon: RiHomeSmile2Line,
    iconFill: RiHomeSmile2Fill,
  },
  {
    label: "Maps",
    link: "/maps",
    icon: RiMapPin2Line,
    iconFill: RiMapPin2Fill,
  },
  {
    label: "Chart",
    link: "/chart",
    icon: RiBarChartLine,
    iconFill: RiBarChartFill,
  },
  {
    label: "Settings",
    link: "/settings",
    icon: RiSettingsLine,
    iconFill: RiSettingsFill,
  },
];

export default navs;
