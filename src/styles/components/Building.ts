import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100vw;
    height: 100vh;
`

export const Wall = styled.div`
    background-color: ${props => props.theme.colors.building_primary};
    width: 300px;
    height: 90vh;

    display: grid;
    grid-template-rows: 1fr 3fr 2fr;
`

export const Roof = styled.div`

`

export const Flats = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 5%;
    margin: 5%;
`

export const Hall = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`

export const Tile = styled.div`
    background-color: ${props => props.theme.colors.building_secondary};
`

export const Window = styled.div<{ turn: boolean }>`
    background-color: ${props => props.turn ? 'yellow' : props.theme.colors.glass};
    border-radius: 5px 5px 5px 5px;
`

export const Door = styled.div`
    background-color: ${props => props.theme.colors.building_secondary};
    border-radius: 5px 5px 0px 0px;
    height: 60%;
    width: 40%;
`

export const Platform = styled.div`
    background-color: ${props => props.theme.colors.building_secondary};
    border-radius: 50px 50px 0px 0px;
    height: 10%;
    width: 120%;
`

export const Switch = styled.button`
    width: 200px;
    height: 80px;

    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 40px;
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.primary};
`