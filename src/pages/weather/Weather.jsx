import React, { useState } from 'react';

import { useAsync } from '../../hooks/index';
import { getWeatherInfo } from './../../api/weather/index';
import { StyledContainer, StyledPage } from './Weather.styled';
import { MenuBar, WeatherContent } from './components/index';

const Weather = () => {
  const [city] = useState(undefined);
  // eslint-disable-next-line no-unused-vars
  const { callbackFnInfo, invoke } = useAsync(getWeatherInfo, [city]);
  return (
    <StyledPage>
      <StyledContainer elevation={5}>
        <MenuBar />
        <WeatherContent />
      </StyledContainer>
    </StyledPage>
  );
};

export default Weather;
