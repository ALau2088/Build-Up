import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import ProductEntry from './ProductEntry.js'


const ProductList = (props) => {
  console.log('line13:', props)
  return (
    <SafeAreaView>
      <FlatList
        data = {props.products}
        renderItem={({item}) => <ProductEntry product={item}/>}
      />
    </SafeAreaView>
  )
}

export default ProductList;