import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { api } from "../services/api";
import { MusciType } from "../types/musicTypes";

interface MusicContextProps {
  music: MusciType | null;
  getMusic: (q?: string) => void;
  transcript: string;
  handleActiveListening: () => Promise<void>;
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

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleActiveListening = useCallback(async () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      await SpeechRecognition.startListening({
        language: "pt-br",
        continuous: true,
      });
    }
  }, [listening, resetTranscript]);

  useEffect(() => {
    if (!listening && transcript !== "") {
      getMusic(transcript);
    }
  }, [getMusic, listening, transcript]);

  const provider = {
    getMusic,
    music,
    transcript,
    handleActiveListening,
  };
  return (
    <MusicContext.Provider value={provider}>{children}</MusicContext.Provider>
  );
};
