import React from "react";
import { StyleSheet} from 'react-native';
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Form, Title, Input, Item, Label,Card, CardItem, Button, Text } from "native-base";

export default class Register extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Cadastro</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem header>
              <Text style={styles.titleText}>Quer compartilhar um evento? </Text>
              <Text style={styles.titleText}>Diz ai!</Text>
            </CardItem>
          </Card>
          <Form>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Nome</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Data da corrida</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Local de partida</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Horário de partida</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Local de chegada</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Valor</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Link oficial do evento</Label>
              <Input />
            </Item>
            <Button rounded danger
              style={styles.button}
              onPress={() => navigate("Profile")}>
              <Text>Criar!</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: '#3f51b5'
  },
  titleText: {
    color: '#3f51b5',
  }
});
