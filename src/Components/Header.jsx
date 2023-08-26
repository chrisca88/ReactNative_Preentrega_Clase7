import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from "@expo/vector-icons";
import { colors } from '../Global/Colors'
import { signOut } from "../Features/User/userSlice";
import { deleteSession } from "../SQLite";

/**
 * This component is used in the following components:
 * AuthStack
 * CartStack
 * MyProfileStack
 * OrderStack 
 * ShopStack
 * 
 * @param route The route object containing route information.
 * @param navigation The navigation object for routing.
 */

const Header = ({
  route,
  navigation
}) => {
  let title
  if (route.name === 'Home') title = 'Home'
  else if (route.name === 'ItemListCategory') title = route.params.category
  else if (route.name === 'Detail') title = "Item"
  else title = route.name

  const dispatch = useDispatch();
  const { email, localId } = useSelector((state) => state.userReducer.value);

  const onSignout = async () => {
    try {
        await deleteSession(localId)
        dispatch(signOut())
    } catch (error) {

    }
}

  return (
    <View style={styles.containerHeader}>
        <Text style={styles.text}>{title}</Text>
        {navigation.canGoBack() ? (
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
        ) : null}
        {email ? (
            <Pressable
                style={styles.signOut}
                onPress={onSignout}
            >
                <SimpleLineIcons name="logout" size={24} color="black" />
            </Pressable>
        ) : null}
    </View>
);
};

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        flexDirection:'row',
        position: 'relative'

    },
    pressable:{
      position: 'absolute',
      left: 30,
      top: '50%',
    },
    text: {
        fontSize: 25,
        fontFamily: 'Antique'
    },
    signOut: {
        position: "absolute",
        right: 30,
        top: "50%",
    }
})