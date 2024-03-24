import React from 'react';

// Third Party
import NetInfo from '@react-native-community/netinfo';

// Utility
import {store} from '../redux/store';
import Action from '../redux/action';

export const NetworkContext = React.createContext({isConnected: true});

export class NetworkProvider extends React.PureComponent {
  state = {
    isConnected: true,
  };

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener(state => {
      store.dispatch(Action.updateInternetStatus(state.isConnected));
      this.setState({
        isConnected: state.isConnected,
      });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <NetworkContext.Provider value={this.state}>
        {this.props.children}
      </NetworkContext.Provider>
    );
  }
}
