import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import { FormLabel, Input, FormValidationMessage} from 'react-native-elements'

class AddRepForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  
  render(){
    return (
      <View>
      <Text>Name</Text>
      <Input onChangeText={(text) => {
    this.setState({text})}}/>
      <Text>Location</Text>
      <Input onChangeText={(text) => {
    this.setState({text})}}/>
      <Text>Email</Text>
      <Input onChangeText={(text) => {
    this.setState({text})}}/>
      <Text>phoneNumber</Text>
      <Input onChangeText={(text) => {
    this.setState({text})}}/>
      <Button
        onPress={() => {
          Alert.alert('Submitted')
        }}
        title="Submit"
      />
      </View>
    )
  }
}

export default AddRepForm

