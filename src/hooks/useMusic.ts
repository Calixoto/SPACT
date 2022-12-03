import { useContext } from "react";
import { MusicContext } from "../contexts/musicContext";

export const useMusic = () => useContext(MusicContext);
