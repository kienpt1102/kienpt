import React from "react";
import {
    View, Text, StyleSheet,
    SafeAreaView, ImageBackground,
    StatusBar, Image, TouchableOpacity,
} from "react-native";
import COLORS from '../../consts/colors';
import place1 from "../../consts/place1";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const DetailsScreen = ({ navigation, route }) => {
    const place = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                style={{ flex: 0.6, }}
                source={place.image}
            >
                <View style={styles.header}>
                    <AntDesign name="left" size={36} color={COLORS.white} onPress={navigation.goBack} />
                    <Feather name="more-vertical" size={36} color={COLORS.white} />
                </View>

                <View style={styles.nameplace}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.white }}>
                        {place.name}
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign name="staro" size={30} color={COLORS.orange} />
                        <Text style={{ color: COLORS.white, fontSize: 20, marginLeft: 5 }}>
                            5.0
                        </Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.container}>
                <View style={styles.icon}>
                    <AntDesign name="heart" size={32} color={COLORS.red} />
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                    <Entypo name="location-pin" size={36} color={COLORS.primary} />
                    <Text style={{ color: COLORS.primary, fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>
                        {place.location}
                    </Text>
                </View>

                <View style={{ marginTop: 50, marginHorizontal: 30 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                        About to trip
                    </Text>

                    <Text style={{ marginTop: 20, fontSize: 16 }}>
                        {place.details}
                    </Text>
                </View>

                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
                            {place.price}
                        </Text>

                        <Text style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
                            / PER DAY
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                                BOOK NOW
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 30,
    },
    nameplace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 360,
    },
    container: {
        flex: 0.4,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        top: -50,
        justifyContent: 'space-between',
    },
    icon: {
        height: 60, width: 60,
        borderRadius: 30,
        backgroundColor: COLORS.white,
        top: -30, left: 420,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    footer: {
        height: 100, width: '100%',
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        top: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btn: {
        height: 60, width: 180,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default DetailsScreen;









