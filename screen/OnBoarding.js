import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TouchableOpacity, StatusBar} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import * as Colors from '../assets/colour';

export default function OnBoarding({navigation}) {
    const [activeSlide, setActiveSlide] = useState(0);
    const data_image = [
        {id: 1, image: require('../assets/onboarding2.png')},
        {id: 2, image: require('../assets/onboarding3.png')},
        {id: 3, image: require('../assets/onboarding4.png')},
    ];

    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.containerSlide}>
                <Image style={styles.imageSlide} source={item.image}/>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Colors.primaryColor}/>

            {/* ============================= SECTION TITLE =============================  */}
            <View style={styles.containerTitle}>
                <Image source={require('../assets/onboarding1.png')}/>
                <Text style={styles.title1}>Aplikasi Kasir Gratis Untuk UMKM Indonesia</Text>
            </View>

            {/* ============================= SECTION BANNER =============================  */}
            <Carousel
                data={data_image}
                renderItem={_renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                onSnapToItem={(index) => setActiveSlide(index)}
                autoplay={true}
                loop={true}
                autoplayInterval={3000}
            />
            <View style={styles.containerDots}>
                <Pagination
                    dotsLength={data_image.length}
                    activeDotIndex={activeSlide}
                    dotStyle={styles.dot}
                    inactiveDotStyle={styles.inactiveDot}
                    inactiveDotOpacity={0.3}
                    inactiveDotScale={0.6}
                />
            </View>

            {/* ============================= SECTION BUTTON =============================  */}
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <View style={styles.btnRegister}>
                        <Text style={styles.textRegister}>Daftar Akun</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.btnLogin}>
                        <Text style={styles.textLogin}>Masuk</Text>
                    </View>
                </TouchableOpacity>
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
        padding: 20,
    },
    containerTitle: {
        paddingTop: 50,
        alignItems: 'center',
    },
    title1: {
        fontFamily: "PoppinsRegular",
        fontSize: 12,
        paddingTop: 20,
    },
    containerSlide: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    imageSlide: {
        resizeMode: 'contain',
        height: 350,
    },
    containerDots: {
        marginBottom: 30
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.secondaryColor,
    },
    inactiveDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.grey,
    },
    containerButton: {
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('window').width,
        height: 150,
        borderTopWidth: 2,
        borderTopStyle: 'solid',
        borderTopColor: Colors.grey,
    },
    btnRegister: {
        backgroundColor: Colors.primaryColor,
        width: 350,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10
    },
    textRegister: {
        fontFamily: "PoppinsMedium",
        color: 'white'
    },
    btnLogin: {
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        width: 350,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textLogin: {
        fontFamily: "PoppinsMedium",
        color: Colors.primaryColor
    },
});
