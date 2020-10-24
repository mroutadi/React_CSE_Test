const initialState = {
  response: [],
  isPending: false,
  onStart: true,
  error: '',
  Input: '',
  startPage: 0,
  resultsNumber: 0
}

export const requestINPUT = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'PENDING_FOR_ANSWER':
      return Object.assign({}, state, {isPending: true});
    case 'REQUEST_SUCCESS':
      return Object.assign({}, state, 
        {
          response: action.payload,
          isPending: false,
          Input: action.Input,
          startPage: action.startPage,
          resultsNumber: action.payload.searchInformation.totalResults,
          onStart: false
        });
    case 'REQUEST_FAILD':
      return Object.assign({}, state, 
        {
          error: action.payload,
          isPending: false,
          Input: action.Input,
          startPage: action.startPage,
          onStart: false
        });
    default:
      return state;
  }
}