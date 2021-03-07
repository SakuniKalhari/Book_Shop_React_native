import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
 
    return(
        <View style={styles.header}>
            <Text style={styles.title}>BOOK SHOP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header :{
        height :60,
        paddingTop :40,
        backgroundColor : 'blue'
    },
    title : {
        textAlign :'center',
        fontSize : 20,
        fontWeight :'bold',
        color :'white',
        top:-17 
    }
})