/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class guava_react extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: "http://www.freshmeatdirect.co.uk/ekmps/shops/stdnmeats/images/9-x-peppered-bbq-minute-steaks-special-offer--57-p.jpg"}}
          style={styles.feature_image}
        />
        <Text style={styles.meal_name}>
          Steak & Eggs
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.info}>
            Cook time: 40 minutes
          </Text>
          <Text style={styles.info}>
            Feeds 3
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.input}>
              No
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.input}>
              Yes
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  meal_name: {
    fontSize: 50,
    textAlign: 'center',
    padding: 15,
    fontFamily: "arial",
    borderLeftWidth: 3,
    borderLeftColor: "#FFFFFF"
  },
  infoWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  info: {
    margin: 5,
  },
  input: {
    alignItems: 'center',
    fontFamily: "arial",
    fontSize: 24,
  },
  feature_image: {
    width: 250,
    height: 250,
  },
  buttonWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  button: {
    width: 100,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
  }
});

AppRegistry.registerComponent('guava_react', () => guava_react);
