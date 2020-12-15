import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: 'black',
    },
    containerStyle: {
      marginHorizontal: 5,
    },
    buttonStyle: {
      height: 30,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: '#9a9a9a'
    },
    color: "#9a9a9a",

  },
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', textTmp: '', result: '' };
  }

  _onChange(event) {
    this.setState({ result: this.state.text })
  }

  _onSubmit(event) {
    this.setState({ result: this.state.text.split("").reverse().join("") })
  }

  _onUndoRedo(event) {
    if (this.state.text.length > 0) {
      this.setState({
        textTmp: this.state.text,
        text: '',
      })
    } else {
      this.setState({
        text: this.state.textTmp,
        textTmp: ''
      })
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <TextInput
              style={styles.tInputStyle}
              onChangeText={(text) => this.setState({
                text: text,
                // result: text
              })}
              value={this.state.text}
              backgroundColor="#fff"
              placeholderTextColor="#000"
              placeholder="Input here..." />
            <View style={styles.spaceV} />
            <Text style={styles.output}>{'Output: ' + this.state.result}</Text>
            <View style={styles.spaceV} />
            <View style={styles.containerH}>
              <Button
                onPress={this._onSubmit.bind(this)}
                title="Reverse"
              />
              {/* <View style={styles.spaceH} /> */}
              <Button
                onPress={this._onUndoRedo.bind(this)}
                title="Undo/Redo"
              />
            </View>
            <StatusBar style="light" />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerH: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceH: {
    width: 20,
  },
  spaceV: {
    height: 20,
  },
  tInputStyle: {
    height: 30,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  textBlack: {
    color: 'black'
  },
  output: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  buttonStyle: {
    backgroundColor: '#9a9a9a'
  }
});
