import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import walmartStore from './store/walmartStore';
import Home from './components/home';


export default function App() {
  return (
    <Provider store={walmartStore}>     
        <Home></Home>
    </Provider>
  );
}




