import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ThemeProvider } from 'styled-components'
import day from './styles/themes/day'
import night from './styles/themes/night'

import GlobalStyle from './styles/global'
import Building from './components/Building'

function App() {
  const [theme, setTheme] = useState(day)

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error(`Your browser doesn't support Geolocation`);
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }
  }, [])

  function onSuccess(position: any) {
    const { latitude, longitude } = position.coords

    axios.get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`)
      .then((response: any) => {
        const { sunrise } = response.data.results
        const now = new Date().getTime()
        const sunriseTime = new Date(sunrise).getTime()

        if (now > sunriseTime) {
          setTheme(day)
        }

        if (now < sunriseTime) {
          setTheme(night)
        }
      })
  }

  function onError() {
    console.error(`Failed to get your location!`)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Building />
      </div>
    </ThemeProvider>
  );
}

export default App;
