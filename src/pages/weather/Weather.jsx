import React, { useState } from 'react';

import { useAsync } from '../../hooks/index';
import { getWeatherInfo } from './../../api/weather/index';
import { StyledContainer, StyledPage } from './Weather.styled';
import { HelperContent, MenuBar, WeatherContent } from './components/index';
import { contents } from './contents';

const Weather = () => {
  const [city, setCity] = useState(undefined);
  // eslint-disable-next-line no-unused-vars
  const { callbackFnInfo, invoke } = useAsync(getWeatherInfo, [city]);
  return (
    <StyledPage>
      <StyledContainer elevation={5}>
        <MenuBar city={city} setCity={setCity} />
        {city ? (
          <WeatherContent />
        ) : (
          <HelperContent
            description={contents.searchHelp}
            heading={contents.startSearching}
          />
        )}
      </StyledContainer>
    </StyledPage>
  );
};

export default Weather;
