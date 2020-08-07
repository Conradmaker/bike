const GET_LIST = "station/GET_LIST";
const GET_LIST_SUCCESS = "station/GET_LIST_SUCCESS";
const GET_LIST_ERROR = "station/GET_LIST_ERROR";

export const getList = (callBack, callBack2) => async (dispatch) => {
  dispatch({ type: GET_LIST });
  try {
    const data = await callBack();
    const data2 = await callBack2();
    dispatch({ type: GET_LIST_SUCCESS, data, data2 });
  } catch (e) {
    dispatch({ type: GET_LIST_ERROR, error: e });
  }
};

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default function station(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_LIST_SUCCESS:
      return {
        loading: false,
        data: action.data,
        data2: action.data2,
        error: null,
      };
    case GET_LIST_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}
