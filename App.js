import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  }

  return (
    <View style={styles.container}>
      <View style={styles.textAndBtn} >
        <TextInput placeholder="course goal" 
        style={styles.text} 
        onChangeText={goalInputHandler} 
        value={enteredGoal} 
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View >
        {courseGoals}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
