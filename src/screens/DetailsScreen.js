import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
    // Obtener los parámetros pasados desde HomeScreen
    const { itemId, otherParam } = route.params || {};

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Details Screen</Text>
            <Text>Item ID: {JSON.stringify(itemId)}</Text>
            <Text>Other Param: {JSON.stringify(otherParam)}</Text>

            <Button
                title="Go to Details... again"
                onPress={() => navigation.push("Details", {
                    itemId: Math.floor(Math.random() * 100),
                })}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
            <Button title="Go to Settings" onPress={() => navigation.navigate("Settings")} />
        </View>
    );
};

export default DetailsScreen;
