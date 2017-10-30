import React from 'react';
import { AppRegistry, View, StatusBar, StyleSheet, Alert} from 'react-native';
import { Container, Content, Button, Text, Thumbnail } from 'native-base';
import AppConfig from '../config';

export default class Profile extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <View style={styles.personalData}>
            <Thumbnail large source={require('../../img/man.png')} />
            <Text style={styles.text1}>Olá, Pedro!</Text>
          </View>
          <View style={styles.checkIn1}>
            <Text>2</Text>
          </View>
          <View style={styles.checkIn2}>
            <Text>3</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  personalData: {
    backgroundColor: 'red',
    alignItems:'center',
  },
  checkIn1: {
    backgroundColor: 'blue',
  },
  checkIn2: {
    backgroundColor: 'orange',
  },
  text1: {
    fontSize: 18,
    color: AppConfig.primaryColor,
  }
});
