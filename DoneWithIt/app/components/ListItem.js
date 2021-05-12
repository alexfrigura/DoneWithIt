import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ title, subTitle, image }) {
    return (
        <View style={styles.container}> 
            <Image style={styles.image} source={image} />
            <View>
                <AppText style={styles.title}> {title}</AppText>
                <AppText style={styles.subtitle}> {subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
    },
    image: {
        width: 50 ,
        height: 50 ,
        borderRadius: 35,
        marginRight: 10,
    },
    title:{
        fontWeight: "bold",
    },
    subtitle:{
        color: colors.medium,
    },
})
   
export default ListItem;