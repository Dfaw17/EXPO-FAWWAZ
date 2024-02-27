import {
    StyleSheet,
    SafeAreaView,
    Text,
} from "react-native";

export default function Account({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>ACCOUNT</Text>
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
    }
});
