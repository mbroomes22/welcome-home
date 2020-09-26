import { createStackNavigator } from 'react-navigation-stack'
import { NavigationContainer } from '@react-navigation/native'
import About from './screens/AboutMe'
import Details from './screens/Details'
import Saved from './screens/Saved'
import App from './App'

const Stack = createStackNavigator()

export default function Screens() {
    return (
        <NavigationContainer>
            <Stack.Navigatior initialRouteName="Home">
                <Stack.Screen name="Home" component={App} options={{title: "Next Nest"}}/>
                <Stack.Screen name="AptDetails" component={Details} options={{title: "Apt Details"}}/>
                <Stack.Screen name="About" component={About} options={{title: "User Profile"}}/>
                <Stack.Screen name="SavedApts" component={Saved} options={{title: "Saved Apts"}}/>
            </Stack.Navigatior>
        </NavigationContainer>
    )
}


