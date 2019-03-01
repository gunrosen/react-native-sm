/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

type Props = {};
export default class Home extends Component<Props> {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = { myLocation: {
          latitude: 21.016790,
          longitude: 105.784242
      }};
  }
  componentDidMount() {
        this._isMounted = true;
        this.requestLocationPermission();
  }
  componentWillUnmount() {
        this._isMounted = false;
  }

  async requestLocationPermission(){
      try{
          const grant = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: 'SmartBite Location Permission',
                message: 'SmartBite needs access to your location to serve you convenient',
                buttonPositive: 'OK',
                buttonNagative: 'Cancel'
              }
            );
            if(grant === PermissionsAndroid.RESULTS.GRANTED){
                  this.requestMyLocation();
            }else {
              console.log("Permission Denied");
            }
      } catch(err){
        console.error(err);
      }
  }

 requestMyLocation(){
      Geolocation.getCurrentPosition(
          (position) => {
              if(this._isMounted){
                  this.setState({
                      myLocation:{
                          latitude: position.coords.latitude,
                          longitude: position.coords.longitude
                      }
                    });

                      this.mapView.animateCamera({
                          center:{
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                          },
                          zoom: 16
                        }, 3000);
                }
            },
        (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  render() {
    return (
      <MapView
        ref = {(ref)=>this.mapView=ref}
        style={{flex:1}}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: this.state.myLocation.latitude,
          longitude:this.state.myLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
            <Marker
            coordinate={{
                  latitude: this.state.myLocation.latitude,
                  longitude:this.state.myLocation.longitude,
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
