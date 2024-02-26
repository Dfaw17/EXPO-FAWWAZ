import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
} from "react-native";
import {useState} from "react";
import ModalRespComponent from "../component/modal_resp"

export default function Login({navigation}) {
    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    let configModal = {
        "status": 1,
        "title": "Success Login",
        "link": "ke halaman outlet",
    }
    const openModal = () => {
        console.log("OPEN")
        setModalVisible(true);
    };

    const closeModal = () => {
        console.log("CLOSE")
        setModalVisible(false);
        if (configModal.link) {
            navigation.navigate("ChooseOutlet")
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'#f99722'}/>
            <View style={styles.containerTitle}>
                <Text style={styles.title1}>Ayo masuk.</Text>
                <Text style={styles.title2}>Dan mulai petualangan bisnismu bersama kami</Text>
            </View>
            <View style={styles.containerInputText}>
                <TextInput
                    placeholder="Email"
                    style={[styles.inputTextEmail, {borderColor: isFocused1 ? 'orange' : 'gray'}]}
                    onFocus={() => [setIsFocused1(true), setIsFocused2(false)]}/>

                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={[styles.inputTextPwd, {borderColor: isFocused2 ? 'orange' : 'gray',}]}
                    onFocus={() => [setIsFocused1(false), setIsFocused2(true)]}/>

                <View style={styles.containerSSO}>
                    <View style={styles.strip1}/>
                    <Text style={styles.txtSSO}> Atau masuk dengan </Text>
                    <View style={styles.strip2}/>
                </View>
                <View style={styles.containerSSOLogo}>
                    <TouchableOpacity onPress={() => console.log("Whatsapp")}>
                        <Image source={require("../assets/whatsapp.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Gmail")}>
                        <Image source={require("../assets/gmail.png")}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerLoginRegister}>
                <Text style={{fontFamily: "PoppinsRegular"}}>
                    Belum punya akun?
                    <Text onPress={() => navigation.navigate("Register")} style={{color: "#F99722"}}> Daftar </Text>
                </Text>

                <TouchableOpacity onPress={openModal}>
                    <View style={styles.btnLogin}>
                        <Text style={styles.txtLogin}>Masuk</Text>
                    </View>
                </TouchableOpacity>
                <ModalRespComponent
                    status={configModal.status}
                    link={configModal.link}
                    title={configModal.title}
                    isVisible={isModalVisible}
                    closeModal={closeModal}/>
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
    containerTitle: {
        marginTop: 10
    },
    title1: {
        fontSize: 36,
        color: "#F99722",
        fontFamily: "PoppinsBold"
    },
    title2: {
        color: "#FFBE65",
        fontSize: 18,
        marginTop: 5,
        fontFamily: "PoppinsRegular"
    },
    containerInputText: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    inputTextEmail: {
        fontFamily: "PoppinsRegular",
        fontSize: 18,
        borderRadius: 15,
        width: 350,
        borderWidth: 1,
        height: 50,
        justifyContent: "center",
        paddingLeft: 15,
    },
    inputTextPwd: {
        fontFamily: "PoppinsRegular",
        fontSize: 18,
        borderRadius: 15,
        width: 350,
        borderWidth: 1,
        height: 50,
        justifyContent: "center",
        paddingLeft: 15,
        marginTop: 15
    },
    containerSSO: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
    },
    containerSSOLogo: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        gap: 20,
    },
    strip1: {
        backgroundColor: "#C5C5C5",
        width: 100,
        height: 1,
        marginLeft: 30,
    },
    strip2: {
        backgroundColor: "#C5C5C5",
        width: 100,
        height: 1,
        marginRight: 30,
    },
    txtSSO: {
        textAlign: "center",
        fontSize: 11,
        color: "#C5C5C5",
        fontFamily: "PoppinsRegular",
        marginHorizontal: 10
    },
    containerLoginRegister: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 10
    },
    btnLogin: {
        width: 355,
        height: 50,
        backgroundColor: "#F99722",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 15,
    },
    txtLogin: {
        color: "white",
        fontSize: 18,
        fontFamily: "PoppinsRegular"
    },
});
