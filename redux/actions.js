export const inputStatus = (txt, start) => (dispatch) => {
  dispatch({
    type: 'PENDING_FOR_ANSWER'
  });
  fetch(
    'https://www.googleapis.com/customsearch/v1?' + 
    'key=AIzaSyAgHIbv7nuHtgVWKE7OmUbRPKEEMc9kwY4' + '&' + 
    'cx=0d73ee525054eb26a' + '&' + 
    'q=' + encodeURI(txt) + '&' +
    'start=' + start)
    .then(response => response.json())
    .then((data) => dispatch({
      type: 'REQUEST_SUCCESS',
      payload: data,
      Input: txt,
      startPage: start
    }))
    .catch(err => dispatch({
      type: 'REQUEST_FAILD',
      payload: err,
      Input: txt,
      startPage: start
    })
  )
}