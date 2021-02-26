import React from 'react';
import { View, Image } from 'react-native';
import {
    Slide1,
    Slide2
}from '../../assets';

const ImageSlider = ({title}) => {
    const Icon = () => {
        if (title === 'slide_one') return <Image source={Slide1} style={{width: 200,height: 200}}/>; //return <SliderOne />;

        if (title === 'slide_two') return <Image source={Slide2} style={{width: 200,height: 200}}/>; //<SliderTwo />;

        return <Image source={Slide1} style={{width: 200,height: 200}}/>;
    }
    
    return (
        <View>
            <Icon />
        </View>
    );
}

export default ImageSlider;


