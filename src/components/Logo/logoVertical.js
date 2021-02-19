import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { ImgLogoVertical } from '../../assets'

const LogoVertical = () => (
  <Image source={ImgLogoVertical} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    marginBottom: 8,
    resizeMode: 'contain',
  },
})

export default LogoVertical;
