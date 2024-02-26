import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image, TouchableOpacity, ScrollView
} from "react-native";
import React, {useMemo, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function ChooseOutlet({navigation}) {
    const [selectedId, setSelectedId] = useState();
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
            color: selectedId === toko.toko_id.toString() ? "#F99722" : "grey",
            containerStyle: {
                borderWidth: 2,
                borderColor: selectedId === toko.toko_id.toString() ? "#F99722" : "grey",
                width: 350,
                padding: 10,
                borderRadius: 10,
            },
            labelStyle: {
                color: selectedId === toko.toko_id.toString() ? "#F99722" : "grey",
            },
        }))
    ), [data_toko]);

    const handleSelectOutlet = () => {
        const selectedOutlet = data_toko.find((toko) => toko.toko_id.toString() === selectedId);
        if (selectedOutlet) {
            console.log("Selected Toko ID:", selectedOutlet.toko_id);
        }
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.containerImage}>
                    <Image source={require("../assets/outlet.png")}/>
                </View>
                <RadioGroup radioButtons={radioButtons} onPress={setSelectedId} selectedId={selectedId}/>
                <TouchableOpacity onPress={handleSelectOutlet}>
                    <View style={styles.containerButton}>
                        <Text style={styles.textButton}>Pilih Toko</Text>
                    </View>
                </TouchableOpacity>
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
        backgroundColor: "#F99722",
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
