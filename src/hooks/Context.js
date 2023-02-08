import { useState, createContext } from "react";

export const MbtiContext = createContext({
  mbti: "",
  setMbti: () => {},
});

export function MbtiContextProvider(props) {
  const [mbti, setMbti] = useState("");
  const [raw, setRaw] = useState("");

  return (
    <MbtiContext.Provider
      value={{
        mbti,
        setMbti,
      }}
    >
      {props.children}
    </MbtiContext.Provider>
  );
}
