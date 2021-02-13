import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    Button,
    Dimensions,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { set } from 'react-native-reanimated';

import {AuthContext} from '../components/context'

import {firebase} from '../fconfig';


const SignInScreen = ({ navigation }) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

const { signIn }   = React.useContext(AuthContext); 

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                // isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                // isValidUser: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const updateSecureTextEntry = (val) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const submitData = () =>{
    
        console.log(data)

        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user);
                signIn();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("err=>",errorMessage)
                // ..
            });


    }

    // const loginHandle = (username , password) =>{
    //     signIn(username, password);
    // }
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='red' barStyle='light-content'/>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode='center'
                />
                <Text style={styles.text_header}>
                    WELCOME
                </Text>
            </View>

            <Animatable.View 
            animation="fadeInUpBig"
        
            style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="envelope-square"
                        color='red'
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                            
                        >
                            <Feather
                                name="check-circle"
                                color='red'
                                size={20}

                            />
                        </Animatable.View>
                        : null}
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 40
                }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color='red'
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color='red'
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color='red'
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                   
           

                <View>
                        <TouchableOpacity 
                        onPress={()=>submitData()}
                            style={[styles.signIn, {
                                borderColor: 'white',
                                backgroundColor: 'red',
                                marginTop: 10,
                                width: 150
                            }]}>
                            <Text style={[styles.textSign, {
                                color: 'white'
                            }]}>Sign In</Text>

                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}
                            style={[styles.signIn, {
                                borderColor: 'white',
                                backgroundColor: 'red',
                                marginTop: 10,
                                width: 150
                            }]}>
                            <Text style={[styles.textSign, {
                                color: 'white'
                            }]}>Sign Up</Text>

                        </TouchableOpacity>
                    </View>

                   

                </View>
            </Animatable.View>
        </View>

    );
};
 
export default SignInScreen;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.07;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    
        
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: 'lime',
        fontSize: 10,
        fontWeight: 'bold'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop:20
    },
    text_footer: {
        color: 'red',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        width: 350
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18
    },
    textSign: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});


