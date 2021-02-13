import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
    Platform,
    Button,
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

const SignInScreen = ({ navigation }) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        Confirm_secureTextEntry: true

    });

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
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }
    const updateSecureTextEntry = (val) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const updateConfirmSecureTextEntry = (val) => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='red' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>
                   Auction Details
                </Text>
            </View>
            <View>

                <Text
                    style={{
                        alignSelf: 'center',
                        alignItems:'center',
                       
                        marginRight: 10,
                        marginTop: 0,
                        marginBottom: 0
                    }}>    
        </Text>
                <Image

                    source={require('../assets/images/car_1.jpg')}
                    style={{ width: 375, height: 300, resizeMode: 'cover' }}
                />
            </View>

            <Animatable.View
                animation="fadeInUpBig"

                style={styles.footer}>

                <View style={styles.button}>
                    <View>
                        <TouchableOpacity 
                            style={[styles.signIn, {
                                borderColor: 'red',
                                backgroundColor: 'red',
                                marginTop: 10,
                                borderRadius:15,
                                width: 300
                            }]}>
                            <Text style={[styles.textSign, {
                                color: 'white'
                            }]}>Min Bid : $80,000</Text>

                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                            style={[styles.signIn, {
                                borderColor: 'red',
                                backgroundColor: 'red',
                                marginTop: 10,
                                borderRadius: 15,
                                width: 300
                            }]}>
                            <Text style={[styles.textSign, {
                                color: 'white'
                            }]}>Product name : BMW</Text>

                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={[styles.signIn, {
                                borderColor: 'red',
                                backgroundColor: 'red',
                                marginTop: 10,
                                borderRadius: 15,
                                width: 300
                            }]}>
                            <Text style={[styles.textSign, {
                                color: 'white'
                            }]}>Reference No : 123456</Text>

                        </TouchableOpacity>
                    </View>


                    <View>
                        <Text style={[styles.text_footer, {
                            marginTop: 40
                        }]}>Enter Your Price For Bid</Text>
                        <TouchableOpacity 
                            style={[styles.signIn, {
                                borderColor: 'red',
                                backgroundColor: 'white',
                                marginTop: 10,
                                borderRadius: 15,
                                width:300
                            }]}>
                                
                            <Text style={[styles.textSign, {
                                color: 'white'
                            }]}></Text>
                            <TextInput
                                placeholder="Min Bid Price($80,000)"
                                placeholderTextColor="Black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val)}
                                
                            />

                        </TouchableOpacity>
                    </View>
        
                    
                        
                
                        
                    <View>
                        <TouchableOpacity onPress={() => alert('Thank You For Bidding Succefully Wait For Result ! Thank you Sir/Maam')}
                            style={[styles.signIn, {
                                borderColor: 'red',
                                backgroundColor: 'red',
                                marginTop: 10,
                                width: 250
                            }]}>
                            <Text style={[styles.textSign, {
                                color: 'white'
                            }]}>Now Bid And Buy</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
            <View>
            </View>
        </ScrollView>



    );
};




export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 0,
        paddingBottom: 0
    },
    footer: {
        flex: 3,
        backgroundColor: 'red',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 25,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text_footer: {
        color: 'white',
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
        color: '#05375a',
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
        
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textSign: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});







// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     Dimensions,
//     Button,
//     TextInput,
//     TouchableOpacity,
//     Alert,
//     Image
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { Appbar } from 'react-native-paper';


// const SignUpScreen = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>

//                 <Text>Register Now</Text>
//             </View>



//             <View style={styles.container}>

//                 <View style={styles.inputContainer}>
//                     <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/password/androidL/40/3498db' }} />
//                     <TextInput style={styles.inputs}
//                         placeholder="Name"
//                         keyboardType="Text"
//                         underlineColorAndroid='transparent' />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/password/androidL/40/3498db' }} />
//                     <TextInput style={styles.inputs}
//                         placeholder="Email"
//                         keyboardType="email"
//                         underlineColorAndroid='transparent' />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/envelope/androidL/40/3498db' }} />
//                     <TextInput style={styles.inputs}
//                         placeholder="Password"
//                         secureTextEntry={true}
//                         underlineColorAndroid='transparent' />
//                 </View>



//                 <TouchableOpacity style={[styles.buttonContainer, styles.facebookButton]}>
//                     <Button
//                         title="Thank you for Registration"
//                         onPress={() => navigation.navigate('Support Screen')}
//                     />
//                 </TouchableOpacity>



//             <TouchableOpacity style={[styles.buttonContainer, styles.facebookButton]}>
//                 <Button
//                     title="Go To Sign In "
//                     onPress={() => navigation.navigate('SignInScreen')}
//                 />
//             </TouchableOpacity>


//             </View>
//         </View>
//     );
// }

// export default SignUpScreen;

// const { height } = Dimensions.get("screen");
// const height_logo = height * 0.1;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
//     header: {
//         width: 1000,
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 0,
//         flexDirection: 'row',
//         backgroundColor: 'orangered',
//         marginBottom: 100

//     },
//     inputContainer: {
//         borderBottomColor: '#fff',
//         backgroundColor: 'antiquewhite',
//         borderRadius: 50,
//         borderBottomWidth: 1,
//         width: 280,
//         height: 45,
//         marginBottom: 15,
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     inputs: {
//         height: 45,
//         marginLeft: 16,
//         borderBottomColor: '#FFFFFF',
//         flex: 1,
//     },
//     icon: {
//         width: 10,
//         height: 10,
//     },

//     logo: {
//         width: height_logo * 0.6,
//         height: height_logo * 0.7,
//         // justifyContent: 'left',
//         // alignItems: 'left',


//     },
//     inputIcon: {
//         marginLeft: 15,
//         justifyContent: 'center'
//     },
//     buttonContainer: {
//         height: 45,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 20,
//         width: 250,
//         borderRadius: 30,
//     },
//     loginButton: {
//         backgroundColor: 'orangered',
//     },
//     facebookButton: {
//         backgroundColor: "orangered",
//     },

//     loginText: {
//         color: 'white',
//     },
//     restoreButtonContainer: {
//         width: 250,
//         marginBottom: 15,
//         alignItems: 'flex-end'
//     },
//     socialButtonContent: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     socialIcon: {
//         color: "#FFFFFF",
//         marginRight: 5
//     }
// });



