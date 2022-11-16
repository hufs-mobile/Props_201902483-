import React from "react";
import {Button, Text} from 'react-native';

function Home() {
    return (
        <>
            <Text> Hello Home </Text>
            <Button
              title="Go to Layout"
              onPress={() => navigation.navigate('Layout') } />
        </>

    );
}


export default Home
