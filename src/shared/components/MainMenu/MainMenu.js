import React, { useState } from 'react'
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../../screens/Home/Home'
import TransactionDetails from '../../../screens/Home/components/TransactionHistory/components/TransactionDetails'
import Settings from '../../../screens/Settings/Settings'
import ChangeInformation from '../../../screens/Settings/pages/ChangeInformation/ChangeInformation'
import ChangeUsername from '../../../screens/Settings/pages/ChangeUsername/ChangeUsername'
import ChangePassword from '../../../screens/Settings/pages/ChangePassword/ChangePassword'

import ManageProducts from '../../../screens/ManageProducts/ManageProducts'
import ProductInfo from '../../../screens/ManageProducts/pages/ProductInfo/ProductInfo'
import ChangeUsername3 from '../../../screens/ManageProducts/pages/ChangeUsername/ChangeUsername'
import AddProduct from '../../../screens/ManageProducts/pages/AddProduct/AddProduct'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const MainMenu = props => {
  const [visible, setVisible] = useState(true);

  const HomeComponents = () => {
    return(
      <>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} options={{ title: "Home" }}/>
        <Stack.Screen name="Transaction Details" component={TransactionDetails} options={{ title: "Transaction Details" }}/>
      </Stack.Navigator>
    </>
    )
  }
  
  const SettingsComponents = () => {
    return(
      <>
      <Stack.Navigator initialRouteName="Settings" headerMode="none">
        <Stack.Screen name="Settings" component={Settings} options={{ title: "Settings" }}/>
        <Stack.Screen name="Change Information" component={ChangeInformation} options={{ title: "Change Information" }}/>
        <Stack.Screen name="Change Username" component={ChangeUsername} options={{ title: "Change Username" }}/>
        <Stack.Screen name="Change Password" component={ChangePassword} options={{ title: "Change Password" }}/>
      </Stack.Navigator>
    </>
    )
  }
  const ManageComponents = () => {
    return(
      <>
      <Stack.Navigator initialRouteName="Manage" headerMode="none">
        <Stack.Screen name="Manage Products" component={ManageProducts} options={{ title: "Settings" }}/>
        <Stack.Screen name="Product Info" component={ProductInfo} options={{ title: "Product Info" }}/>
        <Stack.Screen name="Change Username" component={ChangeUsername3} options={{ title: "Change Username" }}/>
        <Stack.Screen name="Add Product" component={AddProduct} options={{ title: "Add Product" }}/>
      </Stack.Navigator>
    </>
    )
  }
  

return (
  <Tab.Navigator 
    initialRouteName="Home" 
    backBehavior="none"
    inactiveColor="#7D80DA"
    activeColor="#fff"
    shifting
    barStyle={{backgroundColor: '#6200ee'}}
  >
    <Tab.Screen 
      name="Home" 
      children={HomeComponents} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="apps" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
      name="Manage" 
      children={ManageComponents} 
      options={{
        tabBarLabel: 'Manage',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="treasure-chest" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
      name="Settings" 
      children={SettingsComponents} 
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="settings" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
)}

export default MainMenu