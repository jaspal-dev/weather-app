import { useCallback, useEffect, useRef, useState } from 'react';

import { constants } from './../constants';
const { LOADING_STATUS } = constants;

const useAsync = (callbackFn, dependencies, immediateInvoke = false) => {
  const isMounted = useRef(null);
  const [callbackFnInfo, setCallbackFnInfo] = useState({
    error: null,
    response: null,
    status: LOADING_STATUS.IDLE,
  });
  const memorizedCallbackFn = useCallback(async () => {
    try {
      setCallbackFnInfo((callbackFnInfo) => ({
        ...callbackFnInfo,
        status: LOADING_STATUS.LOADING,
      }));
      const response = await callbackFn();
      if (isMounted.current)
        setCallbackFnInfo((callbackFnInfo) => ({
          ...callbackFnInfo,
          response,
          status: LOADING_STATUS.FINISHED,
        }));
    } catch (error) {
      if (isMounted.current)
        setCallbackFnInfo((callbackFnInfo) => ({
          ...callbackFnInfo,
          error,
          status: LOADING_STATUS.FINISHED,
        }));
    }
  }, dependencies);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (immediateInvoke) memorizedCallbackFn();
  }, [memorizedCallbackFn, immediateInvoke]);

  return { callbackFnInfo, invoke: memorizedCallbackFn };
};

export default useAsync;
