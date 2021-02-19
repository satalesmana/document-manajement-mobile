import React from 'react';
import { View } from 'react-native';
import {
    SliderOne, 
    SliderTwo
}from '../../assets';

const ImageSlider = ({title}) => {
    const Icon = () => {
        if (title === 'slide_one') return <SliderOne />;

        if (title === 'slide_two') return <SliderTwo />;

        return <SliderOne />;
    }
    
    return (
        <View>
            <Icon />
        </View>
    );
}

export default ImageSlider;


