import React, { useEffect, useState } from 'react';

import { useAsync } from '../../hooks/index';
import { getWeatherInfo } from './../../api/weather/index';
import { StyledContainer, StyledPage } from './Weather.styled';
import { HelperContent, MenuBar, WeatherContent } from './components/index';

const Weather = () => {
  const [searchInfo, setSearchInfo] = useState({
    city: undefined,
    lastUpdatedAt: undefined,
  });
  const { callbackFnInfo, invoke: invokeWeatherData } = useAsync(
    getWeatherInfo,
    [],
    {
      immediateInvoke: false,
    }
  );
  useEffect(() => {
    if (callbackFnInfo?.response) {
      setSearchInfo({
        city: callbackFnInfo.response?.data.location.name,
        lastUpdatedAt: callbackFnInfo.response?.data?.current?.last_updated,
      });
    } else if (callbackFnInfo?.error) {
      setSearchInfo({});
    }
  }, [callbackFnInfo]);
  return (
    <StyledPage>
      <StyledContainer elevation={5}>
        <MenuBar
          invokeWeatherData={invokeWeatherData}
          searchInfo={searchInfo}
          status={callbackFnInfo.status}
        />
        {searchInfo.city ? (
          <WeatherContent status={callbackFnInfo.status} />
        ) : (
          <HelperContent callbackFnInfo={callbackFnInfo} />
        )}
      </StyledContainer>
    </StyledPage>
  );
};

export default Weather;
