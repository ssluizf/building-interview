import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "building switch" "street street";

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-areas: "switch" "building" "street";
	}
`;

export const BuildingContainer = styled.div`
	grid-area: building;
	margin-top: 5vh;
	justify-self: center;
`;

export const Switch = styled.button`
	grid-area: switch;
	align-self: center;
	justify-self: center;
  width: 200px;
  height: 80px;

  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 40px;
  font-size: 36px;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme.colors.primary};
  user-select: none;

	@media (max-width: 768px) {
		justify-self: end;
		margin: 2vh 8vw 0 0;
		border: none;
		width: auto;
	}
`;

export const Street = styled.div`
	grid-area: street;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100vw;
  height: 5vh;
`;

export const Wall = styled.div`
  background-color: ${(props) => props.theme.colors.building_primary};
  width: 300px;
  height: 86vh;

  display: grid;
  grid-template-rows: 1fr 3fr 2fr;
	@media (max-width: 768px) {
		height: 80vh;
	}
`;

export const Roof = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Flats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5%;
  margin: 5%;
`;

export const Hall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Tile = styled.div`
  display: inline-block;
  position: absolute;
  width: 360px;
  margin-top: -6px;

  &::before {
    content: "";
    background-color: ${(props) => props.theme.colors.building_secondary};
    display: inline-block;
    height: 5vh;
    width: 180px;
    border-radius: 10px 0px 0px 10px;
    margin-right: -2px;

    transform: rotate(-5deg);
  }

  &::after {
    content: "";
    background-color: ${(props) => props.theme.colors.building_secondary};
    display: inline-block;
    height: 5vh;
    width: 180px;
    border-radius: 0px 10px 10px 0px;
    margin-left: -2px;

    transform: rotate(5deg);
  }
`;

export const Window = styled.div<{ turn: boolean }>`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px 5px 5px 5px;
  ${(props) =>
    props.turn &&
    css`
      box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.8),
        0px 5px 50px rgba(255, 255, 255, 0.8),
        0px 8px 80px rgba(255, 255, 255, 0.6),
        0px 8px 120px rgba(255, 255, 255, 0.6);
    `}
`;

export const Door = styled.div`
  background-color: ${(props) => props.theme.colors.building_secondary};
  border-radius: 5px 5px 0px 0px;
  height: 60%;
  width: 40%;
`;

export const Platform = styled.div`
	display: flex;
	justify-content: center;
	height: 4vh;

  &::after {
    content: "";
		position: absolute;
    background-color: ${(props) => props.theme.colors.building_secondary};
    width: 325px;
    height: 2vh;
  }
  &::before {
    content: "";
    background-color: ${(props) => props.theme.colors.building_secondary};
    width: 350px;
		position: absolute;
		margin-top: 2vh;
    height: 2vh;
  }
`;
