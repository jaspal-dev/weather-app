import { Box } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

import { useAsync, useResponsive } from '../../hooks/index';
import { getWeatherInfo } from './../../api/weather/index';
import { FULL_VIEWING_HEIGHT } from './../../constants';
import { LocationParam } from './../../utils';
import { StyledContainer, StyledPage } from './Weather.styled';
import { HelperContent, MenuBar, WeatherContent } from './components/index';

const Weather = () => {
  const locationParam = useCallback(new LocationParam());
  const immediateInvoke = Boolean(locationParam.location);
  const [searchInfo, setSearchInfo] = useState({
    city: undefined,
    lastUpdatedAt: undefined,
  });
  const { downMD } = useResponsive();
  const { callbackFnInfo, invoke: invokeWeatherData } = useAsync(
    getWeatherInfo,
    [immediateInvoke],
    {
      immediateInvoke,
      params: [immediateInvoke && { cityName: locationParam.location }].filter(
        Boolean
      ),
    }
  );
  useEffect(() => {
    if (callbackFnInfo?.response) {
      setSearchInfo({
        city: callbackFnInfo.response?.data.location.name,
        lastUpdatedAt: callbackFnInfo.response?.data?.current?.last_updated,
      });
      if (callbackFnInfo.response?.data.location.name) {
        locationParam.location = callbackFnInfo.response?.data.location.name;
      }
    } else if (callbackFnInfo?.error) {
      setSearchInfo({});
    }
  }, [callbackFnInfo]);
  return (
    <StyledPage>
      <StyledContainer
        component={Box}
        sx={{ minHeight: downMD ? FULL_VIEWING_HEIGHT : undefined }}
      >
        <MenuBar
          invokeWeatherData={invokeWeatherData}
          searchInfo={searchInfo}
          setSearchInfo={setSearchInfo}
          status={callbackFnInfo.status}
        />
        {searchInfo.city ? (
          <WeatherContent callbackFnInfo={callbackFnInfo} />
        ) : (
          <HelperContent callbackFnInfo={callbackFnInfo} />
        )}
      </StyledContainer>
    </StyledPage>
  );
};

export default Weather;
