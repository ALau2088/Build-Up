/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Search from './components/Search.js';
import ProductList from './components/ProductList.js';
// import products from './data/products.js';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount(){
    axios.get('http://localhost:3000/api/products')
    .then(res => {
      console.log(res.data)
      this.setState({products: res.data['products']})
    })
    .catch(err => console.log(err))
  }

  onChange(search){
    axios.get('http://localhost:3000/api/products')
    .then(res => {
      console.log(res.data)
      const products = res.data['products'].filter (product => product.productName === search)
      this.setState({products})
    })
    .catch(err => console.log(err))

    if (search === ''){
      axios.get('http://localhost:3000/api/products')
    .then(res => {
      console.log(res.data)
      this.setState({products: res.data['products']})
    })
    .catch(err => console.log(err))
    }
  }

  render(){
    console.log('line41:',this.state.products)
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Text h1>Build-Up</Text>
            <View style={styles.body}>
            <Search onChange={this.onChange}/>
              <View style={styles.sectionContainer}>
                <ProductList products={this.state.products}/>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
