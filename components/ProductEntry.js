import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, Button, Modal, TouchableHighlight, Alert} from 'react-native';

class ProductEntry extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible:false,
    }  
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
  const {product} = this.props;
    return (

      <View>
      <Text>{product.productName}</Text>
      <Image source={{uri: product.productImage}} style={{width: 100, height: 100}}/>
      <Text>{product.productDescription}</Text>
      <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <Button
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  title="Hide Modal"
                />
              </View>
            </View>
          </Modal>

          <Button
            onPress={() => {
              this.setModalVisible(true);
            }}
            title="Contact Rep"
          />
      </View>
    )}
}

export default ProductEntry;