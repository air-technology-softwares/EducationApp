import * as React from "react"
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";

import AppHeader from "../Component/AppHeader";
import firebase from "firebase";
import db from "../config";

export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
        }
    }

    login=async()=>{
        if(this.state.email==="" || this.state.password===""){
            alert("The Above Entry Cannot Be Empty!")
        }

        else{
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>{
                this.props.navigation.navigate(HomeScreen);
            })

            .catch((error)=>{
                var error_message = error.message;

                alert(error_message)
            })
        }
    }

    render() {
        return (
            <View>
                <AppHeader/>
                <KeyboardAvoidingView>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.txt}>Please Login</Text>
                <TextInput style={styles.input} placeholder='Email' onChangeText={text => {this.setState({email:text})}}/>
                <TextInput style={styles.input} placeholder='Password' onChangeText={text => {this.setState({password:text})}} secureTextEntry={true}/>
                <TouchableOpacity style={styles.btn}
                onPress={()=>{this.login()}}>
                    <Text style={styles.btntxt}>Login</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:"bold",
        textAlign: "center",
        marginTop:10,
    },

    txt:{
        fontSize:20,
        textAlign: "center",
    },

    input:{
        textAlign: "center",
        height:30,
        width:300,
        borderColor:'black',
        borderRadius:10,
        borderWidth:1,
        alignSelf:"center",
        marginTop:20,
    },

    btn:{
        backgroundColor:'blue',
        borderRadius:5,
        alignSelf:"center",
        height:40,
        width:130,
        marginTop:25,
    },

    btntxt:{
        textAlign: "center",
        fontWeight:'bold',
        color:'white',
        fontSize:20,
    },
})