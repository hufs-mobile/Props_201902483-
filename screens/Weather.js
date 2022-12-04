import React from "react";
import { Text, Alert , StyleSheet , View } from 'react-native' ;
import * as Location from 'expo-location' ;

import {REACT_APP_WEATHER_KEY} from "@env"
import axios from "axios";

export default class Weather extends React.Component {

    getWeather = async (latitude, longitude) => {
       try {
        const {data} = await axios. get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}@appid=${a3b3f8fd0618c368cb5844d8403d7320}`
        );
            console.log (data) ;
       } catch (error) {
            Alert.alert("Error",error.message)

       }
       
    };

    getLocation = async () => {
      try {
           // await location
           
           await Location.requestForegroundPermissionsAsync();
           const location = await Location.getCurrentPositionAsync();
           console.log(location);
           console.log(location.coords.latitude);
           console.log(location.coords.longitude);

           this.getWeather(location.coords.latitude, location.coords.longitude);
        } catch (error) {
            Alert.alert("error", {error})
        }

    };

    componentDidMount() {
        this.getLocation();

    };

    render () {
        <>
        </>
    }

}