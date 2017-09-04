'use strict';
import React from "react";

var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');

export default class GooglePlaces extends React.Component {

  constructor(props) {
    super(props);
  }

  handleUserSelection(value) {
    console.log(this.props);
    this.props.onPress(value.description);
  }

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder=""
        minLength={3}
        fetchDetails={true}
        onPress={this.handleUserSelection.bind(this)}
        getDefaultValue={() => {
          return '';
        }}
        query={{
          key: 'AIzaSyAgEqPr0fF_Rp475zdDFIg1W_mezOW8jtA',
          language: 'pt-BR',
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth:0,
            borderLeftWidth:0,
            borderRightWidth : 0,
            height : 25.5,
          },
          textInput : {
            marginTop: 5,
            marginBottom : 0,
            marginLeft: 0,
            marginRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            height: 15.5,
            alignItems: 'flex-start',
            fontSize: 16,
          },
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}

        //currentLocation={true}
        //currentLocationLabel="Localização atual"
        nearbyPlacesAPI='GooglePlacesSearch'
        GooglePlacesSearchQuery={{
          rankby: 'distance',
          types: 'food',
        }}

        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}

        predefinedPlacesAlwaysVisible={true}
      />
    );
  }
}
