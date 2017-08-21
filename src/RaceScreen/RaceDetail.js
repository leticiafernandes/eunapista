import React from 'react';
import { Platform, StyleSheet, View } from "react-native";
import { Container, Header, Body, Content, Title, Card, CardItem, Text } from "native-base";

export default class RaceDetail extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Sobre</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem header>
              <Text style={styles.textColor}>Se liga nos detalhes do evento!</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.textTitle, styles.textColor}>Nome:</Text>
                  <Text style={styles.textColor}>ASICS Golden Run</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Data da corrida:</Text>
                  <Text style={styles.textColor}>20/08/2017</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Local de partida:</Text>
                  <Text style={styles.textColor}>Posto 2 - Leblon - RJ</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Horário de partida:</Text>
                  <Text style={styles.textColor}>07:00</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Local de chegada:</Text>
                  <Text style={styles.textColor}>Aterro do Flamengo - Flamengo - RJ</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Valor:</Text>
                  <Text style={styles.textColor}>R$ 180,00</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Link oficial do evento:</Text>
                  <Text style={styles.textColor}>www.asicsgoldenrun.com</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.textColor}>E ai, vai correr?</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textColor: {
    color: '#3f51b5',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  marginTop: {
    marginTop: 20,
  },
});
