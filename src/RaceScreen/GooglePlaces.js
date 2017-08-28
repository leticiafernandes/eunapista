'use strict';
import React from "react";

var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');

export default class GooglePlaces extends React.Component{
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Buscar local"
        minLength={3}
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log(data);
          console.log(details);
        }}
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
            borderRightWidth:0,
          },
          textInput:{
            marginLeft: 0,
            marginRight: 0,
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
