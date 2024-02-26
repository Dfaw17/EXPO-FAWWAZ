import React, {useCallback} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import OnBoarding from "./screen/OnBoarding";
import Login from "./screen/Login";
import Register from "./screen/Register";
import ChooseOutlet from "./screen/ChooseOutlet";

const Stack = createNativeStackNavigator();

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
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="ChooseOutlet" component={ChooseOutlet}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}