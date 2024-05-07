import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';

import { constants } from './../constants';

const { LOADING_STATUS } = constants;

const useAsync = (
  callbackFn,
  dependencies = undefined,
  { immediateInvoke = false, params = [] }
) => {
  const isMounted = useRef(null);
  const [callbackFnInfo, setCallbackFnInfo] = useState({
    error: null,
    response: null,
    status: LOADING_STATUS.IDLE,
  });
  const memorizedCallbackFn = useCallback(async (...args) => {
    try {
      setCallbackFnInfo({
        error: null,
        response: null,
        status: LOADING_STATUS.LOADING,
      });
      const response = await callbackFn(...(args.length ? args : params));
      if (isMounted.current)
        setCallbackFnInfo({
          error: null,
          response,
          status: LOADING_STATUS.FINISHED,
        });
    } catch (error) {
      if (isMounted.current)
        setCallbackFnInfo({
          error,
          response: null,
          status: LOADING_STATUS.FINISHED,
        });
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

useAsync.propTypes = {
  callbackFn: PropTypes.func.isRequired,
  dependencies: PropTypes.array,
  options: PropTypes.shape({
    immediateInvoke: PropTypes.bool,
    params: PropTypes.array,
  }),
};

export default useAsync;
