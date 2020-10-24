import React from 'react'
import debounce from 'lodash.debounce';

import {MainInput} from '../helpers/styles/Input'

import { connect } from 'react-redux'
import { inputStatus } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (value) => { dispatch(inputStatus(value, 0))
    }
  }
}

function Input({onSearchChange}) {
  const handleChange = debounce(onSearchChange, 400)
  return (
    <MainInput placeholder="Search..."
                      onChange={event => event.target.value && handleChange(event.target.value)} />
  )
}

export default connect(null, mapDispatchToProps)(Input);