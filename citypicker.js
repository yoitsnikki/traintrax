import React, { Component } from 'react'; 
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerExample extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
     let cities = [{
      value: 'Gilroy',
    }, {
      value: 'San Martin',
    }, {
      value: 'Morgan Hill',
    }, {
      value: 'Blossom Hill',
    }, {
      value: 'Capitol',
    }, {
      value: 'Tamien',
    }, {
      value: 'San Jose Diridon',
    }, {
      value: 'College Park',
    }, {
      value: 'Santa Clara',
    }, {
      value: 'Lawrence',
    }, {
      value: 'Sunnyvale',
    }, {
      value: 'Mountain View',
    }, {
      value: 'San Antonio',
    }, {
      value: 'California Avenue',
    }, {
      value: 'Palo Alto',
    }, {
      value: 'Menlo Park',
    }, {
      value: 'Redwood City',
    }, {
      value: 'San Carlos',
    }, {
      value: 'Belmont',
    }, {
      value: 'Hillsdale',
    }, {
      value: 'Hayward Park',
    }, {
      value: 'San Mateo',
    }, {
      value: 'Burlingame',
    }, {
      value: 'Millbrae',
    }, {
      value: 'San Bruno',
    }, {
      value: 'South San Francisco',
    }, {
      value: 'Bayshore',
    }, {
      value: '22nd Street',
    }, {
      value: 'San Francisco',
    }];
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
            {cities.map((city) => {

              return(

                <Picker.Item label = {city.value} value = {city.value}/>
              )
            })
            }
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}
export default PickerExample

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: '#00E0A1'
   }
})
