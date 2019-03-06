/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { SearchBar, ListItem, Card, Icon, Button  } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDeliveryIdThenInfo, getDeliveryInfo } from '../actions';
import { connect } from 'react-redux';


class History extends Component {
  _isMounted = false;
  constructor(props){
      super(props);
      this.state = {
        isLoading: false,
        dataSource : [],
        search: '',
        noResult: false
      };
  }
  componentDidMount() {
        this._isMounted = true;
        this.props.getDeliveryIdThenInfo('');
  }
  componentWillUnmount() {
        this._isMounted = false;
  }

  componentWillReceiveProps(props) {
        let { page, lstDelivery, error, noResult } = props;
        if(lstDelivery && this._isMounted){
              const lst = this.state.dataSource;
              Array.prototype.push.apply(lst,lstDelivery);
              this.setState({dataSource:lst,isLoading:false,noResult: false});
        }
        if(noResult){
              this.setState({isLoading:false, noResult: true});
        }
  }

  _handleLoadMore = () => {
        console.log(`Loadmore page= ${this.props.page}`);
        this.props.getDeliveryInfo();
  }

  _changeSearchText= (search) => {
      console.log(search);
      this.setState({search});
  }
  _onSubmitEditing= () => {
      this.setState({dataSource:[], isLoading:true}, () =>   this.props.getDeliveryIdThenInfo(this.state.search));
  }
  _renderNoResult = () => {
    if(this.state.noResult){
        return (
            <Text style={{alignSelf:'center', margin:3}} >Không tìm thấy kết quả</Text>
          );
    } else return null;
  }
  _onSelectFood = (item) => {
    console.log('click'+item);
    this.props.navigation.navigate('Order');
  }

  render() {
    return (
      <View style={styles.container}>
           <SearchBar
               containerStyle={styles.searchBar}
               inputContainerStyle={{backgroundColor:'lightgray'}}
               inputStyle={{color:'black'}}
               placeholder="Find foods, drinks, location"
               value={this.state.search}
               onChangeText={this._changeSearchText}
               onSubmitEditing={this._onSubmitEditing}
               showLoading={this.state.isLoading} />

              {this._renderNoResult()}
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.dataSource}
              renderItem={this.renderItem}
              horizontal={false}
              numColumns={2}
              style={{marginTop:4, marginBottom:4}}
              onEndReached={this._handleLoadMore.bind(this)}
              onEndThreshold={100}
            />
      </View>
    );
  };
  keyExtractor = (item, index) => ''+index

renderItem = ({ item }) => {
  let imageUri = "https://images.foody.vn/res/g10/98356/prof/s750x400/foody-mobile-t1-jpg-356-635727500262065961.jpg";
  if(item.photos || item.photos[10]){
      imageUri = item.photos[10].value;
  }
  let promotionTitle = item.promotion_title ? item.promotion_title : "Giảm giá 25%" ;
  return (
    <TouchableWithoutFeedback onPress={() => this._onSelectFood(item)}>
    <View style={{ flex: 1, flexDirection: 'column', margin:2 }}>
        <Card containerStyle={{margin: 4}}
        imageWrapperStyle={{margin:0}}
        image={{uri: imageUri}}
      >

            <View style={{marginTop:0}}>
                <Text style={{ fontWeight: 'bold', fontSize: 14}}  numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                <Text style={{ fontSize: 16, color:'#BDBDBD'}} numberOfLines={2}  ellipsizeMode='tail'>{item.address}</Text>
                <View style={{ flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
                      <Ionicons  name='ios-pricetag' size={16}  color='red'  margin={5}/>
                      <Text style={{ color: '#239839', marginLeft:10, marginRight:10 }} numberOfLines={1}  ellipsizeMode='tail'>{promotionTitle}</Text>
                </View>
            </View>
        </Card>
  </View>
  </TouchableWithoutFeedback>
  )
}

}

mapStateToProps = ({getDelivery}) => {
    const {  page, lstDelivery, error, noResult } = getDelivery;
    return { page, lstDelivery, error, noResult };
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
export default connect(mapStateToProps, { getDeliveryIdThenInfo,getDeliveryInfo } )(History);
