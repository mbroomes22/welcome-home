import { createStackNavigator } from 'react-navigation-stack'
import { NavigationContainer } from '@react-navigation/native'
import About from './screens/AboutMe'
import Details from './screens/Details'
import Saved from './screens/Saved'
import App from './App'

export default function Screens() {
    return (
        <NavigationContainer>
            <Stack.Navigatior initialRouteName="Home">
                <Stack.Screen name="Home" component={App}/>
                <Stack.Screen name="AptDetails" component={Details}/>
                <Stack.Screen name="About" component={About}/>
                <Stack.Screen name="SavedApts" component={Saved}/>
            </Stack.Navigatior>
        </NavigationContainer>
    )
}


const Stack = createStackNavigator()