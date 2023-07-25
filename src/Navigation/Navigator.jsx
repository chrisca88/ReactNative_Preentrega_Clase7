import { StyleSheet, SafeAreaView, StatusBar, Pressable, Platform, View} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../Global/Colors'

import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import OrderStack from './OrderStack'
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()


const Navigator = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <NavigationContainer>
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
            </Tab.Navigator>
        </NavigationContainer>
  </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      },
      tabBar: {
          backgroundColor: colors.blue,
          shadowColor: 'black',
          elevation: 4,
          height: 50,
      }
})