import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import * as Colors from '../assets/colour';
import * as Progress from 'react-native-progress';

export default function PrepareOutlet({navigation}) {
    const [progress, setProgress] = useState(0);
    const [isNavigated, setIsNavigated] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 0.5);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            if (!isNavigated && progress >= 1) {
                setIsNavigated(true);
                navigation.navigate('Root', {screen: 'Home'});
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [navigation, progress, isNavigated]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={require('../assets/outlet.png')}/>
            </View>
            <View style={styles.containerText}>
                <Text style={{fontSize: 16, fontFamily: 'PoppinsBold', color: Colors.primaryColor}}>Tunggu
                    Sebentar</Text>
                <Text style={{fontSize: 12, fontFamily: 'PoppinsRegular', color: Colors.secondaryColor}}>
                    kami sedang menyaipkan data akun POSTKU anda
                </Text>
                <Progress.Bar style={{marginTop: 20}} progress={progress} width={250} color={Colors.secondaryColor}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    containerImage: {
        alignItems: "center",
        marginTop: 40,
    },
    containerText: {
        alignItems: "center",
        marginBottom: 150,
    },
});
