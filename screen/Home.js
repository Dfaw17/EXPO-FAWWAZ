import {
    StyleSheet,
    Image,
    Text, ScrollView, View, TouchableOpacity, Dimensions,
} from "react-native";
import * as Colors from '../assets/colour';
import React, {useState} from "react";
import Carousel, {Pagination} from "react-native-snap-carousel";
import SectionComponent from "../component/section";

export default function Home({navigation}) {
    const [activeSlide, setActiveSlide] = useState(0);
    const data_image = [
        {id: 1, image: require('../assets/bannerHome.png')},
        {id: 2, image: require('../assets/bannerHome.png')},
        {id: 3, image: require('../assets/bannerHome.png')},
    ];
    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.containerSlide}>
                <Image style={styles.imageSlide} source={item.image}/>
            </View>
        );
    };

    return (
        <View>
            <ScrollView style={{backgroundColor: "white"}}>
                {/* ============================= BANK =============================  */}
                <TouchableOpacity style={styles.containerBank}>
                    <Text style={styles.textBank}>
                        Isi data rekening bank untuk mentransfer Dana Qris
                    </Text>
                </TouchableOpacity>

                {/* ============================= WALLET QRIS =============================  */}
                <View style={styles.containerWallet}>
                    <TouchableOpacity style={styles.btnWallet}>
                        <Image source={require('../assets/iconPostku.png')}/>
                        <Text style={styles.txtRP}>Rp. <Text style={styles.txtBalance}>107.000</Text></Text>
                    </TouchableOpacity>
                    <View style={styles.componentStrip}/>
                    <TouchableOpacity style={styles.btnQris}>
                        <Image source={require('../assets/iconQris.png')}/>
                        <Text style={styles.txtRP}>Rp. <Text style={styles.txtBalance}>301.000</Text></Text>
                    </TouchableOpacity>
                </View>

                {/* ============================= BANNER =============================  */}
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

                {/* ============================= SUMMARY =============================  */}
                <View style={styles.containerSummary}>
                    <Text style={styles.txtTitleSummary}>Ringkasan Hari ini</Text>

                    <View style={styles.containerRowCard}>
                        <View style={styles.cardSummary}>
                            <Text style={styles.cardSummaryTitle}>Total Transaksi</Text>
                            <View style={styles.containerCardSummaryValue}>
                                <Text style={styles.cardSummaryValue}>3</Text>
                            </View>
                        </View>
                        <View style={styles.cardSummary}>
                            <Text style={styles.cardSummaryTitle}>Pendapatan</Text>
                            <View style={styles.containerCardSummaryValue}>
                                <Text style={styles.cardSummaryValue}>150.000.000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerRowCard}>
                        <View style={styles.cardSummary}>
                            <Text style={styles.cardSummaryTitle}>Transaksi Tunai</Text>
                            <View style={styles.containerCardSummaryValue}>
                                <Text style={styles.cardSummaryValue}>3.500.000</Text>
                            </View>
                        </View>
                        <View style={styles.cardSummary}>
                            <Text style={styles.cardSummaryTitle}>Transaksi QRIS</Text>
                            <View style={styles.containerCardSummaryValue}>
                                <Text style={styles.cardSummaryValue}>1.500.000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerRowCard}>
                        <View style={styles.cardSummary}>
                            <Text style={styles.cardSummaryTitle}>Menu Terjual</Text>
                            <View style={styles.containerCardSummaryValue}>
                                <Text style={styles.cardSummaryValue}>13</Text>
                            </View>
                        </View>
                        <View style={styles.cardSummary}>
                            <Text style={styles.cardSummaryTitle}>Menu Terlaris</Text>
                            <View style={styles.containerCardSummaryValue}>
                                <Text style={styles.cardSummaryValue}>Frappuchino</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* ============================= POSTKU PLUS =============================  */}
                <SectionComponent/>
                <View style={styles.cardPostkuPlus}>
                    <Image source={require('../assets/berandapos.png')}/>
                    <Text style={styles.textPostkuPlus}>Berlangganan POSTKU Plus</Text>
                    <Text style={styles.textPostkuPlus2}>Rp.1k/Hari</Text>
                    <TouchableOpacity style={styles.btnPostkuPlus}>
                        <Text style={styles.textPostkuPlus3}>Upgrade</Text>
                    </TouchableOpacity>
                </View>
                <SectionComponent/>
                <View style={styles.spaceBottom}/>

            </ScrollView>

            {/* ============================= FLOAT BUTTON =============================  */}

            <TouchableOpacity>
                <View style={styles.floatingButton}>
                    <Text style={styles.floatingButtonText}>Mulai Transaksi</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerBank: {
        backgroundColor: Colors.red,
    },
    textBank: {
        textAlign: 'center',
        color: 'white',
        fontSize: 12,
        fontFamily: 'PoppinsSemiBold'
    },
    containerWallet: {
        marginBottom: 10,
        backgroundColor: 'white',
        width: 350,
        height: 55,
        marginTop: 35,
        borderRadius: 20,
        justifyContent: 'center',
        elevation: 5,
        alignSelf: "center",
        borderColor: Colors.primaryColor,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 20
    },
    btnWallet: {
        width: 150,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    btnQris: {
        width: 150,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    txtRP: {
        marginLeft: 15,
        marginTop: 5,
        color: Colors.grey,
        fontSize: 12,
        fontFamily: 'PoppinsMedium'
    },
    txtBalance: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'PoppinsMedium',
        fontWeight: '700'
    },
    componentStrip: {
        height: 50,
        backgroundColor: Colors.primaryColor,
        width: 1
    },
    containerSlide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageSlide: {
        resizeMode: 'contain',
        height: 115,
    },
    containerDots: {
        backgroundColor: "white"
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
    containerSummary: {
        justifyContent: 'center',
        marginHorizontal: 20
    },
    txtTitleSummary: {
        fontSize: 18,
        color: Colors.black70,
        fontFamily: 'PoppinsMedium'
    },
    containerRowCard: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    cardSummary: {
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        width: 165,
        height: 90,
        margin: 5,
        padding: 10,
    },
    cardSummaryTitle: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 9,
        color: Colors.black30,
    },
    containerCardSummaryValue: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    },
    cardSummaryValue: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 14,
        color: Colors.black70,
    },
    cardPostkuPlus: {
        alignSelf: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: 355,
        height: 300,
        borderRadius: 20,
        elevation: 5,
    },
    textPostkuPlus: {
        color: Colors.grey,
        marginTop: 20,
        fontFamily: "PoppinsRegular"
    },
    textPostkuPlus2: {
        fontSize: 16,
        fontFamily: "PoppinsSemiBold"
    },
    textPostkuPlus3: {
        color: Colors.green,
        fontSize: 18,
        fontFamily: "PoppinsSemiBold"
    },
    btnPostkuPlus: {
        width: 285,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.green,
        borderWidth: 1,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        marginTop: 10
    },
    floatingButton: {
        backgroundColor: Colors.primaryColor,
        width: 355,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
    },
    floatingButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: "PoppinsSemiBold"
    },
    spaceBottom: {
        backgroundColor: "white",
        height: 80
    },
});
