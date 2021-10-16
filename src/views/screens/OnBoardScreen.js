import React from "react";
import { View, Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from '../../consts/colors';

const OnBoardScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                translucent
                backgroundColor="rgba(0,0,0,0)"
            />
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../../assets/onboard/image2.jpg')}
            >
                <View style={styles.details}>
                    <Text style={{ color: COLORS.white, fontSize: 38, fontWeight: 'bold' }}>
                        Discover
                    </Text>

                    <Text style={{ color: COLORS.white, fontSize: 38, fontWeight: 'bold' }}>
                        world with us
                    </Text>

                    <Text style={{ color: COLORS.white, lineHeight: 25, marginTop: 15, fontSize: 18 }}>
                        Let’s meet my new exploration work. This time I have come up with a Travel App UI Exploration.
                        Let’s meet my new exploration work.
                        This time I have come up with a Travel App UI Exploration
                    </Text>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('HomeScreen')}
                    >
                        <View style={styles.btn}>
                            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Get started
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    details: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40,
    },
    btn: {
        height: 50,
        width: 180,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
});

export default OnBoardScreen;









