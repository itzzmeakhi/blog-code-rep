import React, { Component } from 'react';
import { store } from './redux/store';

const connectFn = (mapStateToProps, mapDispatchToProps) => {
  return (WrappedComponent) => {
    return class extends Component {

      unsubscribeTheStore = null;

      componentDidMount() {
        this.unsubscribeTheStore = store.subscribe(this.handleStateChange);
      }

      componentWillUnmount() {
        this.unsubscribeTheStore();
      }

      handleStateChange = () => {
        this.forceUpdate();
      }

      render() {
        return (
          <WrappedComponent 
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        );
      }
    }
  }
}

export { connectFn };