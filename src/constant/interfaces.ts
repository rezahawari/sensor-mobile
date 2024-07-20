export interface Interface__SelectOption {
  value: any;
  label: string;
  subLabel?: string;
}

export interface Interface__Config {
  company: any;
  project: any;
  module: any;
  device_name: any;
}

export interface Interface__ChartDoughnut {
  datasets: {
    customTooltipLabels: string[];
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
    [key: string]: any;
  }[];
  labels?: string[];
  aspectRatio?: number;
  cutout?: string;
}

export interface Interface__ChartLine {
  datasets: {
    customTooltipLabels: string[] | number[];
    data: { x: string; y: number }[] | number[];
    backgroundColor: string[] | string;
    borderColor: string;
    borderWidth: number;
    fill?: boolean;
    tension?: number;
    [key: string]: any;
  }[];
  xLabel?: string;
  yLabel?: string;
  labels?: string[];
  aspectRatio?: number;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface LatLong {
  lat: number;
  long: number;
}
