import React from "react";
import { AppRegistry, View, StatusBar, StyleSheet } from "react-native";
import { Container, Header, Body, Content, Title, List, ListItem, Thumbnail,Button, Text } from "native-base";

export default class Events extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const items = [
      {name: 'ASICS Golden Run', description: 'Para quem quer mais que correr'},
      {name: '2017 Meia Maratona do Rio', description: 'Maratona CAIXA da cidade...'},
      {name: 'Circuito Soul Carioca', description: 'O Soul Carioca chegou para...'},
      {name: 'Meia do Pontal', description: 'Praça do Pontal - Recreio...'}
    ];

    return (
      <Container>
        <Header>
          <Body>
            <Title>Eventos</Title>
          </Body>
        </Header>
        <Content padder>
          <List removeClippedSubviews={false} dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Thumbnail size={80} source={require('../../img/running.png')} />
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.description}</Text>
                  <Button iconRight transparent primary>
                    <Text>Ver</Text>
                  </Button>
                </Body>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
