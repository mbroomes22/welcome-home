import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Dimensions} from 'react-native';
import Zillow from '../Zillow'

// show apt details - all avail photos, bedrms, building name, price, broker, specials, address, pets allowed, utilities, description, etc. 

export default function Details() {

    return (
        <View>
            {Zillow.map(property => 
               <View key={property.id}>
               <Image href={property.image[index]} /> 
               <Text>
                    {property.beds} beds
                    {property.baths} baths
                    price: {property.price} 
                    address: {property.address}
                    pets: cats only
                    description: {property.description}
               </Text>
               </View>
                )}
        </View>
    )
}