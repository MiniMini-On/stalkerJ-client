import { useContext } from "react";
import { MbtiContext } from "./Context";

export default function useMbti() {
  return useContext(MbtiContext);
}
