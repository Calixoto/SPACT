import { createContext, ReactNode, useCallback, useState } from "react";
import { api } from "../services/api";
import { MusciType } from "../types/musicTypes";

interface MusicContextProps {
  music: MusciType | null;
  getMusic: (q?: string) => void;
}

export const MusicContext = createContext({} as MusicContextProps);

export const MusicContextProvider = ({ children }: { children: ReactNode }) => {
  const [music, setMusic] = useState<MusciType | null>(null);
  const getMusic = useCallback(async (q?: string) => {
    await api
      .get("/search", {
        params: {
          q,
        },
      })
      .then((res) => {
        setMusic(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const provider = {
    getMusic,
    music,
  };
  return (
    <MusicContext.Provider value={provider}>{children}</MusicContext.Provider>
  );
};
