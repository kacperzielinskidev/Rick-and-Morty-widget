import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  width: 90px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid hsla(0, 0%, 88%, 1);
  font-weight: 700;
  font-size: 12px;
  background-color: hsla(0, 0%, 95%, 1);
  cursor: pointer;
`;
