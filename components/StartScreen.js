import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS,ScrollView,TextComponent} from 'react-native';
import Constants from 'expo-constants';



 export default function  StartScreen ({navigation}) {

  return (
    <View style={styles.container}>

      <Text style={styles.title}> Calculate Discount </Text>
      <View style={styles.inner}>
        <Text style={styles.starttext}>
          Click this button to start
        </Text>
      </View>
      <View style={styles.buttonframe}>
        <TouchableOpacity
          style={styles.appButtonContainer} onPress={() => navigation.navigate('DCalculation Screen')}>

          <Text style={styles.appButtonText} >Calculate Discount</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#9400D3',

  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    height: 50,
    width: 300,
    fontFamily: 'serif',
    textShadowColor: 'black',
    textShadowRadius: 10,
    paddingTop:15,
  },
  inner: {
    paddingTop: 100,
  },

  starttext: {
    fontSize: 20,
    paddingLeft: 60,
    paddingRight: 60,
     fontFamily: 'serif',
     color: 'white',
    paddingBottom:80,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'blue',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
     fontFamily: 'serif',
  },
  buttonframe: {
    paddingTop: 110,
  },

});
