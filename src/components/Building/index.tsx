import React, { useEffect, useState } from 'react';

import { Container, Wall, Roof, Flats, Hall, Window, Switch, Door, Platform } from '../../styles/components/Building';

interface WindowProps {
  turn: boolean;
}

const Building: React.FC = () => {
  const [windows, setWindows] = useState<[WindowProps]>([{ turn: false }])
  const windowsTotal = 12

  useEffect(() => {
    const booleanArray: any = new Array(windowsTotal)
    setWindows(booleanArray.fill({ turn: false }))
  }, [])

  function toggleLights() {
    const windowsOn = windows.filter(window => window.turn)

    if (windowsOn.length === windowsTotal) {
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

  function mappingWindows(window: any, i: number) {
    return <Window key={i} turn={window.turn} onClick={() => toggleLight(i)} />
  }

  return (
    <Container>
      <Wall>
        <Roof />
        <Flats>
          {windows.map(mappingWindows)}
        </Flats>
        <Hall>
          <Door />
          <Platform />
        </Hall>
      </Wall>
      <Switch onClick={() => toggleLights()}>
        Turn on
      </Switch>
    </Container>
  );
}

export default Building;