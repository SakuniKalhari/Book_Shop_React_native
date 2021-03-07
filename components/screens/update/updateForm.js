import React ,{ useState }from 'react';
import { StyleSheet, Text, View ,TextInput ,Button} from 'react-native';

export default function Update(){


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Book SHOP</Text>

         <View style={{ padding :20}}>
            
         <TextInput  style={styles.input}
            placeholder='Book Name'
            />

         <TextInput  style={styles.input}
            placeholder='Author'
            />

        <TextInput  style={styles.input}
            placeholder='Book Price'
            />

         <TextInput  style={styles.input}
            placeholder='ID'
            />
         </View>

         <View style ={ { width :100, marginLeft :250} }>
         <Button  style={{color: 'blue', fontSize: 30 , padding :12 , width : 70}} title="Add"  onPress= { () => setModal(true) } ></Button> 
        </View>
     </View>

        
    )
}

const styles = StyleSheet.create({

    container : {

    },
    input : {
        marginBottom :10,
        padding :16,
        width : 340,
        marginTop : 20,
        borderWidth :1,
        borderRadius : 10,
        borderColor : '#bbb',
        flexDirection : 'row'
       
        },
    header :{
        height :30,
        paddingTop :40,
        backgroundColor : 'coral'
    },
    title : {
        textAlign :'center',
        fontSize : 20,
        fontWeight :'bold',
        color :'white' 
    }
})