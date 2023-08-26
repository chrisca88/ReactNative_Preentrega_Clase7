import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import OrderScreen from "../Screens/OrderScreen"
import OrderDetailScreen from "../Screens/OrderDetailScreen";

const Stack = createNativeStackNavigator()

const OrderStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="OrderScreen"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
            <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />

        </Stack.Navigator>
    );
};

export default OrderStack;