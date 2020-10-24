import React from 'react'
import { Helmet } from 'react-helmet';

//Components
import Input from '../components/Input';
import Result from '../components/Result';

//Styles
import '../helpers/styles/Initial.scss';
import { Container } from '../helpers/styles/Container';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { requestINPUT } from '../redux/reducers';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({requestINPUT});

export const store = 
  createStore((rootReducer), applyMiddleware(thunkMiddleware));

export default function MyApp() {
  return (
    <Provider store={store}>
      <Helmet>
        <title>MrOutadi</title>
        <link rel="shortcut icon" href="#"></link>
      </Helmet>
      <Container>
        <Input />
        <Result />
      </Container>
    </Provider>
  )
}
