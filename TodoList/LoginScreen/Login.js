import React, { useState } from "react";
import {Text , View ,StyleSheet , TextInput , Button , TouchableOpacity } from "react-native";
const LoginScreen = ({navigation}) =>  {
   const initailState = {
      email : "",
      password : ""
   }
   const [inptvalue , setinptvalue] = useState(initailState)
   const [data , setdata] = useState([])
   
  const  style = StyleSheet.create({     
     main_container : {
        backgroundColor: "gray",
        margin: 50,
        padding: 15,
        borderRadius: 5,
         
     },
    container : {
          padding:12,
         

       },
       loginText : {
            textAlign: "center",
            fontSize: 20,
            color: "black"
       }, 
       input1 : {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "white",
        padding: 12,
  
       },
       data_review : {
         justifyContent: "space-between",
         flexDirection: "row",
         color:"White",
       marginLeft: 20,
       marginRight: 20,
     },

     registere_here : {
          borderBottomWidth: 1,
           borderColor:"white"   
     },
     btn_1 : {
              alignItems: "center",
              marginTop:20,
              marginBottom: 10,
     },
     button_sigup : {
         color: "black",
         textAlign:"center",
         backgroundColor:"white",
         padding: 12,
         borderWidth: 1,
         alignItems: "center", 
         width:180,
         paddingBottom: 10,   
       margin: "auto", 
       borderRadius: 4,
       borderColor: "white",
       cursor: "Pointer" 
     }
    
  })
  
   const login = (e) => {
      e.preventDefault()
    setdata([...data , inptvalue]) 
    setinptvalue(initailState)
   }
  const Login_Value = (value , property ) => {
   setinptvalue({...inptvalue , [property] : value})
  }
   return (
      
       <>
       <View style={style.container} >
           <Text style={style.loginText}>Login Form</Text>
           </View>
           <View style={style.main_container}>
           <TextInput   label="Email" style={style.input1} value={inptvalue.email} onChange={(e) => Login_Value(e.target.value , "email" ) }  placeholder="Enter Email" />
           <TextInput  secureTextEntry={true} style={style.input1} value={inptvalue.password} onChange={(e) => Login_Value(e.target.value , "password")  } placeholder="Enter Password"/>
           <View style={style.data_review}>
             <Text>Remember Me</Text>
             <TouchableOpacity>
             <Text style={style.registere_here} onPress={() => navigation.navigate("Profile")}>Register Here</Text> 
             </TouchableOpacity>
              </View>
              <View style={style.btn_1}>
              <TouchableOpacity>
              <Text style={style.button_sigup} onPress={(e) => login(e)} >Login</Text>
              </TouchableOpacity>
              </View>
              {/* <TouchableOpacity>
           <Button onPress={(e) => login(e) } title="Login" />
           </TouchableOpacity>  */}
           </View>
       </>
   )
}

export default LoginScreen;