import {Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";

const ModalRespComponent = ({status, isVisible, closeModal, title, link}) => {
    let imagePath
    if (status === 1) {
        imagePath = require('../assets/modalSuccess.png')
    } else {
        imagePath = require('../assets/modalFailed.png')
    }
    return (
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text onPress={closeModal} style={styles.modalTextX}>X</Text>
                    <Image source={imagePath}/>
                    <Text style={styles.modalText}>{title}</Text>
                    <TouchableOpacity onPress={closeModal}>
                        <Text style={styles.textStyle}>{link}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: 300,
        height: 300,
        justifyContent: "center",
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        fontFamily: "PoppinsRegular",
        fontSize: 10,
        marginTop: 25,
        textAlign: 'center',
        color: 'blue',
        textDecorationLine: 'underline',
    },
    modalText: {
        fontFamily: "PoppinsSemiBold",
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
        color: "rgba(0, 0, 0, 0.7)"
    },
    modalTextX: {
        alignSelf: "flex-end",
        right: 25,
        fontFamily: "PoppinsBold",
        fontSize: 16,
        color: "black"
    },
});

export default ModalRespComponent;
