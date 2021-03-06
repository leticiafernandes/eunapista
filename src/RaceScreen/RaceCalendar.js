import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import { Container, Header, Body, Content, Title, Icon, List, ListItem, Left } from 'native-base';
import AppConfig from '../config';
import axios from 'axios';
import moment from 'moment';

export default class RaceCalendar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: '',
      markedDates: [],
      event_names: []
    }

    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    console.log(day);

    this.setState({
      selected: day.dateString
    });

    axios.get(`${AppConfig.host}/find_by_date?start_date=${day.dateString}`)
    .then(response => {
      let events = response.data,
          event_names = [];
      events.map((event) => {
          event_names.push(event.name)
      })
      this.setState({
        event_names
      })
    }).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
  }

  componentWillMount = () => {
    axios.get(`${AppConfig.host}/events.json`)
    .then(response => {
      let markedDates = [];

      response
        .data
        .map(event => event)
        .map(event => {
          markedDates.push({
            date: [moment(new Date(event.start_date)).format('YYYY-MM-DD')]
          });
        });

      this.setState({markedDates: markedDates});
    }).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
  }

  render() {
    LocaleConfig.locales['br'] = {
      monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
      monthNamesShort: ['Jan.','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out.','Nov','Dec'],
      dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
      dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
    };

    LocaleConfig.defaultLocale = 'br';

    return (
      <Container>
        <Header>
          <Body>
            <Title>Calendário</Title>
          </Body>
        </Header>
        <Content padder>
          <Calendar
            onDayPress={this.onDayPress}
            monthFormat={'MMMM'}
            onMonthChange={(month) => {console.log('month changed', month)}}
            hideExtraDays={true}
            markedDates={{[this.state.selected]: {selected: true}}}
            theme={{
              textSectionTitleColor: AppConfig.primaryColor,
              arrowColor: AppConfig.primaryColor,
              monthTextColor: AppConfig.primaryColor,
              selectedDayBackgroundColor: AppConfig.primaryColor,
              selectedDayTextColor: '#fff'
            }}
          />
          <View style={styles.box1}>
            <List
              dataArray={this.state.event_names}
              removeClippedSubviews={false}
              renderRow={(item) =>
                <ListItem icon
                  style={styles.listItem}>
                  <Left>
                    <Icon name="ios-information-circle-outline" style={styles.icon} />
                  </Left>
                  <Body style={styles.noBorder}>
                    <Text style={styles.text1}>{item}</Text>
                  </Body>
                </ListItem>
              }>
            </List>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  box1: {
    marginTop: 10,
  },
  text1:{
    fontSize: 14,
    color: AppConfig.primaryColor,
    marginLeft: 10,
  },
  icon: {
    fontSize: 20,
    color: AppConfig.primaryColor,
  },
  noBorder: {
    borderBottomWidth: 0,
  }
});
