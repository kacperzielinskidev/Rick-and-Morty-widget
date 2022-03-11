import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import ky from "ky";
import { API_URL } from "../config";
import type { Character } from "../types/RickAndMorty.types";

type AppData = {
  characterData: Character | null;
  setCharacterData: Dispatch<SetStateAction<Character | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  handleNextClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AppDataContext = createContext<AppData>({
  isLoading: false,
  setIsLoading: () => {},
  error: "",
  setError: () => {},
  characterData: null,
  setCharacterData: () => {},
  handleNextClick: () => {},
  handlePrevClick: () => {},
});

export const useAppData = () => {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error("Error while rendering context");
  }

  return context;
};

export const AppDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [id, setId] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [characterData, setCharacterData] =
    useState<AppData["characterData"]>(null);

  const handleNextClick = () => {
    setId(id + 1);
  };

  const handlePrevClick = () => {
    setId(id - 1);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response: Character = await ky
          .get(`${API_URL}/character/${id}`)
          .json();

        const nextCharacterData: AppData["characterData"] = {
          id: response.id,
          name: response.name,
          status: response.status,
          gender: response.gender,
          image: response.image,
          episode: response.episode,
        };

        setCharacterData(nextCharacterData);
      } catch (e) {
        setError("An error occured... try again later.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <AppDataContext.Provider
      value={{
        isLoading,
        setIsLoading,
        characterData,
        setCharacterData,
        handleNextClick,
        handlePrevClick,
        error,
        setError,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
