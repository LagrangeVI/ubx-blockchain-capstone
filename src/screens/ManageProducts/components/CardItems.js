import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Title, Caption } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardItem = (props) => {
  return(
    <Card style={{margin: 20, borderTopRightRadius: 15, borderBottomRightRadius: 15, shadowRadius: 2 }} onPress={props.onPress}>
      <Card.Content style={{flexDirection: 'row', justifyContent: 'space-between', borderLeftWidth: 3, borderLeftColor: '#26B6BB'}}>
        <View>
          <Title style={styles.cardTitle}>{props.item? props.item.goodsName :  props.title}</Title>
          <Caption style={styles.cardCaption}>{props.item? props.item.additionalDesc : props.caption}</Caption>
        </View>
        {/* <MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /> */}
      </Card.Content>
    </Card>
)}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle:{
    fontFamily: 'Lato-Bold'
  },
  cardCaption:{
    fontFamily: 'Lato-Regular'
  }
});


export default CardItem