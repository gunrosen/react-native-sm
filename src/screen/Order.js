import React from 'react'
import { Text, View, Dimensions, ScrollView, Animated, SectionList, FlatList } from 'react-native'
import { ImageWithCaption } from '../components/common'
import SlidingUpPanel from 'rn-sliding-up-panel'

const { height } = Dimensions.get('window')



class Order extends React.Component {
  static defaultProps = {
    draggableRange: {
      top: height / 1.75,
      bottom: 60
    }
  }

  _draggedValue = new Animated.Value(80)

  render() {
    const { top, bottom } = this.props.draggableRange
    console.log(`top: ${top} and bottom: ${bottom}`);

    const draggedValue = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const transform = [{ scale: draggedValue }]

    return (
      <View style={styles.container}>
        <SectionList
          style={{ backgroundColor: 'lightblue' }}
          contentContainerStyle={{ alignItems: 'stretch' }}
          renderItem={({ item, index, section }) => {
            return <Text style={{ alignSelf: 'stretch', backgroundColor: 'lightgray' }} key={index}>{item}</Text>
          }}
          renderSectionHeader={({ section: { title } }) => {
            if ('fake' == title) return (
              <ImageWithCaption
                containerStyle={{
                  alignSelf: 'stretch',
                  height: 150,
                  position: 'relative',
                }}
                imageSrc={{ uri: 'https://images.foody.vn/res/g86/854377/s750x750/9f3b2c52-28d5-4fe6-aff9-900946e9413c.jpg' }}
                textHeader='Quan ngon Nhat Linh'
                textDetail='80A Tran Quoc Hoan'
              />
            )
            else return <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          }}
          sections={[
            { title: 'fake', data: [] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
          ]}
          keyExtractor={(item, section, index) => section + item + index}
        />
        <SlidingUpPanel
          showBackdrop={true}
          ref={c => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          onDragStart={() => console.log('onDragStart')}
          onDragEnd={() => console.log('onDragEnd')}
        >
          {dragHandler => (
            <View style={styles.panel}>
              <View style={styles.panelHeader} {...dragHandler}>
                  <Text style={{ color: '#FFF' }}>Bottom Sheet Peek</Text>
              </View>
              <ScrollView>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
              </ScrollView>
              {/* <View style={styles.panelContent}> */}
                {/* <FlatList
                  style={{ flex: 1, alignSelf: 'stretch', borderColor: 'red', borderWidth: 1 }}
                  keyExtractor={(item, index) => index + ''}
                  nestedScrollEnabled={true}
                  onScrollBeginDrag={() => console.log('onScrollBeginDrag')}
                  onScrollEndDrag={() => console.log('onScrollEndDrag')}
                  data={[
                    { key: 'adfsg' },
                    { key: 'sxgdfgb' },
                    { key: 'xdsfgdfc' },
                    { key: 'xdsfgsfgxsd' },
                    { key: 'xsfgsga' },
                    { key: 'sxgsgsxgb' },
                    { key: 'cxsgdxsgxs' },
                    { key: 'xsgdxxsgd' },
                    { key: 'axsgxsg' },
                    { key: 'bxsdgxssf' },
                    { key: 'cxsgxssxs' },
                    { key: 'dgsxgxag' },
                    { key: 'aswxgfwxs' },
                    { key: 'bswegxgwrc' },
                    { key: 'cxswgcgcer' },
                    { key: 'dxwrgcgecgesw' },
                    { key: 'cxsgdxsgxs' },
                    { key: 'xsgdxxsgd' },
                    { key: 'axsgxsg' },
                    { key: 'bxsdgxssf' },
                    { key: 'cxsgxssxs' },
                    { key: 'dgsxgxag' },
                    { key: 'aswxgfwxs' },
                    { key: 'bswegxgwrc' },
                    { key: 'cxswgcgcer' },
                    { key: 'dxwrgcgecgesw' }
                  ]}
                  renderItem={
                    ({ item }) => {
                      return <Text style={{ color: 'red' }}>{item.key}</Text>;
                    }
                  }
                /> */}
              {/* </View> */}
            </View>

          )}

        </SlidingUpPanel>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1,
     zIndex: 1,
    backgroundColor: 'red',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  panel: {
    flex: 1,
    backgroundColor: '#adc',
    position: 'relative'
  },
  panelHeader: {
    height: 60,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  panelContent: {
    flex: 1,
    backgroundColor: 'lightindigo',
    alignItems: 'stretch',
    justifyContent: 'center'
  }

}
export default Order