import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  render(){
    return (
      <>
        <View>
          <TextInput
            style={{height: 40}}
            placeholer="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.next}
          />
        </View>
        <Text>
          {this.state.text}
        </Text>
      </>
    )
  }
}

export default Search;
