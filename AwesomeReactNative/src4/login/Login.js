import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

export class Login extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {textname: '', password: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <Text>Login</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={
                textname =>
                  this.setState({
                    textname,
                  })
                // console.log(text)
              }
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={password =>
                this.setState({
                  password,
                })
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d7cccc',
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
