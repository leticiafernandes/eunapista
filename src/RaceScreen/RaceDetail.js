import React from 'react';
import { Platform, StyleSheet, View } from "react-native";
import { Container, Header, Body, Content, Title, Card, CardItem, Text } from "native-base";
import axios from 'axios';

export default class RaceDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      race: ''
    };
  }

  componentDidMount() {
    console.log(`entrou => ${this.props.navigation.state.params.id}`);
    axios.get(`http://10.2.8.51:3000/events/${this.props.navigation.state.params.id}.json`)
    .then(res => {
      this.setState({race: res.data})
    }).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header>
              <Text style={styles.textColor}>Se liga nos detalhes do evento!</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.textTitle, styles.textColor}>Nome:</Text>
                  <Text style={styles.textColor}>teste</Text>
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
