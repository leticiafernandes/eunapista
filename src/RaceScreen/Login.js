import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Title, Form, Label, Button } from 'native-base';
import TextField from '../Util/TextField.js';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  render() {
    return (
      <Container>
        <Content style={styles.content} padder>
          <Form>
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
    backgroundColor: '#3f51b5',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
  marginTop: {
    marginTop: 10,
  },
});
