import { StyleSheet, View} from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons,Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrderStack from './OrderStack'
import MyProfileStack from './MyProfileStack'
import { colors } from '../Global/Colors'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
    }}
>
    <Tab.Screen 
        name='Shop'
        component={ShopStack}
        options={{
            tabBarIcon: ({focused}) => {
                return (
                    <View>
                        <Fontisto name="shopping-store" size={24} color={focused ? "black": "gray"} />
                    </View>
                )
            }
        }}
    />
    <Tab.Screen
        name='Cart'
        component={CartStack}
        options={{
            tabBarIcon: ({focused}) => {
                return (
                    <View>
                        <FontAwesome name="shopping-basket" size={24} color={focused ? "black": "gray"} />  
                    </View>
                )
            }
        }}
    />
    <Tab.Screen
        name='Orders'
        component={OrderStack}
        options={{
            tabBarIcon: ({focused}) => {
                return (
                    <View>
                        <MaterialIcons name="playlist-add-check" size={30} color={focused ? "black": "gray"} />
                    </View>
                )
            }
        }}
    />
    <Tab.Screen
            name="MyProfile"
            component={MyProfileStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.item}>
                            <Ionicons
                                name="person-circle-outline"
                                size={24}
                                color={
                                    focused
                                        ? 'black'
                                        : 'gray'
                                }
                            />
                        </View>
                    );
                },
            }}
        />
</Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.violet,
        shadowColor: 'black',
        elevation: 4,
        height: 50,
    }
})