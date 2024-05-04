import { useCallback, useEffect, useState } from 'react';

const useAsync = (callbackFn, dependencies) => {
  const [callbackInfo, setCallbackInfo] = useState({
    error: null,
    isLoading: true,
    response: null,
  });
  const memorizedCallbackFn = useCallback(async () => {
    try {
      const response = await callbackFn();
      setCallbackInfo((callbackInfo) => ({
        ...callbackInfo,
        response,
      }));
    } catch (error) {
      setCallbackInfo((callbackInfo) => ({
        ...callbackInfo,
        error,
      }));
    } finally {
      setCallbackInfo((callbackInfo) => ({
        ...callbackInfo,
        isLoading: false,
      }));
    }
  }, dependencies);

  useEffect(() => {
    memorizedCallbackFn();
  }, [memorizedCallbackFn]);

  return callbackInfo;
};

export default useAsync;
