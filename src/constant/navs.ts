import {
  RiRoadMapFill,
  RiRoadMapLine,
  RiSettingsFill,
  RiSettingsLine,
} from "@remixicon/react";

const navs = [
  {
    label: "Home",
    link: "/home",
    icon: RiRoadMapLine,
    iconFill: RiRoadMapFill,
  },
  // {
  //   label: "Maps",
  //   link: "/maps",
  //   icon: RiMapPin2Line,
  //   iconFill: RiMapPin2Fill,
  // },
  // {
  //   label: "Chart",
  //   link: "/chart",
  //   icon: RiBarChartLine,
  //   iconFill: RiBarChartFill,
  // },
  {
    label: "Settings",
    link: "/settings",
    icon: RiSettingsLine,
    iconFill: RiSettingsFill,
  },
];

export default navs;
