import React from 'react'
import { Text, View, Dimensions, ScrollView, Animated, SectionList, FlatList, Image, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { ImageWithCaption, Button } from '../components/common'
import SlidingUpPanel from 'rn-sliding-up-panel'
import { getProductList, addFood, removeFood } from '../actions';

const { height } = Dimensions.get('window')

class Order extends React.Component {
  _isMounted = false;
  static defaultProps = {
    draggableRange: {
      top: height / 1.75,
      bottom: 60
    }
  }
  _draggedValue = new Animated.Value(80)

  constructor(props){
    super(props);
    this.state = {showBackdrop : false};
  }
  componentDidMount() {
    this._isMounted = true;
    this.props.getProductList();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  _onAddFoodClick = (id) => {
    return () => this.props.addFood(id);
  }

  _onRemoveFoodClick = (id) => {
    return () => this.props.removeFood(id);
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  _renderRemoveAndValuePO = (item) => {
    try {
      if (item.quantity && item.quantity > 0) {
        return (
          <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingLeft: 5, paddingRight: 5 }}>
            <Ionicons name='ios-remove-circle-outline' size={25} color='#a8273b' onPress={this._onRemoveFoodClick(item.id)} />
            <TextInput style={{ width: 30, height: 40, borderColor: 'gray', borderWidth: 1 }} defaultValue='0' value={item.quantity + ''} placeholder='1' editable={false} />
            <Ionicons name='ios-add-circle' size={25} color='#4974a1' onPress={this._onAddFoodClick(item.id)} />
          </View>
        );
      } else return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingLeft: 5, paddingRight: 5 }}>
          <Ionicons name='ios-add-circle' size={25} color='#4974a1' onPress={this._onAddFoodClick(item.id)} />
        </View>
      );
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { navigation } = this.props;
    const shopName = navigation.getParam('name','Hoa la canh');
    const shopAddress = navigation.getParam('address','01 Duong Hung Vuong, Ha Noi');
    const shopPhoto = navigation.getParam('photo');

    const { top, bottom } = this.props.draggableRange

    const draggedValue = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const transform = [{ scale: draggedValue }]

    return (
      <View style={styles.container}>
        <SectionList
          contentContainerStyle={{ alignItems: 'stretch' }}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item, index, section }) => {
            return (
              <View style={{
                flex: 1,
                flexDirection: 'row',
                height: 120,
              }}>
                <Image source={{
                  uri: item.photo
                }}
                  style={{ width: 50, height: 50, borderRadius: 4, marginTop: 5, marginLeft: 5, marginRight: 5 }}
                />
                <View style={{ flex: 2.5, backgroundColor: 'white', padding: 5 }}>
                  <Text style={{ color: 'black', fontWeight: 'bold' }} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                  <Text style={{ color: '#525252' }} ellipsizeMode='tail' numberOfLines={3}>{item.description}</Text>
                  <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.price}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Ionicons name='ios-cart' size={16} color='#525252' />
                    <Text style={{ color: '#525252', marginLeft: 5 }}>{item.displayTotalOrder}</Text>
                  </View>

                </View>
                {this._renderRemoveAndValuePO(item)}

              </View>);
          }}

          renderSectionHeader={({ section: { name } }) => {
            if ('fake' == name) return (
              <ImageWithCaption
                containerStyle={{
                  alignSelf: 'stretch',
                  height: 160,
                  position: 'relative',
                }}
                imageSrc={{ uri: shopPhoto }}
                textHeader= {shopName}
                textDetail= {shopAddress}
              />
            )
            else return <Text style={styles.sectionTextStyle}>
              {name.toUpperCase()}
            </Text>
          }}
          sections={this.props.foodList}
          keyExtractor={(item, section, index) => section + item + index}
        />
        <SlidingUpPanel
          showBackdrop={this.state.showBackdrop}
          ref={c => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          onDragStart={() =>  this.setState({ showBackdrop: true })}
          onDragEnd={() => console.log('onDragEnd')}
        >

          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                <Ionicons name='ios-basket' size={25} color='white' />
                <Text style={{ color: '#FFF', marginLeft: 10, fontWeight: 'bold', fontSize: 15 }}>{this.props.total.toLocaleString('vn')}</Text>
              </View>
              <View style={{ backgroundColor: '#0b88fc', alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', paddingLeft: 10, fontSize: 15, fontWeight: 'bold' }}>Đặt hàng</Text>
                <Ionicons name='ios-arrow-round-forward' size={25} color='#fff' style={{ marginLeft: 10, paddingRight: 10 }} />
              </View>

            </View>

            <View style={styles.panelContent}>
              <FlatList
                style={{ flex: 1, alignSelf: 'stretch' }}
                ItemSeparatorComponent={this.renderSeparator}
                keyExtractor={(item, index) => index + ''}
                nestedScrollEnabled={true}
                onScrollBeginDrag={() => console.log('onScrollBeginDrag')}
                onScrollEndDrag={() => console.log('onScrollEndDrag')}
                data={this.props.purchaseOrder}
                renderItem={
                  ({ item }) => {
                    return (
                      <View style={{ margin: 5, flexDirection: 'row' }}>
                        <View style={{flex:2.5}}>
                          <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 5 }} ellipsizeMode='tail' numberOfLines={1}>{item.info.name}</Text>
                          <Text style={{ color: '#525252', marginTop: 5, marginBottom: 5 }} ellipsizeMode='tail' numberOfLines={1}>{item.info.price + ' x ' + item.quantity}</Text>
                        </View>
                        {this._renderRemoveAndValuePO(item)}
                      </View>
                    );
                  }
                }
              />
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  panel: {
    flex: 1,
    position: 'relative',
  },
  panelHeader: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  panelContent: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  sectionTextStyle: {
    fontSize: 16,
    color: '#6d6f71',
    backgroundColor: '#f5f6fb',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderBottomColor: '#e5e5ed',
    borderTopColor: '#e5e5ed',
    borderTopWidth: 1,
    borderBottomWidth: 1
  }

}
mapStateToProps = ({ order }) => {
  const { foodList, purchaseOrder, total } = order;
  return { foodList, purchaseOrder, total };
}
export default connect(mapStateToProps, { getProductList, addFood, removeFood })(Order);