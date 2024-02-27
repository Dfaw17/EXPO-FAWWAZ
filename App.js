import 'react-native-gesture-handler';
import React, {useCallback} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import OnBoarding from "./screen/OnBoarding";
import Login from "./screen/Login";
import Register from "./screen/Register";
import ChooseOutlet from "./screen/ChooseOutlet";
import PrepareOutlet from "./screen/PrepareOutlet";
import Home from "./screen/Home";
import Account from "./screen/Account";
import DrawerComponent from "./component/drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
    return (
        <Drawer.Navigator drawerContent={DrawerComponent}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Account" component={Account}/>
        </Drawer.Navigator>
    );
}

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        PoppinsRegular: require('./assets/Poppins-Regular.ttf'),
        PoppinsMedium: require('./assets/Poppins-Medium.ttf'),
        PoppinsSemiBold: require('./assets/Poppins-SemiBold.ttf'),
        PoppinsThin: require('./assets/Poppins-Thin.ttf'),
        PoppinsLight: require('./assets/Poppins-Light.ttf'),
        PoppinsBold: require('./assets/Poppins-Bold.ttf')
    })
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="OnBoarding">
                <Stack.Screen name="Root" component={Root} options={{ headerShown: false }}/>
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="ChooseOutlet" component={ChooseOutlet}/>
                <Stack.Screen name="PrepareOutlet" component={PrepareOutlet}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}