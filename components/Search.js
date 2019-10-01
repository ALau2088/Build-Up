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
        <View>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to Search!"
            onChangeText={(text) => {
              this.setState({text}, () => this.props.onChange(this.state.text));
            }}
            value={this.state.next}
          />
          <Text>
          {this.state.text}
          </Text>
        </View>
    )
  }
}

export default Search;
