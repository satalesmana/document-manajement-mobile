import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {lang} from '../../translations'
import { 
  NAV_SECONDARY, 
  NAV_PRIMARY 
} from '../../utils'
import {
  IconHomeActive,
  IconHomInactive,
  IconFavoritesActive,
  IconFavoritesInactive,
  IconPublicActive,
  IconPublicInactive,
  IconRelatedActive,
  IconRelatedInactive,
  IconTaskActive,
  IconTaskInactive

} from '../../assets'

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
      if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHomInactive />
      
      if(label === "Favourites") return isFocused ? <IconFavoritesActive/> : <IconFavoritesInactive />
      
      if(label === "Public") return isFocused ? <IconPublicActive/> : <IconPublicInactive />
      
      if(label === "Related") return isFocused ? <IconRelatedActive/> : <IconRelatedInactive />
      
      if(label === "MyTask") return isFocused ? <IconTaskActive/> : <IconTaskInactive />      

      return <IconHomInactive />
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
        <Icon />
        
        <Text style={styles.text(isFocused)}>{lang("acs_btmnav_"+label)}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 11,
        color: isFocused ? NAV_PRIMARY : NAV_SECONDARY,
        marginTop: 8
    })
});