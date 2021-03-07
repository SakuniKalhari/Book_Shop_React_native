import React ,{useState}from 'react'
import { View , Text, StyleSheet ,Button ,Modal} from 'react-native';
import Tbl from '../dash/table'
import Update from '../update/updateForm'

export default function Dash( {navigation} ){

    const [ modal , setModal] =useState(false);

   return(
       <View style={Styles.view} >
         <View style={{color: 'blue', fontSize: 30 , marginLeft :200 , marginRight :20 , marginTop :20 , marginBottom : 10}}>
                <Button  style={{color: '#74a3ed', fontSize: 30 , padding :12 }} color="blue" title="Add a Book "  
                onPress= { () => 
                   { 
                        setModal(true);
                        Styles.view = { backgroundColor :"#E2E2E2"  }
                   }       
                   } >
                    </Button> 
         </View>
        
       <View style={Styles.container}>
            <Tbl/>
       </View>

       <Modal visible={modal} animationType='slide' transparent={true} > 
               <View style={ { flex : 1 , backgroundColor :"#E2E2E2" ,marginTop : 70} }   >
                   <View style={ { paddingRight :20 , paddingBottom : 20, margin : 10 , backgroundColor :"#ffffff" , borderRadius :10 , marginTop :100} }>
                   <Text>Add Book</Text>
                   <View style={{ marginRight :40}}>
                       <Update/>
                   </View>
                   </View>
               </View>
          </Modal>

       </View>
   );

}

const Styles = StyleSheet.create({
    container : {
        height : 600 ,
        backgroundColor : 'white',
      
    },
    view : {
        backgroundColor : 'white',
        flex :1
    }
    
});
