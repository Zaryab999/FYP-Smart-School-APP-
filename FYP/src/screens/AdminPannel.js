import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import fb from '../config';

class Inputs extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    added: false,
  };
  handleEmail = (text) => {
    this.setState({email: text, added: false});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };

  Onsubmit = () => {
    const {email, password} = this.state;
    console.log(email);
    console.log(password);
    fb.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
    // if (username == 'admin' && password == '12345') {
    //   Actions.push('apannel', {
    //     itemId: username,
    //   });
    // } else {
    //   Alert.alert('failed');
    // }
  };
  AddInfo() {
    const {email, password} = this.state;

    fb.database()
      .ref('students/')
      .push({
        email,
        password,
      })
      .then((data) => {
        //success callback
        console.log('data ', data);
        this.setState({added: true});
      })
      .catch((error) => {
        //error callback
        console.log('error ', error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Register IDs</Text>
        </View>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#e6310b"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#e6310b"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.AddInfo.bind(this)}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        {/* <Text>{this.state.error}</Text> */}
        {this.state.added ? <Text>Registered!</Text> : null}
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    height: '100%',
  },
  input: {
    margin: 15,
    height: 40,
    width: '70%',
    borderColor: '#e6310b',
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.5,
    color: '#e6310b',
  },
  submitButton: {
    backgroundColor: '#e6310b',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 20,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
