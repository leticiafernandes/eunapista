import React from 'react';
import { Platform, StyleSheet, View } from "react-native";

import { Container, Header, Body, Content, Title, Text, Icon} from "native-base";
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
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
    axios.get(`https://eu-na-pista.herokuapp.com/events/${this.props.navigation.state.params.id}.json`)
    .then(response => {
      console.log(response.data)
      self.setState({race: response.data})
    }).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
  }

  render() {
    let weekDay = moment(Date(this.state.race.start_date)).locale('pt-br').format('dddd').toUpperCase();
    let monthDay = moment(Date(this.state.race.start_date)).format('DD');
    let monthName = moment(Date(this.state.race.start_date)).locale('pt-br').format('MMMM');
    let year = moment(Date(this.state.race.start_date)).format('YYYY');

    return (
    <Content style={styles.container} padder>
        <Body>
          <View style={{flex: 1, alignItems:'center' , textAlign:'center', marginTop: 20, marginBottom: 20}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#3f51b5'}}>{this.state.race.name}</Text>
            <Text style={{fontSize: 18, color: '#3f51b5'}}>{monthDay} de {monthName}, {year}</Text>
          </View>
          <View>
          </View>
          <View style={styles.marginTop}>
            <View style={{flexDirection:'row',flexWrap:'wrap', alignItems: 'center'}}>
              <Text style={{marginRight: 10}}>Local de partida:</Text>
              <Icon active name="ios-pin-outline" />
            </View>
            <Text>{this.state.race.start_local ? this.state.race.start_local.local_text : ''}</Text>
          </View>
          <View style={styles.marginTop}>
          <View style={{flexDirection:'row',flexWrap:'wrap', alignItems: 'center'}}>
              <Text style={{marginRight: 10}}>Horário de partida:</Text>
              <Icon active name="ios-alarm-outline" />
            </View>
            <Text>{moment.utc(this.state.race.race_time).format("HH:mm")}</Text>
          </View>
          <View style={styles.marginTop}>
          <View style={{flexDirection:'row',flexWrap:'wrap', alignItems: 'center'}}>
              <Text style={{marginRight: 10}}>Local de chegada:</Text>
              <Icon active name="ios-ribbon-outline" />
            </View>
            <Text>{this.state.race.finish_local ? this.state.race.finish_local.local_text : ''}</Text>
          </View>
          <View style={styles.marginTop}>
          <View style={{flexDirection:'row',flexWrap:'wrap', alignItems: 'center'}}>
              <Text style={{marginRight: 10}}>Valor:</Text>
              <Icon active name="ios-cash-outline" />
            </View>
            <Text>{numeral(this.state.race.value).format('0,00')}</Text>
          </View>
          <View style={styles.marginTop}>
          <View style={{flexDirection:'row',flexWrap:'wrap', alignItems: 'center', marginBottom: 20}}> 
              <Text style={{marginRight: 10}}>Link oficial do evento:</Text>
              <Icon active name="ios-link-outline" />
            </View>
            <Text>{this.state.race.link}</Text>
          </View>
        </Body>
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
  }
});
