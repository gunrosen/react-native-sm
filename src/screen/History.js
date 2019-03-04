/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { SearchBar, ListItem, Card, Icon, Button  } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDeliveryIdThenInfo } from '../actions';
import { connect } from 'react-redux';


type Props = {};
class History extends Component<Props> {
  constructor(props){
      super(props);
      this.state = {
        isLoading: false,
        dataSource : []
      };
  }

  componentDidMount() {
      this.props.getDeliveryIdThenInfo();
  }

  componentWillReceiveProps(props) {
        let { lstId, lstDelivery, error } = props;
        this.setState({dataSource:lstDelivery});
  }

  render() {
    return (
      <View style={styles.container}>
           <SearchBar
               containerStyle={styles.searchBar}
               inputContainerStyle={{backgroundColor:'lightgray'}}
               inputStyle={{color:'black'}}
               placeholder="Find foods, drinks, location"/>

            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.dataSource}
              renderItem={this.renderItem}
               horizontal={false}
              numColumns={2}
              style={{marginTop:4, marginBottom:4}}
            />
      </View>
    );
  };
  keyExtractor = (item, index) => ''+index

renderItem = ({ item }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', margin: 1,margin:2 }}>
        <Card containerStyle={{margin: 4}}
        imageWrapperStyle={{margin:0}}
        image={{uri:item.photos[10].value}}
      >

            <View style={{marginTop:0}}>
                <Text style={{ fontWeight: 'bold', fontSize: 14}}  numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                <Text style={{ fontSize: 16, color:'#BDBDBD'}} numberOfLines={2}  ellipsizeMode='tail'>{item.address}</Text>
                <View style={{ flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
                      <Ionicons  name='ios-pricetag' size={16}  color='red'  margin={5}/>
                      <Text style={{ color: '#239839', marginLeft:10 }} title={item.promotion_title}>{item.promotion_title}</Text>
                </View>
            </View>
        </Card>
  </View>

  )
}

}

mapStateToProps = ({getDelivery}) => {
    const { lstId, lstDelivery, error } = getDelivery;
    return { lstId, lstDelivery, error };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'stretch',
    backgroundColor: '#F5FCFF',
  },
  searchBar:{
      alignSelf:'stretch',
      backgroundColor:'white',
      borderBottomColor: '#D0D0D0',
      borderTopColor: '#D0D0D0',
  }
});
export default connect(mapStateToProps, { getDeliveryIdThenInfo } )(History);
