import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ title, subTitle, image, onPress, IconComponent, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
            underlayColor={colors.light}
            onPress={onPress}>
        <View style={styles.container}> 
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}> {title}</AppText>
                {subTitle && <AppText style={styles.subtitle}> {subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    image: {
        width: 70 ,
        height: 70 ,
        borderRadius: 35,
    },
    title:{
        fontWeight: "bold",
    },
    subtitle:{
        color: colors.medium,
    },
    detailsContainer:{
        marginLeft: 10,
        justifyContent: "center",
    },
})
   
export default ListItem;