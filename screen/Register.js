import {View, Text, StyleSheet, ScrollView, StatusBar, TextInput, TouchableOpacity,} from "react-native";
import DropdownComponent from "../component/dropdown"
import ModalRespComponent from "../component/modal_resp"
import {useState} from "react";
import * as Colors from '../assets/colour';

export default function Register({navigation}) {
    const [isModalVisible, setModalVisible] = useState(false);
    let configModal = {
        "status": 1,
        "title": "Success Register",
        "link": "ke halaman login",
    }
    const openModal = () => {
        console.log("OPEN")
        setModalVisible(true);
    };

    const closeModal = () => {
        console.log("CLOSE")
        setModalVisible(false);
        if (configModal.link) {
            navigation.navigate("Login")
        }
    };
    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} backgroundColor={Colors.primaryColor}/>
                <Text style={styles.sectionWelcoming}>Halo UMKMers, ayo lengkapi data dibawah</Text>
                <View style={styles.containerSection}>
                    <Text style={styles.titleSection}>Data Owner</Text>
                    <TextInput placeholder='Username' style={styles.inputTextSection}/>
                    <TextInput placeholder='Password' style={styles.inputTextSection}/>
                    <TextInput placeholder='Email' style={styles.inputTextSection}/>
                    <TextInput placeholder='No Whatsapp' style={styles.inputTextSection}/>
                </View>
                <View style={styles.containerSection}>
                    <Text style={styles.titleSection}>Data Toko</Text>
                    <TextInput placeholder='Nama Toko' style={styles.inputTextSection}/>
                    <TextInput placeholder='Alamat Toko' style={styles.inputTextSection}/>
                    <View style={styles.inputTextSection}>
                        <DropdownComponent data_dropdown="kategori_toko"/>
                    </View>
                    <View style={styles.inputTextSection}>
                        <DropdownComponent data_dropdown="provinsi"/>
                    </View>
                    <View style={styles.inputTextSection}>
                        <DropdownComponent data_dropdown="kabkot"/>
                    </View>
                    <View style={styles.inputTextSection}>
                        <DropdownComponent data_dropdown="kecamatan"/>
                    </View>
                    <TouchableOpacity onPress={openModal}>
                        <View style={styles.btnRegister}>
                            <Text style={styles.txtRegister}>Daftar</Text>
                        </View>
                    </TouchableOpacity>
                    <ModalRespComponent
                        status={configModal.status}
                        link={configModal.link}
                        title={configModal.title}
                        isVisible={isModalVisible}
                        closeModal={closeModal}/>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 20,
    },
    scrollViewContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    sectionWelcoming: {
        fontFamily: 'PoppinsRegular',
        fontSize: 12,
        marginTop: 10
    },
    containerSection: {
        marginTop: 20
    },
    titleSection: {
        fontSize: 18,
        fontFamily: "PoppinsBold",
        color: Colors.black70
    },
    inputTextSection: {
        fontFamily: 'PoppinsLight',
        fontSize: 16,
        borderColor: Colors.grey,
        borderRadius: 10,
        width: 340,
        borderWidth: 1,
        marginTop: 10,
        height: 45,
        paddingLeft: 10,
    },
    btnRegister: {
        width: 340,
        height: 50,
        backgroundColor: Colors.primaryColor,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 20,
    },
    txtRegister: {
        color: "white",
        fontSize: 18,
        fontFamily: "PoppinsBold"
    }
});
