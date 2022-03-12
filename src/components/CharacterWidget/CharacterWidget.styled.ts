import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../assets/styles/theme";

export const CharacterWidgetContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 120px;
  background-color: #f2f2f2;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

export const CharacterWidgetState = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 360px;
  height: 120px;
  background-color: #f2f2f2;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 11px;
`;

export const CharacterStatusBar = styled.span<{ isAlive: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ isAlive }) => {
    if (isAlive === "Alive") return theme.colors.Alive;
    if (isAlive === "Dead") return theme.colors.Dead;
    if (isAlive === "unknown") return theme.colors.unknown;
  }};
`;

export const CharacterStatusBarName = styled.p`
  padding-left: 10px;
  font-size: 11px;
  font-weight: 700;
`;

export const CharacterInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  height: 55%;
`;

export const CharacterInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 250px;
  max-width: 250px;
  gap: 20px;
`;

export const CharacterInfoStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 110px;

  p {
    font-size: 10px;
    font-weight: 600;
  }

  span {
    padding: 3px;
    border-radius: 4px;
    background-color: hsla(208, 59%, 81%, 1);
  }
`;

export const CharacterAvatar = styled.img`
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 hsla(0, 0%, 0%, 0.15);
`;

export const CharacterWidgetButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 12px;
`;
