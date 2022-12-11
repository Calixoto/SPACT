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
import { MusicType } from "../types/musicTypes";

interface MusicContextProps {
  music: MusicType | null;
  getMusic: (q?: string) => void;
  transcript: string;
  handleActiveListening: () => Promise<void>;
  listening: boolean;
  searched: string;
}

export const MusicContext = createContext({} as MusicContextProps);

export const MusicContextProvider = ({ children }: { children: ReactNode }) => {
  const [music, setMusic] = useState<MusicType | null>(null);
  const [searched, setSearched] = useState("");
  const getMusic = useCallback(async (q?: string) => {
    await api
      .get("/search", {
        params: {
          q,
        },
      })
      .then((res) => {
        setMusic(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setSearched(q || ""));
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
    listening,
    searched,
  };
  return (
    <MusicContext.Provider value={provider}>{children}</MusicContext.Provider>
  );
};
