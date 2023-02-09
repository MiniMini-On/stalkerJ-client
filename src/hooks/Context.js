import { useState, createContext } from "react";

export const MbtiContext = createContext({
  mbti: "",
  setMbti: () => {},
  raw: "",
  setRaw: () => {},
});

export function MbtiContextProvider(props) {
  const [mbti, setMbti] = useState("");
  const [raw, setRaw] = useState("");

  return (
    <MbtiContext.Provider
      value={{
        mbti,
        setMbti,
        raw,
        setRaw,
      }}
    >
      {props.children}
    </MbtiContext.Provider>
  );
}
