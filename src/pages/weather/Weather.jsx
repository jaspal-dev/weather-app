import { Box } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

import { useAsync, useResponsive } from '../../hooks/index';
import { getWeatherInfo } from './../../api/weather/index';
import { FULL_VIEWING_HEIGHT } from './../../constants';
import { LocationParam } from './../../utils';
import { StyledContainer, StyledPage } from './Weather.styled';
import { HelperContent, MenuBar, WeatherContent } from './components/index';

const Weather = () => {
  const locationParam = useCallback(new LocationParam(), []);
  const [searchInfo, setSearchInfo] = useState({
    city: undefined,
    lastUpdatedAt: undefined,
  });
  const immediateInvoke = Boolean(
    locationParam.location &&
      locationParam?.location?.toLowerCase() !== searchInfo?.city?.toLowerCase()
  );
  const { downMD } = useResponsive();
  const { callbackFnInfo, invoke: invokeWeatherData } = useAsync(
    getWeatherInfo,
    [immediateInvoke],
    {
      immediateInvoke,
      params: [
        immediateInvoke ? { cityName: locationParam.location } : undefined,
      ],
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
