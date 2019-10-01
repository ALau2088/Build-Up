import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
import ProductEntry from './ProductEntry.js'


const ProductList = (props) => {
  console.log('line13:', props)
  return (
    <ScrollView>
      <FlatList
        data = {props.products}
        renderItem={({item}) => <ProductEntry product={item}/>}
      />
    </ScrollView>
  )
}

export default ProductList;