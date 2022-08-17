import styled from "styled-components/native";
import { COLORS } from "./Theme";

export const BackgroundContainer = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
export const TopContainer = styled.View`
  background-color: ${COLORS.Light};
  height: 300px;
`;
export const BottomContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.primary};
`;
