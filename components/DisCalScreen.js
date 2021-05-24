import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from 'react-native';
import Constants from 'expo-constants';
export default function DisCalScreen({ navigation, route }) {
  const [oPrice, setoprice] = useState(0);
  const [dpercentage, setdpercentage] = useState(0);
  const [save, setsave] = useState(0);
  const [finalPrice, setfinalPrice] = useState(0);
  const [history, sethistory] = useState([
    {
      oPrice: '',
      dpercentage: '',
      finalprice: '',
    },
  ]);

  function calculate() {
    if (dpercentage < 100) {
      var price = oPrice * (dpercentage / 100);
      setsave(price);
      var x = oPrice - price;
      setfinalPrice(x);
    } else {
      alert('Enter discount percentage below 100');
    }
  }
  const saveCalculations = () => {
    sethistory([
      ...history,
      {
        oPrice: oPrice,
        dpercentage: dpercentage,
        finalprice: finalPrice,
      },
    ]);
  };
  const display = () => {
    console.log(history);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}> Discount Calculator </Text>
      </View>
      <View style={styles.inputField1}>
        <TextInput
          style={styles.textInput}
          placeholder="Original Price"
          keyboardType="numeric"
          keyboardAppearance="dark"
          onChangeText={(text) => setoprice(text)}></TextInput>
      </View>
      <View style={styles.inputField2}>
        <TextInput
          style={styles.textInput}
          placeholder="Discount Percentage"
          onChangeText={(text) => setdpercentage(text)}
          keyboardType="numeric"
          keyboardAppearance="dark"></TextInput>
      </View>
      <View style={styles.displayView}>
        <Text style={styles.displayText}> Discount : {save} Rs </Text>
      </View>
      <View style={styles.displayView1}>
        <Text style={styles.displayText}> Final price : {finalPrice} Rs </Text>
      </View>

      <View style={styles.buttonframe1}>
        <TouchableOpacity style={styles.appButtonContainer} onPress={calculate}>
          <Text style={styles.appButtonText}>   Calculate Discount  </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonframe2}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={saveCalculations}>
          <Text style={styles.appButtonText}>     Save Calculations   </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonframe2}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() =>
            navigation.navigate('History Screen', { paramkey1: history })
          }>
          <Text style={styles.appButtonText}>           View History          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonframe3}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => navigation.navigate('Start Screen')}>
          <Text style={styles.appButtonText}>          Start Screen        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9400D3',
  },
  titleView: {
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    height: 50,
    width: 300,
    fontFamily: 'serif',
    textShadowColor: 'black',
    textShadowRadius: 10,
    paddingTop: 15,
  },

  inputField1: {
    paddingTop: 20,
  },
  inputField2: {
    paddingTop: 20,
  },

  textInput: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    height: 35,
    width: 300,
    fontFamily: 'serif',
    fontStyle: 'italic',
  },
  displayView: {
    paddingTop: 20,
  },
  displayView1: {
    paddingTop: 20,
  },
  displayText: {
    flexDirection: 'column',
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    height: 35,
    width: 300,
    fontFamily: 'serif',
  },
 appButtonContainer: {
    elevation: 5,
    backgroundColor: 'blue',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },

  buttonframe1: {
    paddingTop: 30,
  },
  buttonframe2: {
    paddingTop: 20,
  },
  buttonframe3: {
    paddingTop: 20,
  },
  appButtonText: {
    fontSize: 15,
    color: 'white',
    shadowColor:'black',
    style: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontFamily: 'serif',
  },
});
