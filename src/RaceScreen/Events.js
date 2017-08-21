import React from "react";
import { AppRegistry, View, StatusBar, StyleSheet, Alert} from "react-native";
import { Container, Header, Body, Content, Title, List, ListItem, Thumbnail,Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";

export default class Events extends React.Component {

  render() {
    const items = [
      {name: 'ASICS Golden Run', description: 'Para quem quer mais que correr'},
      {name: '2017 Meia Maratona do Rio', description: 'Maratona CAIXA da cidade...'},
      {name: 'Circuito Soul Carioca', description: 'O Soul Carioca chegou para...'},
      {name: 'Meia do Pontal', description: 'Praça do Pontal - Recreio...'},
      {name: 'Circuito BB', description: 'Corrida de 10km'}
    ];

    const { navigate } = this.props.navigation;

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
                  <Button iconRight transparent primary
                    onPress={() => navigate('RaceDetail')} >
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
