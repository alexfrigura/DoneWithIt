import React, {useState} from 'react';
import { SwitchComponent, Text, TextInput, View, Switch, InputAccessoryView } from 'react-native';
import Card from './app/components/Card';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';


function App(props) {
  return <ListingEditScreen />
}

export default App;