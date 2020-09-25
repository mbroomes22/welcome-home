import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Dimensions} from 'react-native';

//show user profile - photo, age, desired rental prop type, city, bdrms, baths, pets, price range, apt characteristics 

const colors = {
    blue: "#0070ff",
    lavender: "#E6E6FA"
}

export default function About() {
    [image, setImage] = useState("https://www.middlebury.edu/office/sites/www.middlebury.edu.office/files/2019-08/cookie-monster-portrait.jpg?fv=-jpox9ji")
    [budget, setBudget] = useState(2500)
    [age, setAge] = useState(25)
    [city, setCity] = useState("Jersey City")
    [state, setState] = useState("NJ")
    [beds, setBeds] = useState(1)
    [baths, setBaths] = useState(1)
    [pets, setPets] = useState("none")
    return (
        <View>
            <Text style={styles.heading}>
            Settings
            </Text>
            <Image 
            style={styles.portrait} 
            href={image}/>
            <Text>
                Name: Apartment Hunter
                Age: {age}
            </Text>
            <Text>
                location: {city, state}
            </Text>
            <Text>
                Budget: {budget}
            </Text>
            <Text>
                desired beds: {beds}  and baths: {baths}
            </Text>
            <Text>
                any pets? {pets}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: colors.blue,
        fontSize: 40
    },
    portrait: {
        borderRadius: 25,
        border: 3,
        borderColor: colors.lavender
    }
})