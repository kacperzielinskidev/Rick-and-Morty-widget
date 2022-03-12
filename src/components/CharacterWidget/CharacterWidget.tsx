import { useAppData } from "../../context/AppData.context";
import {
  CharacterWidgetContainer,
  CharacterWidgetState,
  CharacterStatusBar,
  CharacterAvatar,
  CharacterStatusBarName,
  CharacterInfoContainer,
  CharacterInfo,
  CharacterInfoStats,
  CharacterWidgetButtonContainer,
} from "./CharacterWidget.styled";
import { StyledButton } from "../Button/Button.styled";
import { useCallback, useEffect } from "react";
import { fetcher } from "../../utils/fetcher";
import { API_URL } from "../../config";

export const CharacterWidget = () => {
  const {
    handleNextClick,
    handlePrevClick,
    id,
    setCharacterData,
    characterData,
    setIsLoading,
    isLoading,
    error,
    setError,
  } = useAppData();

  const getCharacter = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetcher(`${API_URL}/character/${id}`, {
        method: "GET",
      });
      setCharacterData(response);
    } catch (e) {
      console.log(e);
      setError("An error occured... try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [id, setCharacterData, setError, setIsLoading]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  if (!characterData) return null;
  if (isLoading)
    return (
      <CharacterWidgetState
        initial={{ y: -100 }}
        animate={{ y: -10 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        Loading...
      </CharacterWidgetState>
    );

  return (
    <>
      {!error ? (
        <>
          <CharacterWidgetContainer
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CharacterStatusBar isAlive={characterData.status}>
              <CharacterStatusBarName>
                {characterData.name}
              </CharacterStatusBarName>
            </CharacterStatusBar>
            <CharacterInfoContainer>
              <CharacterInfo>
                <CharacterInfoStats>
                  <p>
                    <span>id</span> #{characterData.id}
                  </p>
                </CharacterInfoStats>
                <CharacterInfoStats>
                  <p>
                    <span>status</span> {characterData.status}
                  </p>
                </CharacterInfoStats>
                <CharacterInfoStats>
                  <p>
                    <span>gender</span> {characterData.gender}
                  </p>
                </CharacterInfoStats>
                <CharacterInfoStats>
                  <p>
                    <span>episodes</span> {characterData.episode?.length}
                  </p>
                </CharacterInfoStats>
              </CharacterInfo>
              <CharacterAvatar
                src={characterData.image}
                alt='Character avatar'
              />
            </CharacterInfoContainer>
          </CharacterWidgetContainer>
          <CharacterWidgetButtonContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <StyledButton
              whileHover={{
                scale: 1.1,
              }}
              onClick={(e: any) => handlePrevClick(e)}
            >
              Previous
            </StyledButton>
            <StyledButton
              whileHover={{
                scale: 1.1,
              }}
              onClick={(e: any) => handleNextClick(e)}
            >
              Next
            </StyledButton>
          </CharacterWidgetButtonContainer>
        </>
      ) : (
        <CharacterWidgetState
          initial={{ y: -100 }}
          animate={{ y: -10 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          {error}
        </CharacterWidgetState>
      )}
    </>
  );
};
