import styled from "styled-components/native";
import { COLORS, SIZES, SHADOWS } from "./Theme";

export const CardContainer = styled.View`
  z-index: 1;
  margin: 15px 30px;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
`;
export const CardInfoContainer = styled.View`
  background-color: ${COLORS.white};
`;

export const CardImageContainer = styled.View`
  width: 100%;
  height: 250px;
`;
export const ETitle = styled.Text`
  color: ${COLORS.primary};
`;
export const ESubTitle = styled.Text`
  color: ${COLORS.primary};
`;
