import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  first_name: t.String,
  last_name: t.String,
  nickname: t.maybe(t.String),
  phone_number: t.String,
  terms_of_use: t.Boolean,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: '#103458',
      fontSize: 18,
      marginBottom: 8,
      fontWeight: '700',
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 8,
      fontWeight: '700',
    },
  },
};

const options = {
  fields: {
    first_name: {
      error: 'First Name Required',
    },
    last_name: {
      error: 'Last Name Required',
    },
    phone_number: {
      error: 'Phone Number Required',
    },
    terms_of_use: {
      error: 'You must agree to Terms of Use',
    },
  },
  stylesheet: formStyles,
};

export default class Contact extends Component {

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ' + value);
    this.setState({value: null}); // <-- reset value

    return "value";
  };



  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => (this._form = c)}
          type={User}
          options={options}
        />
        <Button
          title="Enter Emergency Contact"
          color="#00E0A1"
          onPress={this.handleSubmit}
        />
        //<Text> Contacts </Text>
        //<Text style = {styles.text} > {this.handleSubmit} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
