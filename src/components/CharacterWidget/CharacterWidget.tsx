import { useAppData } from "../../context/AppData.context";
import {
  CharacterWidgetContainer,
  CharacterWidgetContainerState,
  CharacterStatusBar,
  CharacterAvatar,
  CharacterStatusBarName,
  CharacterInfoContainer,
  CharacterInfo,
  CharacterInfoStats,
  CharacterWidgetButtonContainer,
} from "./CharacterWidget.styled";
import { StyledButton } from "../Button/Button.styled";

export const CharacterWidget = () => {
  const { characterData, handleNextClick, handlePrevClick, isLoading, error } =
    useAppData();

  if (!characterData) return null;
  if (error)
    return (
      <CharacterWidgetContainerState>{error}</CharacterWidgetContainerState>
    );

  return (
    <>
      {!isLoading ? (
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
            <StyledButton onClick={(e: any) => handlePrevClick(e)}>
              Previous
            </StyledButton>
            <StyledButton onClick={(e: any) => handleNextClick(e)}>
              Next
            </StyledButton>
          </CharacterWidgetButtonContainer>
        </>
      ) : (
        <CharacterWidgetContainerState>
          Loading...
        </CharacterWidgetContainerState>
      )}
    </>
  );
};
