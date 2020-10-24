import React from 'react'

import { connect } from 'react-redux'
import { inputStatus } from '../redux/actions';
import {store} from '../pages/_app'

import {PageButtons, PageButton} from '../helpers/styles/PageButtons'

const mapStateToProps = state => {
  return {
    resultsNumber: state.requestINPUT.resultsNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNextPage: () => dispatch(inputStatus(store.getState().requestINPUT.Input, store.getState().requestINPUT.startPage + 10)),
    onPrePage:   () => dispatch(inputStatus(store.getState().requestINPUT.Input, store.getState().requestINPUT.startPage - 10))
  }
}

function Item({resultsNumber, onNextPage, onPrePage }) {
  return (
    <PageButtons>
      <PageButton onClick={onPrePage}
                          disabled={store.getState().requestINPUT.startPage <10}
                          >{"< Previous"}</PageButton>
      <span>
        Page {Math.floor(store.getState().requestINPUT.startPage / 10) + 1} of {Math.floor(resultsNumber / 10) + 1}
      </span>
      <PageButton onClick={onNextPage}
                          disabled={store.getState().requestINPUT.startPage + 10 > resultsNumber}
                          >{"Next >"}</PageButton>
    </PageButtons>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);