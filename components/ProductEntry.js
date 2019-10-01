import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, Button} from 'react-native';

const ProductEntry = ({product}) => {
  return (
    <View>
    <Text>{product.productName}</Text>
    <Image source={{uri: product.productImage}} style={{width: 100, height: 100}}/>
    <Button onPress={() => {
      alert('You tapped the button!');
      }}
      title="Contact Rep"
    />
    <Text>{product.productDescription}</Text>
    </View>
  )
}

export default ProductEntry;