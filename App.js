import React from 'react';
import { Text, View ,StyleSheet , Button ,TextInput , Box }  from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const App = () => {
  const style = StyleSheet.create({
    container : {
       textAlign: 'center',
       marginTop: 200,

    },
    heading : {
      fontSize: 40,
      textAlign:"center",
    },
    center : {
      textAlign: 'center'
    },
    input : {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: "white",
      padding: 12,


    },
    loginbtn : {
      // alignItems: "center"
      marginRight: 40,
      marginLeft: 40,
      borderRadius: "10%",
      padding: 5,
    }, 
    
    

  })
  
  return (
    <View style={style.container} >
      <Text style={style.heading}>Instamobile</Text>
      <TextInput style={style.input}  placeholder='Enter Email'/>
      <TextInput style={style.input}  placeholder='Enter Email'/>
      <View style={style.loginbtn} >
      <Button  title="Login"/>
   
      </View> 
    </View>
  );
}

export default App;


// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   }