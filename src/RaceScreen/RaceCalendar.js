import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import { Container, Header, Body, Content, Title } from 'native-base';

export default class RaceCalendar extends React.Component {
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
            onDayPress={(day) => {console.log('selected day', day)}}
            monthFormat={'MMMM'}
            onMonthChange={(month) => {console.log('month changed', month)}}
            hideExtraDays={true}
            firstDay={1}
          />
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
});
