import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image, TouchableOpacity, ScrollView
} from "react-native";
import React, {useMemo, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import SnackbarComponent from "../component/snackbar";
import * as Colors from '../assets/colour';

export default function ChooseOutlet({navigation}) {
    const [selectedId, setSelectedId] = useState();
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const data_toko = [
        {
            label: "Toko Jababeka",
            toko_id: 1,
        },
        {
            label: "Toko Cikarang",
            toko_id: 2,
        },
        {
            label: "Toko Cikarang Selatan",
            toko_id: 3,
        },
        {
            label: "Toko Cikarang Utara",
            toko_id: 4,
        },
        {
            label: "Toko Cikarang Pusat",
            toko_id: 5,
        },
        {
            label: "Toko Cikarang Timur",
            toko_id: 6,
        },
    ];
    const radioButtons = useMemo(() => (
        data_toko.map((toko) => ({
            id: toko.toko_id.toString(),
            label: toko.label,
            value: toko.toko_id.toString(),
            borderSize: 2,
            color: selectedId === toko.toko_id.toString() ? Colors.secondaryColor : Colors.grey,
            containerStyle: {
                borderWidth: 2,
                borderColor: selectedId === toko.toko_id.toString() ? Colors.secondaryColor : Colors.grey,
                width: 350,
                padding: 10,
                borderRadius: 10,
            },
            labelStyle: {
                color: selectedId === toko.toko_id.toString() ? Colors.secondaryColor : Colors.grey,
            },
        }))
    ), [data_toko]);

    const handleSelectOutlet = () => {
        const selectedOutlet = data_toko.find((toko) => toko.toko_id.toString() === selectedId);
        if (selectedOutlet) {
            console.log("Selected Toko ID:", selectedOutlet.toko_id);
            navigation.navigate("PrepareOutlet")
        } else {
            setSnackbarVisible(true);
        }
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                {/* ============================= IMAGE =============================  */}
                <View style={styles.containerImage}>
                    <Image source={require("../assets/outlet.png")}/>
                </View>

                {/* ============================= RADIO BUTTON =============================  */}
                <RadioGroup radioButtons={radioButtons} onPress={setSelectedId} selectedId={selectedId}/>

                {/* ============================= BUTTON PILIH TOKO =============================  */}
                <TouchableOpacity onPress={handleSelectOutlet}>
                    <View style={styles.containerButton}>
                        <Text style={styles.textButton}>Pilih Toko</Text>
                    </View>
                </TouchableOpacity>

                {/* ============================= SNACKBAR =============================  */}
                <SnackbarComponent
                    visible={snackbarVisible}
                    onDismiss={() => setSnackbarVisible(false)}
                    message="Toko belum dipilih!"/>
            </SafeAreaView>
        </ScrollView>
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
        height: 300,
        marginHorizontal: 50,
        borderRadius: 30,
    },
    containerButton: {
        backgroundColor: Colors.primaryColor,
        width: 350,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginBottom: 10
    },
    textButton: {
        color: 'white',
        fontFamily: 'PoppinsMedium',
        fontSize: 18
    },
});
