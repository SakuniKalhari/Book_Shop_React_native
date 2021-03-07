import React ,{useState} from 'react'
import { View,TextInput,Button,StyleSheet} from 'react-native'

export default function Input ( {navigation} ) {
    
    const [text ,setText] = useState('');

    const set = (val) => {
        setText( ()=> val)
    }

    return (
        <View style ={styels.container}>
            <TextInput  style={styels.input}
            placeholder='User Name'
            />
             <TextInput  style={styels.input}
            placeholder='Password'
            />
            <View style={styels.button}>
            <Button  title="Login " color='blue' onPress= { () => navigation.navigate('Dash')} ></Button> 
            </View>
           
        </View>
    )
}

const styels = StyleSheet.create ({
      container : {
          marginTop :8,
          padding :20
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

      button : {
          paddingTop : 40,
        },
        btn : {
            padding :16,
            marginTop : 20,
            borderWidth :1,
            borderColor : 'white',
            flexDirection : 'row',
        }
})