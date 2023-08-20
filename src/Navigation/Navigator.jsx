import { StyleSheet, SafeAreaView, StatusBar, Pressable, Platform, View} from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../Global/Colors'

import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import OrderStack from './OrderStack'
import { MaterialIcons,Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import AuthStack from './AuthStack'
import MyProfileStack from './MyProfileStack'
import { getSession } from "../SQLite";
import { setUser } from "../Features/User/userSlice";


const Tab = createBottomTabNavigator()


const Navigator = () => {
    const {email} = useSelector(state => state.userReducer.value)

    const dispatch = useDispatch()

    useEffect(()=> {
        (async ()=> {
            try {
                const session = await getSession()
                console.log('Sesion: ');
                console.log(session);
                if (session?.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                console.log('Error getting session');
                console.log(error.message);
            }
        })()
    }, [])

  return (
    <SafeAreaView style = {styles.container}>
        <NavigationContainer>
            {
                email ?
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
            
            : <AuthStack/>
            }
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