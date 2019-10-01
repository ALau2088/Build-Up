import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, Button, Modal, TouchableHighlight, Alert} from 'react-native';
import axios from 'axios';
import ContactEntry from './ContactEntry.js';
import AddRepForm from './AddRepForm.js';

class ProductEntry extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible:false,
      modalVisibleForm: false,
      contacts: ''
    }  
  }

  componentDidMount(){
    axios.get('http://localhost:3000/api/products')
    .then(res => {
      console.log(res.data)
      this.setState({products: res.data['products']})
    })
    .catch(err => console.log(err))
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalVisibleForm(visible) {
    this.setState({modalVisibleForm: visible});
  }

  render(){
  const {product} = this.props;
  console.log('line30', product)
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
              <ContactEntry productId = {product.id}/>

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
        {/*Form Modal*/}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisibleForm}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <AddRepForm/>

              <Button
                onPress={() => {
                  this.setModalVisibleForm(!this.state.modalVisibleForm);
                }}
                title="Hide Modal"
              />
            </View>
          </View>
        </Modal>

        <Button
          onPress={() => {
            this.setModalVisibleForm(true);
          }}
          title="Add Rep"
        />
      </View>
    )}
}

export default ProductEntry;