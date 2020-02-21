import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import store from './redux/reduxState'
import TableContainer from './components/TableContainer'

export default function App() {
  return (
    <Provider store={store}>
          <TableContainer/>
    </Provider>
  );
}
