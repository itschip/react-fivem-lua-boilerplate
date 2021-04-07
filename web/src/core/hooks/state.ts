import { atom } from "recoil";

export const coreState = {
  visibility: atom<boolean>({
    key: "coreStateHidden",
    default: false,
  }),
};
