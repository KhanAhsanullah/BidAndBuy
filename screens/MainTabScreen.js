import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen   from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';

import { Avatar } from 'react-native-paper';
import { View } from 'react-native-animatable';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: 'red',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Sell Screen',
                tabBarColor: 'red',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: 'red',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: 'red',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-aperture" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: 'red',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title: 'Bid And Buy',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="red" onPress={() => navigation.openDrawer()}></Icon.Button>

            ),
            headerRight:()=>(
               <View style={{flexDirection:'row', marginRight:12}}>
                    <Icon.Button name="ios-search" size={25} backgroundColor="red" onPress={() => navigation.openDrawer()}></Icon.Button>
                <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}} onPress={() =>{
                    navigation.navigate('Profile');
                }}>

                <Avatar.Image
                source={require('../assets/logo.png')} size={30} />

            </TouchableOpacity>    
               </View>
        
            )
        }} 

        />
    <HomeStack.Screen
    name="CardListScreen"
    component={CardListScreen}
    options={({ route }) => ({
    title: route.params.title,
    headerBackTitleVisible: false

    })}
    />

    <HomeStack.Screen
    name="CardItemDetails"
    component={CardItemDetails}
    options={({ route }) => ({
    // title: route.params.title,
    headerBackTitleVisible: false

     })}
        />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        
        <DetailsStack.Screen name="Bid And Buy" component={DetailsScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="red" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </DetailsStack.Navigator>
);

const ExploreStackScreen = ({ navigation }) => (
    <ExploreStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>

        <ExploreStack.Screen name="Bid And Buy" component={DetailsScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="red" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </ExploreStack.Navigator>
);

