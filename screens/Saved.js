import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Dimensions, ScrollView, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//show all 'liked' apts, able to view apt details

const colors = {
    blue: "#0070ff",
    lavender: "#E6E6FA"
}

export default function Saved(props) {
    const {savedApts} = props
    [contacted, setContacted] = useState([])

    const pressHandler = (id) => {
        console.log("id => ", id)
        // setContacted([...contacted, id])
        setContacted((prevContacted)=>{
            return prevContacted.push(savedApts.filter(apt => apt.id === id))
        })
    }

    return (
        <View>
            <Text style={styles.heading}>Saved Homes</Text>
            <FlatList 
            numColumns={5}
            keyExtractor={(apt) => apt.id}
            data={savedApts}
            renderItem={({apt})=> (
                <TouchableOpacity onPress={() => pressHandler(apt.id)}>
                <Image style={styles.imgScroll} source={apt.image[0]} />
                </TouchableOpacity>
            )}/>
            {/* <ScrollView>
                {savedApts.map(apt => 
                  <View key={apt.id} style={styles.imgScroll} onPress={contacted.push(apt)}>
                     <Image source={apt.image[0]} />
                  </View>  
                    )}
            </ScrollView> */}
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