
import * as React from 'react';

import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

const {width} = Dimensions.get('window')
const height  = width* 0.6;


const HomeScreen = ({ navigation }) => {
    const {colors} = useTheme();

    const theme = useTheme();

    return (
        <ScrollView style= {styles.container}> 
            <View style={{ marginTop: 0, width, height }}>
             <ScrollView
             
             pagingEnabled horizontal 
             showsHorizontalScrollIndicator= {false}
                    style={{ width, height}}>
                <Image 
                    source={require('../assets/images/explore_1.png')}
                    style={{ width, height, resizeMode: 'cover' }}
                    
                />

                <Image 
                   
                    source={require('../assets/images/explore_3.png')}
                    style={{ width, height, resizeMode: 'cover' }}
                   
                />
                
                <Image
                
                source={require('../assets/images/explore_2.png')}
                style={{ width, height, resizeMode:'cover'}}
                />

                <Image
                    
                    source={require('../assets/images/explore_4.png')}
                    style={{ width, height, resizeMode: 'cover' }}
                />
                </ScrollView>
            </View> 
            <View style={styles.categoryContainer}>
                <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() =>
                        navigation.navigate('CardListScreen', { title: 'Cars' })
                    }>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="car-sport" size={35}
                     color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Cars</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() =>
                        navigation.navigate('CardListScreen', { title: 'Property' })
                    }>
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons
                            name="home"
                            size={35}
                            color="white"
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Property</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="md-watch" size={35} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>watch</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Fontisto name="laptop" size={35} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Laptop</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="airplane" size={35} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Airplane</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <MaterialIcons name="camera" size={35} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Cafe</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Fontisto name="bus" size={35} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Buses</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="book" size={35} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Book</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="apps" size={35} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Watch More</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsWrapper}>
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Live Auction
        </Text>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/images/explore_2.png')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>Hp Laptop</Text>
                    <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>The HP NoteBook packs 256GB of SSD storage by Intel HD Graphics 620.
    
                    </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/images/explore_4.png')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Amazing Place</Text>
                        <StarRating ratings={5} reviews={100} />
                        <Text style={styles.cardDetails}>Amazing description for this amazing place</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/images/explore_3.png')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Amazing Food Place</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>Amazing description for this amazing place</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/images/explore_4.png')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Hotel Place</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>Amazing description for this amazing place</Text>
                    </View>
                </View>
                
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/images/car_1.jpg')}
                        resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>BMW</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>Amazing description for this amazing place</Text>
                    </View>
                </View>
       
       </View> 
       </ScrollView>    
   );
};
           
           
           
           
           
                  
            
export default HomeScreen;
// ... other code from the previous section

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: 'red' ,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: 'black',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});
            {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

            <View style={styles.sliderContainer}>

            <Swiper height={200}>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/logo.png')}
                        resizeMode="cover"
                    />
                </View>
            </Swiper>
        </View>        
    </View> 
          */}




    