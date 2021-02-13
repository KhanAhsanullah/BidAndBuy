
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    ScrollView
} from 'react-native';
import StarRating from '../components/StarRating';

const ProfileDetail = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='red' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>
                    Seller Screen
                </Text>
            </View>
    
           
                <View style={styles.container}>
                    <View style={[styles.card, styles.profileCard]}>
                        <Image style={styles.avatar} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} />
                        <Text style={styles.name}>Admin Profile</Text>
                    </View>
                <View style={[styles.card, styles.profileCard]}>
                    <Image style={styles.avatar} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar5.png" }} />
                    <Text style={styles.name}>Seller Profile</Text>
                </View>

                <View style={[styles.card, styles.profileCard]}>
                    <Image style={styles.avatar} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar1.png" }} />
                    <Text style={styles.name}>Buyer Profile</Text>
                </View>
                    {/* <View style={styles.card}>
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
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardTittle}>Title</Text>
                        <Text> - Lorem ipsum dolor sit amet</Text>
                        <Text> - Lorem ipsum dolor sit amet</Text>
                        <Text> - Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={styles.photosCard}>
                        <Text style={styles.cardTittle}>profile Of Bidder</Text>
                        <View style={styles.photosContainer}>
                            <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar1.png" }} />
                            <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar2.png" }} />
                            <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar3.png" }} />
                            <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar4.png" }} />
                            <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar5.png" }} />
                            <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} />
                        </View>
                    </View> */}
                </View>
                
            </ScrollView>
        );
       
    }

export default ProfileDetail;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "red"
    },
    cardTittle: {
        color: "#808080",
        fontSize: 22,
        marginBottom: 5,
    },
    avatar: {
        width: 150,
        height: 150,
    },
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        height: 100,
        marginTop: 10,
    },
    profileCard: {
        height: 200,
        alignItems: 'center',
        marginTop: 20,
    },
    name: {
        marginTop: 10,
        fontSize: 22,
        color: "#808080",
    },
    photosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 'auto',
    },
    photosCard: {
        marginTop: 10,
    },
    photo: {
        width: 113,
        height: 113,
        marginTop: 5,
        marginRight: 5,
    }
});
