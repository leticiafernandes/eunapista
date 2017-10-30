import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Title, Form, Label, Button } from 'native-base';
import TextField from '../Util/TextField.js';
import { StackNavigator } from 'react-navigation';
import AppConfig from '../config';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content style={styles.content} padder>
          <Form>
            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Nome</Label>
              <TextField
              placeholder="nome" />
            </View>
            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Email</Label>
              <TextField
              placeholder="email" />
            </View>
            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Senha</Label>
              <TextField
              placeholder="senha" />
            </View>
            <View style={styles.marginTop}>
              <Label style={styles.labelText}>Confirme sua senha</Label>
              <TextField
              placeholder="confirme sua senha" />
            </View>
            <Button rounded danger style={styles.button} >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </Button>
            <Button rounded danger style={styles.button} onPress={() => navigate('Profile')}>
              <Text>perfil</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  labelText : {
    color : '#4d4d4d',
    marginBottom: 10,
  },
  content: {
    margin: 10,
    justifyContent:'center',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: AppConfig.primaryColor,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
  marginTop: {
    marginTop: 10,
  },
});
