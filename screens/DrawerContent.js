import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    toggleTheme,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../components/context';

export function DrawerContent(props) {

const paperTheme = useTheme();

const [isDarkTheme , setIsDarkTheme] = React.useState(false);
const { signOut } = React.useState(AuthContext);

const toggleTheme=() => {
    setIsDarkTheme(!isDarkTheme);
}

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent} >
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={require('../assets/logo.png')}
                                size={50}   
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column',color:'red' }}>
                                <Title style={styles.title}>Bid And Buy</Title>
                                <Caption style={styles.caption}>Ahsan Ullah Khan</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={'red'}
                                    size={size}
                                />
                            )}
                           
                            label="Home"
                            color='red'
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={'red'}
                                    size={size}
                                />
                            )}
                            label="Seller"
                            onPress={() => { props.navigation.navigate('BookmarkScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={'red'}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="human-wheelchair"
                                    color={'red'}
                                    size={size}
                                />
                            )}
                            label="About Users"
                            onPress={() => { props.navigation.navigate('SettingsScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="contacts"
                                    color={'red'}
                                    size={size}
                                />
                            )}
                            label="Winner Screen"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={'red'}
                            size={size}
                        />
                    )}
                    label="Sign Out"     
                    onPress={() => { signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color:'red'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color:'red'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        color: 'red'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        color:'red'
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
        color: 'red'
    },
    drawerSection: {
        marginTop: 15,
        color: 'red'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'red',
        borderTopWidth: 1,
        
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

