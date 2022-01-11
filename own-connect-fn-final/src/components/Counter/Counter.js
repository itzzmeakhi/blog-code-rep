import React from 'react';
import { connect } from 'react-redux';
import { connectFn } from './../../connectFn';

import QtyBtn from '../QtyBtn/QtyBtn';

import { incrementQty, decrementQty } from './../../redux/actions';

import './Counter.css';

const Counter = ({ counterValue, incrementQty, decrementQty }) => {
  return (
    <div id='counter'>
      <div id='qtyValue'>
        <p>{counterValue}</p>
      </div>
      <div id='qtyBtns'>
        <QtyBtn
          type="button"
          onClick={() => decrementQty()}>
          -
        </QtyBtn>
        <QtyBtn
          type="button"
          onClick={() => incrementQty()}>
          +
        </QtyBtn>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counterValue: state.counterValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementQty: () => dispatch(incrementQty()),
    decrementQty: () => dispatch(decrementQty())
  }
}

export default connectFn(mapStateToProps, mapDispatchToProps)(Counter);