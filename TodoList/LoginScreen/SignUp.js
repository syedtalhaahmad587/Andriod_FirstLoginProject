import React , {useState} from "react";
import {Text ,StyleSheet , View , TextInput , Button , Touchable, AsyncStorage  } from "react-native";

const Sign  = ({navigation}) => {

    const style = StyleSheet.create({
       Sig_Up : {
           fontSize: 30,
           textAlign: "center",
           padding: 10,   
           color: "black"  
       },
        container : {
            backgroundColor: "gray",
            margin: 25,
            borderRadius: 12,
            // height: 800,

        },
      Text_Input : {
         borderWidth :  1,
         borderColor: "white",
         padding: 10,
         margin: 20,
         
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
          Color: "Black",
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
    const initailState = {
          Uname : "",
          fullName : "",
          email : "",
          password : "",
          confirmPassword : "" 
    }
    const [data , setdata ] = useState(initailState)
    const [list , setlist] = useState([])

    const signUp = (e) => {
        e.preventDefault()
        setlist([...list , data ])
         setdata(initailState);
    }
    const input_value = (value , property) => {
             setdata({...data , [property] : value})
      }
      const dataSave =  {}
        dataSave.Uname = data.Uname
        dataSave.fullName = data.fullName
        dataSave.email = data.email
        dataSave.password = data.password
        dataSave.confirmPassword = data.confirmPassword.value 
      console.log({dataSave})
        let registere_here = registere_here.push(dataSave)
        console.log(registere_here)
          _storeData = async () => {
            try {
              await AsyncStorage.setItem("User" , JSON.stringify(registere_here) );
            } catch (error) {
              console.log(error)
            }
          };
   return (
        <>
         
        <View>
        <View>
            <Text style={style.Sig_Up} >SigUp</Text>
        </View>
          <View style={style.container} >
              <TextInput style={style.Text_Input} label="Text" value={data.Uname}  onChange={(e) => input_value(e.target.value , "Uname" )  }  placeholder="Enter Name"/>
              <TextInput style={style.Text_Input} label="Text" value={data.fullName}  onChange={(e) => input_value(e.target.value , "fullName" )}   placeholder="Enter FullName"/>
              <TextInput style={style.Text_Input} label="Email" value={data.email}  onChange={(e) => input_value(e.target.value , "email" ) } placeholder="Enter Email"/>
              <TextInput style={style.Text_Input} secureTextEntry={true} value={data.password}  onChange={(e) => input_value(e.target.value , "password" ) }  placeholder="Enter Password" />
              <TextInput style={style.Text_Input} secureTextEntry={true} value={data.confirmPassword}  onChange={  (e) => input_value(e.target.value , "confirmPassword" ) } placeholder="Enter ConfirmPassword"/>
              <View style={style.data_review} >
                  <Text>Remember Me</Text>
                  <Text style={style.registere_here} onPress={() => navigation.navigate("Home")} >Register Here</Text> 
              </View>
              <View style={style.btn_1}>
              <Text style={style.button_sigup} onPress={(e) => signUp(e) } >Sig Up</Text>
              </View>
          </View>
         
        </View>
        
        </>
    )
}

export default Sign;
