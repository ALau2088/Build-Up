import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, SafeAreaView} from 'react-native';
import call from 'react-native-phone-call'
import axios from 'axios';

class ContactEntry extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: []
    }
  }
  componentDidMount(){
    console.log('line 11',this.props)
    axios.get('http://localhost:3000/api/contacts', { 
      params: {
        id: this.props.productId
      }
    }) 
    .then(res => {
      this.setState({contacts: res.data})
      console.log('line18', res.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  call = () => {
    const args = {
      number: '0000000000',
      prompt: false,
    }
    call(args).catch(console.error);
  }
  render() {
    console.log('line 37', this.state.contacts[0])
    return (
      <SafeAreaView>
      <View style={StyleSheet.container}>
        
        <Button title="Make a call" onPress={this.call}/>
        <Text>Contact Name: John Doe</Text>
        <Text>Location: San Francisco, CA</Text>
        <Text>email: jWick@gmail.com</Text>
        <Text>phoneNumber: 555-555-5555</Text>
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
