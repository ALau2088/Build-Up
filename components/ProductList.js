import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';


const Product = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

const ProductList = (props) => {
  console.log('line13:', props)
  return (
    <SafeAreaView>
      <FlatList
        data = {props.products}
        renderItem={({item}) => <Product name={item.productName}/>}
      />
    </SafeAreaView>
  )
}

export default ProductList;