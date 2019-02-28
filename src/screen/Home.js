/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <MapView style={{flex:1}}
        initialRegion={{
          latitude: 21.030756,
          longitude: 105.781736,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
            <Marker  coordinate={{
                  latitude: 21.030756,
                  longitude: 105.781736,
              }}
              title="Marker"
              description="Hello World"/>

        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
