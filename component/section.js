import {StyleSheet, View} from "react-native";
import * as Colors from "../assets/colour";

const SectionComponent = () => {
    return (
        <View style={styles.componentSection}/>
    );
};

const styles = StyleSheet.create({
    componentSection: {
        backgroundColor: Colors.greylight,
        height: 5,
        marginTop: 20,
        width:'100%'
    }
});
export default SectionComponent;
