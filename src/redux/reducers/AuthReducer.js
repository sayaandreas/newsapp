import {Auth} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  user: null,
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Auth.LOGIN_USER_BEGIN:
      return {
        ...state,
        loginIsLoading: true,
      };
    case Auth.LOGIN_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        user: action.payload,
      };
    case Auth.LOGIN_USER_FAIL:
      return {
        ...INITIAL_STATE,
        errorMessage: action.payload,
      };

    case Auth.REGISTER_USER_BEGIN:
      return {
        ...state,
        loginIsLoading: true,
      };
    case Auth.REGISTER_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        user: action.payload,
      };
    case Auth.LOGIN_USER_FAIL:
      return {
        ...INITIAL_STATE,
        errorMessage: action.payload,
      };

    case Auth.LOG_OUT:
      return {...INITIAL_STATE};
    default:
      return {...state};
  }
};
