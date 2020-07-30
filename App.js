import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("What cool thing will we build today?!")
  return (
    <View style={styles.container}>
      <View style={styles.textAndBtn} >
        <TextInput placeholder="course goal" style={styles.text} />
        <Button title="ADD" />
      </View>
      <View style={styles.textAndBtn}>
        <TextInput placeholder="another course goal" style={styles.text} />
        <Button title="add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 30
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textAndBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15
  },

  text: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding:10,
    width: '60%'
  }
});
