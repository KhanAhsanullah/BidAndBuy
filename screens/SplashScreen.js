import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const SplashScreen = ({ navigation }) => {
    
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='red' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {
                    color: colors.text
                }]}>BID & BUY !!!</Text>
                <Text style={styles.text}>AHSAN ULLAH KHAN</Text>
                <Text style={styles.text}>WAQAR ALI SHAH</Text>
                
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}
                        style={[styles.signIn, {
                            borderColor: 'white',
                            backgroundColor: 'red',
                            marginTop: 15,
                            width: 200,
                            height:50
                        }]}>
                        <Text style={[styles.textSign, {
                            color: 'white'
                        }]}>Click To Get Started</Text>

                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: 'red',
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        paddingVertical: 50,
        paddingHorizontal: 50
    },
    logo: {
        width: height_logo,
        height: height_logo,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'lime',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 10,
        backgroundColor: 'blue',
        width: 200
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'red',
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 1000
    }
});





// import React from 'react';
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     Dimensions,
//     StyleSheet,
//     Button,
//     StatusBar,
//     Image
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const SplashScreen = ({navigation}) => {
//     return (
//         <View style ={styles.container}>
//         <View style={styles.header}>
       
//                 <Text>WELCOME</Text>
//         </View>
//         <View>
//             <Image
                
//                 source={require('../assets/logo.png')}
//                 style={styles.logo}
//                  resizeMode="stretch"
//             />
            
//         </View>
        

//             <View style={styles.footer}>
//                 <Text>WELCOME  TO  BID APP</Text>
//                 <Text>AHSAN - ULLAH - KHAN</Text>
//                 <Button 
//                     title="BID  AND  BUY "
//                     onPress={() => navigation.navigate('SignInScreen')}
//                 /> 
//             </View>
            
            
//         </View>
//     );
// };

// export default SplashScreen;

// const { height } = Dimensions.get("screen");
// const height_logo = height * 0.2;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems:'center',
//         justifyContent:'center',
//     },
//     header: {
//         width: '100%',
//         height: 80,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 0,
//         flexDirection: 'row',
//         backgroundColor:'lime',
        
    

//     },
//     footer: {
//         flex: 2,
//         backgroundColor: 'lime',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius:20,
//         paddingVertical: 60,
//         paddingHorizontal: 60,
//         marginTop:10    
        
//     },
//     logo: {
//         width: height_logo,
//         height: height_logo,
//         marginTop:30
       
       
//     },
//     title: {
//         color: 'red',
//         fontSize: 100,
//         fontWeight: 'bold'
//     },
//     text: {
//         color: 'red',
//         marginTop: 5
//     },
//     button: {
//         alignItems: 'flex-end',
//         marginTop: 100
//     },
//     signIn: {
//         width: 150,
//         height: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         flexDirection: 'row'
//     },
//     textSign: {
//         color: 'white',
//         fontWeight: 'bold'
//     }
// });

// // **********************


