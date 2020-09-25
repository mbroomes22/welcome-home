import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
import About from './screens/AboutMe'
import Details from './screens/Details'
import Saved from './screens/Saved'
import App from './App'

const screens = {
    Home: {
        screen: App
    },
    AptDetails: {
        screen: Details
    },
    About: {
        screen: About
    },
    SavedApts: {
        screen: Saved
    }
}