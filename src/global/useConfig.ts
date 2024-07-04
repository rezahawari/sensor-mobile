import { create } from "zustand";
import { Interface__Config } from "../constant/interfaces";

interface State {
  config: Interface__Config;
}

interface Actions {
  setConfig: (newState: Interface__Config) => void;
}

const defaultConfig: Interface__Config = {
  company: undefined,
  project: undefined,
  module: undefined,
  device_name: undefined,
};

const useConfig = create<State & Actions>((set) => ({
  config: defaultConfig,
  setConfig: (newState: Interface__Config) => set({ config: newState }),
}));

export default useConfig;
