import { useCallback, useEffect, useState } from 'react';

import { constants } from './../constants';
const { LOADING_STATUS } = constants;

const useAsync = (callbackFn, dependencies, immediateInvoke = false) => {
  const [callbackFnInfo, setCallbackFnInfo] = useState({
    error: null,
    response: null,
    status: LOADING_STATUS.NOT_STARTED,
  });
  const memorizedCallbackFn = useCallback(async () => {
    try {
      setCallbackFnInfo((callbackFnInfo) => ({
        ...callbackFnInfo,
        status: LOADING_STATUS.LOADING,
      }));
      const response = await callbackFn();
      setCallbackFnInfo((callbackFnInfo) => ({
        ...callbackFnInfo,
        response,
      }));
    } catch (error) {
      setCallbackFnInfo((callbackFnInfo) => ({
        ...callbackFnInfo,
        error,
      }));
    } finally {
      setCallbackFnInfo((callbackFnInfo) => ({
        ...callbackFnInfo,
        status: LOADING_STATUS.FINISHED,
      }));
    }
  }, dependencies);

  useEffect(() => {
    if (immediateInvoke) memorizedCallbackFn();
  }, [memorizedCallbackFn, immediateInvoke]);

  return { callbackFnInfo, invoke: memorizedCallbackFn };
};

export default useAsync;
