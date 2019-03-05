import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Spinner } from '../components/common'

export default class Order extends Component {
  constructor(props){
      super(props);
      this.state = {
        isLoading: false
      };
  }

  componentDidMount(){

  }

  render () => {
    return (
      <View>
          <Text>OrderScreen</Text>
      </View>
    )
  }
}
