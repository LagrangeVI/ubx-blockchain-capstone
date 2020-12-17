import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Text, Card, Title, Caption  } from 'react-native-paper';
import HeaderContianer from '../../../../shared/components/Container/HeaderContainer/HeaderContainer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getData } from "../../../../shared/utils";

const MarketProductInfo = (props) => {
  const [username, setUsername] = useState()
  
  const [goodsInfo, setgoodsInfo] = useState(props.route.params.item)
  const [usernameErr, setUsernameErr] = useState(false)

  const [isFarmer, setisFarmer] = useState(true);
    useEffect(()=>{
      getData('isFarmer').then(e=>setisFarmer(e))
    },[])
  
  const confirmCheckout = () => {
    Alert.alert(
      'Checkout',
      'Are you sure you want to checkout this product?',
      [
        {
            text: "Cancel",
            style: "cancel",
        },
        { text: "Checkout", 
          onPress: () => {
            console.log('checkout')
            // props.route.params.deleteGoods()
            props.navigation.navigate('Marketplace')
          } 
        },
      ],
      { cancelable: true }
    )
    props.route.params
  }

  return (
    <View
      style={{...styles.container}}
    >
      <HeaderContianer>
        <View style={{flex: 1, alignContent:'center', alignItems: 'center', marginTop: 40, marginBottom: 'auto'}}>
          <Text style={styles.incomeTitle}>{goodsInfo.goodsName}</Text>
          <Title style={styles.cardTitle}>Product details</Title>
        </View>
      </HeaderContianer>

      <Card style={{margin: 10,}} onPress={()=>{}}>
        <Card.Content style={{flexDirection: 'column', justifyContent: 'space-between', borderLeftWidth: 2, borderLeftColor: '#6200EE',}}>
          <View>
            <Title style={styles.cardTitle}>Price: {goodsInfo.amount}</Title>
            <Title style={styles.cardTitle}>Price per unit: {goodsInfo.amountPerUnit}</Title>
            <Title style={styles.cardTitle}>Quantity: {goodsInfo.quantityValue} {goodsInfo.quantityType} </Title>
            <Title style={styles.cardTitle}>Harvested: {goodsInfo.harvestDate}</Title>
            <Title style={styles.cardTitle}>Farming Start date: {goodsInfo.plantationDate}</Title>
            <Title style={styles.cardTitle}>Farming Start date: {goodsInfo.plantationDate}</Title>
          </View>
          <View>
            <Title style={styles.cardTitle}>Product description: {goodsInfo.additionalDesc}</Title>
          </View>
          {/* <MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /> */}
        </Card.Content>
      </Card>

      <Card style={{margin: 10,}} onPress={()=>{}}>
        <Card.Content style={{flexDirection: 'column', justifyContent: 'space-between', borderLeftWidth: 2, borderLeftColor: '#6200EE',}}>
          <View>
            <Title style={styles.cardTitle}>Farmer: {goodsInfo.farmerName}</Title>
            <Title style={styles.cardTitle}>Farm: {goodsInfo.farm}</Title>
          </View>
          {/* <MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /> */}
        </Card.Content>
      </Card>
      {!isFarmer && <View
        style={{flexDirection: 'row'}}
      >
        {/* {/* <Button 
          icon="plus" 
          mode="outlined" 
          style={{...styles.btn}}
          onPress={() => {confirmDelete()}}
        >
          DELETE PRODUCT
        </Button> */}
        <Button 
          icon="plus" 
          mode="contained" 
          style={{...styles.btn}}
          onPress={() => confirmCheckout()}
        >
          Checkout
        </Button> 
      </View>}
      {/* <TextInput
        label="Change Username"
        mode="flat"
        value={username}
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
        error={usernameErr}
        // onChangeText={text => handleUsername(text)}
      />
      <Button 
        mode="contained" 
        style={styles.btn}
        onPress={() => console.log('Submit')}
        uppercase
      >
        <Text style={styles.btnText}>Submit</Text>
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    fontSize: 15, 
    fontFamily: 'Lato-Regular'
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    height: 50,
    justifyContent: 'center',
    fontSize: 50, 
  },
  btnText: {
    fontFamily: 'Lato-Bold', 
    fontSize: 18, 
    color: '#FFF'
  },
  incomeTitle:{
    fontSize: 30,
    color: '#fff', 
    fontFamily: 'Lato-Bold'
  },
  cardTitle:{
    color: '#999', 
    fontFamily: 'Lato-Bold'
  },
  cardCaption:{
    fontFamily: 'Lato-Regular'
  }
});

export default MarketProductInfo