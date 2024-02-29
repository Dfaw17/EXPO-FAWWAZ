import {
    StyleSheet,
    SafeAreaView,
    Text, View, Image, TouchableOpacity
} from "react-native";
import * as Colors from '../assets/colour'
import SectionComponent from "../component/section"
import React from "react";

export default function Account({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            {/* ============================= IMAGE PROFILE =============================  */}
            <View style={styles.containerImage}>
                <Image source={require('../assets/profile.png')} style={styles.roundedImage}/>
            </View>
            {/* ============================= PROFILE NAME =============================  */}
            <View style={styles.containerText}>
                <View>
                    <Text style={styles.textAccountName}>HILAL FAQIH MAULANA</Text>
                </View>
                <View>
                    <Text style={styles.textAccountProperty}>@hilalfaqih</Text>
                    <Text style={styles.textAccountProperty}>081386356616</Text>
                    <Text style={styles.textAccountProperty}>hilalfaqih@gmail.com</Text>
                </View>
            </View>
            <SectionComponent/>
            {/* ============================= CTA UPGRADE =============================  */}
            <TouchableOpacity style={styles.containerUpgrade}>
                <Image style={styles.imageUpgrade} source={require('../assets/CTA_upgrade.png')}/>
            </TouchableOpacity>
            {/* ============================= MENU =============================  */}
            <View style={styles.containerMenu}>
                <TouchableOpacity style={styles.listMenu}>
                    <View style={styles.menuItemRight}>
                        <Image source={require('../assets/profileIcon.png')}/>
                        <Text style={styles.menuTitle}>Profile</Text>
                    </View>
                    <Image style={styles.menuArrow} source={require('../assets/arrowRightIcon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listMenu}>
                    <View style={styles.menuItemRight}>
                        <Image source={require('../assets/rekeningIcon.png')}/>
                        <Text style={styles.menuTitle}>Data Rekening</Text>
                    </View>
                    <Image style={styles.menuArrow} source={require('../assets/arrowRightIcon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listMenu}>
                    <View style={styles.menuItemRight}>
                        <Image source={require('../assets/tokoIcon.png')}/>
                        <Text style={styles.menuTitle}>Pilih Toko</Text>
                    </View>
                    <Image style={styles.menuArrow} source={require('../assets/arrowRightIcon.png')}/>
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
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    roundedImage: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
    containerText: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        height: 135,
    },
    textAccountName: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 12
    },
    textAccountProperty: {
        alignSelf: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 10,
        color: Colors.black70
    },
    containerUpgrade: {
        width: '100%',
        height: 70,
        marginTop: 10
    },
    imageUpgrade: {
        width: '100%',
        height: 70
    },
    containerMenu: {
        marginTop: 25
    },
    listMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.black30,
        padding: 10,
        marginVertical:10
    },
    menuItemRight: {
        flexDirection: 'row',
        width: '45%',
        alignItems: 'center'
    },
    menuTitle: {
        fontFamily: 'PoppinsMedium',
        fontSize: 12,
        color: Colors.black70,
        marginLeft:20
    },
    menuArrow: {
        width: 10,
        height: 20
    },
});
