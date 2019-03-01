/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import { SearchBar, ListItem  } from 'react-native-elements';
import { requestGetId } from '../actions';
import { connect } from 'react-redux';


type Props = {};
class History extends Component<Props> {
  constructor(props){
      super(props);
      this.state = {
        isLoading: false,
        dataSource : [
          {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
          },
          {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
          },
        ]
      };
  }

  componentDidMount(){
      this.props.requestGetId();
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
            />
      </View>
    );
  };
  keyExtractor = (item, index) => ''+index

renderItem = ({ item }) => {
  return (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{
      source: item.avatar_url && { uri: item.avatar_url },
      title: item.name[0]
    }}
  />
  )
}

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
export default connect(mapStateToProps, { requestGetId } )(History);
