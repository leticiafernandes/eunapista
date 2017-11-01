import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import { Container, Header, Body, Content, Title, Icon, List, ListItem, Left } from 'native-base';
import AppConfig from '../config';

export default class RaceCalendar extends React.Component {
  render() {
    LocaleConfig.locales['br'] = {
      monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
      monthNamesShort: ['Jan.','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out.','Nov','Dec'],
      dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
      dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
    };

    LocaleConfig.defaultLocale = 'br';

    var race_name = [ 'Golden Run 21km','Do Leme ao Pontal','Corrida 10km','Corrida 5km'];

    return (
      <Container>
        <Header>
          <Body>
            <Title>Calendário</Title>
          </Body>
        </Header>
        <Content padder>
          <Calendar
            onDayPress={(day) => {console.log('selected day', day)}}
            monthFormat={'MMMM'}
            onMonthChange={(month) => {console.log('month changed', month)}}
            hideExtraDays={true}
            firstDay={1}
            theme={{
              textSectionTitleColor: AppConfig.primaryColor,
              arrowColor: AppConfig.primaryColor,
              monthTextColor: AppConfig.primaryColor,
            }}
          />
          <View style={styles.box1}>
            <List
              dataArray={race_name}
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
