import React, { useEffect, useState, useContext } from 'react';

import Media from 'react-media';
import bulb from '../../assets/bulb.svg'

import { Container, BuildingContainer, Switch, Wall, Roof, Flats, Hall, Tile, Window, Door, Platform, Street } from '../../styles/components/Building';

interface WindowProps {
  turn: boolean;
}

const Building: React.FC = () => {
  const [windows, setWindows] = useState<[WindowProps]>([{ turn: false }])
  const windowsTotal = 12
  const windowsOn: boolean = windows.filter(w => w.turn).length === windowsTotal

  useEffect(() => {
    const booleanArray: any = new Array(windowsTotal)
    setWindows(booleanArray.fill({ turn: false }))
  }, [])

  function toggleLights() {
    if (windowsOn) {
      const setWindowsOff: any = windows.map(() => {
        return { turn: false }
      })

      setWindows(setWindowsOff)
    } else {
      const setWindowsOn: any = windows.map(() => {
        return { turn: true }
      })

      setWindows(setWindowsOn)
    }
  }

  function toggleLight(i: number) {
    const windowsState: any = [...windows]
    windowsState[i] = { turn: !windowsState[i].turn }

    setWindows(windowsState)
  }

  function mappingWindows(w: any, i: number) {
    return <Window key={i} turn={w.turn} onClick={() => toggleLight(i)} />
  }

  return (
    <Container>
      <BuildingContainer>
        <Wall>
          <Roof>
            <Tile />
          </Roof>
          <Flats>
            {windows.map(mappingWindows)}
          </Flats>
          <Hall>
            <Door />
          </Hall>
        </Wall>
        <Platform />
      </BuildingContainer>
      <Switch onClick={() => toggleLights()}>
        <Media queries={{ medium: '(max-width: 768px)', large: "(min-width: 768px" }}>
          {matches => (
            <>
              {matches.medium && <img src={bulb} alt='bulb' />}
              {matches.large && 'Turn ' + (windowsOn ? 'off' : 'on')}
            </>
          )}
        </Media>
      </Switch>
      <Street />
    </Container>
  );
}

export default Building;