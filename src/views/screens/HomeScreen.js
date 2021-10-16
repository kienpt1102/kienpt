import React from "react";
import {
    View, Text, StyleSheet,
    SafeAreaView, StatusBar,
    TextInput, ScrollView,
    ImageBackground, FlatList,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import COLORS from '../../consts/colors';
import place1 from '../../consts/place1';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const HomeScreen = ({ navigation }) => {
    const categoryIcon1 = [
        <FontAwesome name="plane" size={36} color={COLORS.primary} />,
        <FontAwesome5 name="umbrella-beach" size={36} color={COLORS.primary} />,
        <FontAwesome5 name="concierge-bell" size={36} color={COLORS.primary} />,
        <FontAwesome5 name="cocktail" size={36} color={COLORS.primary} />,
    ];

    const categoryIcon2 = [
        <FontAwesome5 name="cog" size={24} color={COLORS.primary} />,
        <FontAwesome5 name="compass" size={24} color={COLORS.primary} />,
        <FontAwesome5 name="home" size={24} color={COLORS.primary} />,
        <FontAwesome5 name="bookmark" size={24} color={COLORS.primary} />,
        <FontAwesome5 name="user" size={24} color={COLORS.primary} />,
    ];

    const ListCategories = () => {
        return (
            <View style={styles.categoryContainer}>
                {categoryIcon1.map((icon, index) => (
                    <View key={index} style={styles.iconContainer}>
                        {icon}
                    </View>
                ))}
            </View>
        );
    };

    const ListCategories1 = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
                {categoryIcon2.map((icon, index) => (
                    <View key={index} style={styles.icons}>
                        {icon}
                    </View>
                ))}
            </View>
        );
    };

    const Card = ({ place }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DetailsScreen', place)}
            >
                <ImageBackground
                    style={styles.cardImage}
                    source={place.image}
                >
                    <View style={{ marginTop: 16, marginLeft: 20 }}>
                        <Text style={{ color: COLORS.white, fontSize: 22, fontWeight: 'bold' }}>
                            {place.name}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Entypo name="location-pin" size={25} color={COLORS.white} />
                            <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 16 }}>
                                {place.location}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="star-o" size={24} color={COLORS.white} />
                            <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 16, marginLeft: 5 }}>
                                5.0
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

        );
    };

    const RecommendedCard = ({ place }) => {
        return (
            <ImageBackground
                style={styles.imageReCard}
                source={place.image}
            >
                <View>
                    <View style={{ marginTop: 10, marginLeft: 15 }}>
                        <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold' }}>
                            {place.name}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Entypo name="location-pin" size={25} color={COLORS.white} />
                            <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 16 }}>
                                {place.location}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                            <FontAwesome name="star-o" size={24} color={COLORS.white} />
                            <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 16, marginLeft: 5 }}>
                                5.0
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 10, marginHorizontal: 15 }}>
                    <Text style={{ color: COLORS.white, fontSize: 14 }}>
                        {place.details}
                    </Text>
                </View>
            </ImageBackground>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar
                translucent={false}
                backgroundColor={COLORS.primary}
            />

            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                    <Entypo name="menu" size={36} color="white" />
                    <Entypo name="bell" size={36} color="white" />
                </View>

                <View style={{ marginTop: 30, marginLeft: 30 }}>
                    <Text style={{ fontSize: 25, color: COLORS.white, fontWeight: 'bold' }}>
                        Explore the
                    </Text>
                    <Text style={{ fontSize: 25, color: COLORS.white, fontWeight: 'bold' }}>
                        beautiful places
                    </Text>
                </View>
            </View>

            <View style={styles.textinput}>
                <Entypo name="magnifying-glass" size={34} color="#aaa" />
                <TextInput
                    placeholder="Search"
                    style={{ fontSize: 20, marginLeft: 15 }}
                />
            </View>

            <ListCategories />

            <ScrollView>
                <View style={{ marginTop: 15, marginLeft: 50 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                        Places
                    </Text>
                </View>

                <View style={{ marginTop: 25, marginHorizontal: 5 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={place1}
                        renderItem={({ item }) => <Card place={item} />}
                    />
                </View>

                <View style={{ marginTop: 30, marginLeft: 50 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                        Recommended
                    </Text>
                </View>

                <View style={{ marginTop: 25, marginHorizontal: 5 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={place1}
                        renderItem={({ item }) => <RecommendedCard place={item} />}
                    />
                </View>

                <ListCategories1 />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    iconContainer: {
        height: 65, width: 65,
        borderRadius: 10,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    icons: {
        height: 50, width: 50,
        borderRadius: 10,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        height: 330, width: width / 2.4,
        marginHorizontal: 10,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    imageReCard: {
        height: 220, width: width / 1.4,
        marginBottom: 20,
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 10,
        justifyContent: 'space-between',
    },
    header: {
        height: 210,
        paddingVertical: 20,
        backgroundColor: COLORS.primary,
    },
    textinput: {
        backgroundColor: "#eee",
        height: 60, width: '90%',
        borderRadius: 30,
        alignItems: 'center',
        top: -26,
        marginHorizontal: 20,
        paddingLeft: 30,
        flexDirection: 'row'
    },
});

export default HomeScreen;









