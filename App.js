// import { StatusBar } from 'expo-status-bar';
import Swiper from 'react-native-deck-swiper'
import Zillow, {zillowAPI, rentalProps} from './Zillow'
import React, {useState, createRef, useEffect} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { StyleSheet, Text, View, Image, StatusBar, Dimensions} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Transition, Transitioning } from 'react-native-reanimated';




const {width} = Dimensions.get('window')

const colors = {
  red: "#ec2379",
  green: '#3cb371',
  blue: "#0070ff",
  gray: "#777777",
  black: "#000000",
  white: "#ffffff"
}

const ANIMATION_DURATION = 200;

const transition = (
  <Transition.Sequence>
    <Transition.Out type='slide-bottom' durationMs={ANIMATION_DURATION} interpolation='easeIn'/>
    <Transition.Together>
      <Transition.In type='fade' durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2}/>
      <Transition.In type='slide-bottom' durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2} interpolation='easeOut'/>
    </Transition.Together>
  </Transition.Sequence>
)

const Card = ({card}) => (
  <View style={styles.card}>
    <Image source={{uri: card.image}} style={styles.cardImage} />
  </View>
)

const CardDetails = ({index}) => {
  return (
  <View style={styles.CardDetails} key={Zillow[index].id}>
    <Text style={[styles.text, styles.address]}>{Zillow[index].address}</Text>
    <Text style={[styles.text, styles.price]}>${Zillow[index].price}</Text>
    <Text style={[styles.text, styles.beds]}>{Zillow[index].beds} bed</Text>
    <Text style={[styles.text, styles.baths]}>{Zillow[index].baths} bath</Text>
  </View>)
}

const swiperRef = createRef()
const transitionRef = createRef()

export default function App() {
  const [index, setIndex] = useState(0)
  const [properties, setProperties] = useState([])
  const onSwiped = () => {
    transitionRef.current.animateNextTransition()
    setIndex((index + 1) % Zillow.length)
  }


  useEffect(() => {  
    // const rentals = zillowAPI()
    // console.log("ZILLOW rental ARR RES=>", rentals)
    //  setProperties(rentals)
  }, [])

  

  return (
    <View style={styles.container}>
      <View style={styles.logoP}>
      <Text style={styles.logo}>
      Next Nest
      </Text>
      </View>
      <StatusBar hidden/>
      <MaterialCommunityIcons 
        name='crop-square'
        size={width}
        color={colors.blue}
        style={styles.diamondIcon}
      />
      <View style={styles.swiperContainer}>
      <Swiper
      ref={swiperRef}
      cards={Zillow}
      cardIndex={index}
      renderCard={(card) => <Card card={card}/>}
      onSwiped={onSwiped}
      stackSize={4}
      stackScale={10}
      stackSeparation={14}
      disableTopSwipe
      disableBottomSwipe
      animateOverlayLabelsOpacity
      animateCardOpacity
      infinite
      backgroundColor={'transparent'}
      overlayLabels={{
        left: {
          title: "NOPE",
          style: {
            label: {
              backgroundColor: colors.red,
              color: colors.white,
              fontSize: 45,
              right: 125,
              top: 75,
              transform: [{
                rotate: '45deg'
              }, {
                scale:1.2
              }]
            },
            wrapper: {
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              marginTop: 20,
              marginLeft: -20
            }
          }
        },
        right: {
          title: "LIKE",
          style: {
            label: {
              backgroundColor: colors.green,
              color: colors.white,
              fontSize: 45,
              left: 125,
              top: 75,
              transform: [{
                rotate: '-45deg'
              }, {
                scale:1.2
              }]
              
            },
            wrapper: {
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginTop: 20,
              marginLeft: 20
            }
        }}
      }}
      />
      </View>
      <View style={styles.bottomContainer}>
        <Transitioning.View ref={transitionRef} transition={transition}>
        <CardDetails index={index}/>
        </Transitioning.View>
        <View style={styles.bottomButtonsContainer}>
          <MaterialCommunityIcons.Button
            name = "close"
            size = {94}
            backgroundColor= 'transparent'
            underlayColor= 'transparent'
            activeOpacity={0.3}
            color={colors.red}
            onPress={()=> swiperRef.current.swipeLeft()}
          />
          <MaterialCommunityIcons.Button
            name = "check"
            size = {94}
            backgroundColor= 'transparent'
            underlayColor= 'transparent'
            activeOpacity={0.3}
            color={colors.green}
            onPress={()=> swiperRef.current.swipeRight()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  card: {
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: .08,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },

  cardImage: {
    width: "75%",
    flex: 1,
    resizeMode: 'contain'
  },

  swiperContainer: {
    flex:0.55,
  },

  bottomContainer: {
    flex: 0.45,
    justifyContent: 'space-evenly'
  },

  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  CardDetails: {
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Courier'
  },
  logo: {
    color: colors.blue,
    fontSize: 40
  },
  logoP: {
    top: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  address: {
    fontSize: 24,
    marginBottom: 10,
    color: colors.gray
  },
  price: {
    color: colors.blue,
    fontSize: 22,
    fontWeight: '500'
  },
  beds: {
    color: colors.blue
  },
  baths: {
    color: colors.blue
  },
  diamondIcon: {
    opacity: 0.03,
    transform: [{
      rotate: '45deg'
    }, {
      scale:1.6
    }],
    position: 'absolute',
    top: 30,
    left: -20
  }
});
