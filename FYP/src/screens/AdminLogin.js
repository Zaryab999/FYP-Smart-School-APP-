import React, {Component} from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
export default class Plogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 20}}>
          <Text style={styles.titletxt}>Login as Admin </Text>
        </View>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({username})}
          placeholder={'User Name'}
          style={styles.input}
          placeholderTextColor={'black'}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor={'black'}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('AdminPannel')}>
          <Text style={styles.txt}>Login</Text>
          <Icon name="arrow-right" type="evilicon" color="#fff" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ededed',

    height: '100%',
  },

  input: {
    width: '70%',
    height: 44,
    borderWidth: 1,
    borderColor: '#e6310b',
    marginBottom: 7,
    marginTop: 5,
    borderRadius: 10,
  },
  btn: {
    // color: '#e6310b',
    backgroundColor: '#e6310b',
    height: 40,
    width: '35%',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  txt: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 8,
  },
  titletxt: {
    fontSize: 24,
    color: '#e6310b',
    marginBottom: 20,
  },
});
