import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.teacherbtn}
          onPress={() => this.props.navigation.navigate('TeacherLogin')}>
          <Text style={styles.txt}>Login as Teacher </Text>
          <Icon name="arrow-right" type="evilicon" color="#fff" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.parentbtn}
          onPress={() => this.props.navigation.navigate('ParentLogin')}>
          <Text style={styles.txt}>Login as Parents </Text>
          <Icon name="arrow-right" type="evilicon" color="#fff" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.adminbtn}
          onPress={() => this.props.navigation.navigate('AdminLogin')}>
          <Text style={styles.txt}>Login as Admin </Text>
          <Icon name="arrow-right" type="evilicon" color="#fff" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  adminbtn: {
    width: 250,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#e6310b',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    flexDirection: 'row',
  },
  parentbtn: {
    width: 250,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#6eb012',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },
  teacherbtn: {
    width: 250,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#1cb5b8',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#ededed',
  },
  txt: {
    fontSize: 18,
    color: 'white',
  },
});
/*export default ({history}) => (

  
  <View style = {{width:359, height:40,marginLeft:0,marginTop:0,backgroundColor:'#ffff00'}}>
   <Header
           
          leftComponent={{ icon: 'menu', color: '#ffff00' }}
          centerComponent={{ text: 'Home', style: { color: '#ffff00' } }}
          rightComponent={{ icon: 'home', color: '#ffff00', }}
          //style={styles.input1}
        />
        
    <View style = {{width:250, height:50,marginLeft:60,marginTop:100}} >
          <Button title="Login as Teacher" onPress={() => Actions.push('tlogin')} />        
    </View>
        
      <View style = {{width:250, height:50,marginLeft:60,marginTop:20}} >
          <Button title="Login as Parent" onPress={() => Actions.push('plogin')} />        
      </View>
    
    
  </View>
 

); 
*/
