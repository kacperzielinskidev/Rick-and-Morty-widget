import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import type { Character } from "../types/RickAndMorty.types";

type AppData = {
  characterData: Character | null;
  setCharacterData: Dispatch<SetStateAction<Character | null>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  handleNextClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AppDataContext = createContext<AppData>({
  characterData: null,
  setCharacterData: () => {},
  id: 1,
  setId: () => {},
  isLoading: false,
  setIsLoading: () => {},
  error: "",
  setError: () => {},
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

  const handleNextClick = useCallback(() => {
    setId(id + 1);
  }, [id]);

  const handlePrevClick = useCallback(() => {
    setId(id - 1);
  }, [id]);

  return (
    <AppDataContext.Provider
      value={{
        id,
        setId,
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
