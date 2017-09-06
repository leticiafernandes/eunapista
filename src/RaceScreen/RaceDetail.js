import React from 'react';
import { Platform, StyleSheet, View } from "react-native";

import { Container, Header, Body, Content, Title, Card, CardItem, Text } from "native-base";
import axios from 'axios';
import moment from 'moment';
import numeral from 'numeral';

export default class RaceDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      race: {}
    };
  }

  componentDidMount() {
    var self = this;
    axios.get(`http://192.168.0.12:3000/events/${this.props.navigation.state.params.id}.json`)
    .then(response => {
      console.log(response.data)
      self.setState({race: response.data})
    }).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card>
            <CardItem header>
              <Text style={styles.textColor}>Se liga nos detalhes do evento!</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View> 
                  <Text style={styles.textTitle, styles.textColor}>Nome:</Text>
                  <Text style={styles.textColor}>{this.state.race.name}</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Data da corrida:</Text>
                  <Text style={styles.textColor}>{moment(Date(this.state.race.start_date)).format('DD/MM/YYYY')}</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Local de partida:</Text>
                  <Text style={styles.textColor}>{this.state.race.start_local ? this.state.race.start_local.local_text : ''}</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Horário de partida:</Text>
                  <Text style={styles.textColor}>{moment.utc(this.state.race.race_time).format("HH:mm")}</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Local de chegada:</Text>
                  <Text style={styles.textColor}>{this.state.race.finish_local ? this.state.race.finish_local.local_text : ''}</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Valor:</Text>
                  <Text style={styles.textColor}>{numeral(this.state.race.value).format('0,00')}</Text>
                </View>
                <View style={styles.marginTop}>
                  <Text style={styles.textTitle, styles.textColor}>Link oficial do evento:</Text>
                  <Text style={styles.textColor}>{this.state.race.link}</Text>
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
  container: {
    backgroundColor: "#fff",
  },
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
