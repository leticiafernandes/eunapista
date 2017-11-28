import React from 'react';
import { Platform, StyleSheet, View } from "react-native";

import { Container, Header, Body, Content, Title, Text, Icon, Card, Button} from "native-base";
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
import numeral from 'numeral';
import AppConfig from '../config';
import Session from "../Util/Session.js";

export default class RaceDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      race: {},
      buttonMsg: 'Adicionar a minha lista',
      bgColor: AppConfig.primaryColor,
      user_id: ''
    };
  }

  componentDidMount() {
    Session.getItem("@user_id")
    .then((user_id) => {
      this.setState({ user_id });
    });

    var self = this;
    axios.get(`${AppConfig.host}/events/${this.props.navigation.state.params.id}.json`)
    .then(response => {
      self.setState({race: response.data})
    }).catch((error)=>{
      console.log("api call error - busca json event");
      alert(error.message);
    });
  }

  checkInEvent = (user_id,event_id) => {
    let params = {
      user_id,
      event_id
    };

    axios.post(`${AppConfig.host}/check_in`,params)
    .then(response => {
      let status = response.status;

      switch (status) {
        case 200:
          // destroyed
          this.setState({
            buttonMsg: 'Adicionar a minha lista',
            bgColor: AppConfig.primaryColor
          });
          break;
        case 201:
          // created
          this.setState({
            buttonMsg: 'Remover da minha lista',
            bgColor: AppConfig.disabledColor
          });
          break;
      }
    }).catch((error)=>{
      console.log(`api call error - ${error.data}`);
      alert(error.message);
    });
  }

  render() {
    let weekDay = moment(new Date(this.state.race.start_date)).locale('pt-br').format('dddd').toUpperCase();
    let monthDay = moment(new Date(this.state.race.start_date)).format('DD');
    let monthName = moment(new Date(this.state.race.start_date)).locale('pt-br').format('MMMM');
    let year = moment(new Date(this.state.race.start_date)).format('YYYY');

    return (
    <Content style={styles.container} padder>
      <View style={styles.margin}>
        <View style={styles.box2}>
          <Text style={styles.title}>{this.state.race.name}</Text>
          <Text style={styles.subtitle}>{monthDay} de {monthName}, {year}</Text>
        </View>
        <Card style={styles.card}>
        <View style={styles.marginTop}>
          <View style={styles.box1}>
            <Icon active name="ios-pin-outline" style={styles.icon} />
            <Text style={styles.text2}>Local de partida</Text>
          </View>
          <Text style={styles.text1}>{this.state.race.start_local ? this.state.race.start_local.local_text : ''}</Text>
        </View>
        <View style={styles.marginTop}>
          <View style={styles.box1}>
            <Icon active name="ios-alarm-outline" style={styles.icon} />
            <Text style={styles.text2}>Horário de partida</Text>
          </View>
          <Text style={styles.text1}>{moment.utc(this.state.race.race_time).format("HH:mm")}</Text>
        </View>
        <View style={styles.marginTop}>
          <View style={styles.box1}>
            <Icon active name="ios-ribbon-outline" style={styles.icon} />
            <Text style={styles.text2}>Local de chegada</Text>
          </View>
          <Text style={styles.text1}>{this.state.race.finish_local ? this.state.race.finish_local.local_text : ''}</Text>
        </View>
        <View style={styles.marginTop}>
          <View style={styles.box1}>
            <Icon active name="ios-cash-outline" style={styles.icon} />
            <Text style={styles.text2}>Valor</Text>
          </View>
          <Text style={styles.text1}>{numeral(this.state.race.value).format('0,00')}</Text>
        </View>
        <View style={styles.marginTop}>
          <View style={styles.box1}>
            <Icon active name="ios-link-outline" style={styles.icon} />
            <Text style={styles.text2}>Link oficial do evento</Text>
          </View>
          <Text style={styles.text1}>{this.state.race.link}</Text>
        </View>
        <View style={styles.marginBottom}></View>
        </Card>
        <View>
          <Button rounded danger
            style={{ marginTop: 20, marginBottom: 20, alignSelf: "center", backgroundColor: this.state.bgColor}}
            onPress={() => this.checkInEvent(this.state.user_id, this.state.race.id)}>
            <Text>{this.state.buttonMsg}</Text>
          </Button>
        </View>
        <View style={styles.marginBottom}></View>
      </View>
    </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  marginTop: {
    marginTop: 20,
  },
  marginBottom: {
    marginBottom: 20,
  },
  margin: {
    margin: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: AppConfig.primaryColor,
  },
  subtitle: {
    fontSize: 18,
    color: AppConfig.primaryColor,
  },
  card: {
    alignItems:'center',
  },
  box1: {
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: 'center',
  },
  box2: {
    alignItems:'center',
    marginTop: 20,
    marginBottom: 20,
  },
  text1: {
    color: AppConfig.primaryColor,
    textAlign: 'center',
  },
  text2: {
    marginRight: 10,
    fontSize: 14,
    color: AppConfig.primaryColor,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 20,
    color: 'rgb(63, 81, 181)',
    marginRight: 10,
  },
});
