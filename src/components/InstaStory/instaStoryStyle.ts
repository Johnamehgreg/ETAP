import React from "react";
// Customizable Area Start
import { StyleSheet, Dimensions, Platform } from "react-native";
import Scale, { verticalScale } from '../../constants/Scale'

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: Scale(62),
    width: Scale(62),
    backgroundColor: 'white',
    marginHorizontal: Scale(10),
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: Scale(20),
    borderWidth: Scale(2.1),
    borderColor: '#636AC4',
    padding: Scale(2.1),
    position:'relative',


  },

  userInstaImage: {
    borderRadius: Scale(20),
    flex: 1,
    resizeMode: 'cover',
  },

  userInstaContainer: {
    height: '100%',
    width: '100%',
    borderRadius: Scale(20),
    backgroundColor: '#636AC4',
   
  },


  storyCount: {
    backgroundColor: '#636AC4',
    minWidth: Scale(22),
    minHeight: Scale(20),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: "center",
    textAlign: "center",
    borderRadius: Scale(50),
    bottom: Scale(0),
    right:Scale(-7),
    zIndex: 100
  },


  loaderContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})

export default styles