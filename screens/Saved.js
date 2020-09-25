import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Dimensions} from 'react-native';

//show all 'liked' apts, able to view apt details

const colors = {
    blue: "#0070ff",
    lavender: "#E6E6FA"
}

export default function Saved(props) {
    const {savedApts} = props
    [contacted, setContacted] = useState([])
    return (
        <View>
            <Text style={styles.heading}>Saved Homes</Text>
            <View>
                {savedApts.map(apt => 
                  <View key={apt.id} style={styles.imgScroll} onPress={contacted.push(apt)}>
                      {apt.image[0]}
                  </View>  
                    )}
            </View>
            <View>
                {contacted.map(apt => 
                    <View key={apt.id}>
                        <Image href={apt.photo[0]} />
                        <Text>messages</Text>
                    </View>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: colors.blue,
        fontSize: 40
    },
    imgScroll: {
        borderRadius: 40
    }
})