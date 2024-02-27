import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {Ionicons, Entypo} from '@expo/vector-icons';

const DrawerComponent = ({navigation, state}) => {
    const isHomeSelected = state.routes[state.index].name === 'Home';
    const isAccountSelected = state.routes[state.index].name === 'Account';

    return (
        <DrawerContentScrollView>
            <DrawerItem
                label="Account"
                icon={() => (
                    <Ionicons
                        name="person-circle-sharp"
                        size={24}
                        color={isAccountSelected ? 'white' : 'orange'}
                    />)}
                labelStyle={{color: isAccountSelected ? 'white' : 'orange'}}
                onPress={() => navigation.navigate('Account')}
                style={{backgroundColor: isAccountSelected ? 'orange' : 'white'}}
            />
            <DrawerItem
                label="Home"
                icon={({color, size}) => (
                    <Entypo
                        name="home"
                        size={24}
                        color={isHomeSelected ? 'white' : 'orange'}
                    />)}
                labelStyle={{color: isHomeSelected ? 'white' : 'orange'}}
                onPress={() => navigation.navigate('Home')}
                style={{backgroundColor: isHomeSelected ? 'orange' : 'white'}}
            />
        </DrawerContentScrollView>
    );
};

export default DrawerComponent;
