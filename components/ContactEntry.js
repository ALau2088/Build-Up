import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, SafeAreaView} from 'react-native';
import call from 'react-native-phone-call'
import axios from 'axios';

class ContactEntry extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log('line 11',this.props)
  }

  call = () => {
    const args = {
      number: '0000000000',
      prompt: false,
    }
    call(args).catch(console.error);
  }
  render() {
    console.log('line 19', this.props)
    // const {contact}
    return (
      <SafeAreaView>
      <View style={StyleSheet.container}>
        
        <Button title="Make a call" onPress={this.call}/>
        <Text>{this.props.productId}</Text>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
})

export default ContactEntry;
