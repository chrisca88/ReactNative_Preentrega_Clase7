import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Global/Colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyword, setKeyword] = useState("")
    const {height,width} = useWindowDimensions()

  return (
    <View style ={ width > 350 ? styles.container : styles.containerSM}>
       { error ?
         <Text style ={styles.textError}>
            {error}
            <Pressable onPress={goBack}>
            <Ionicons style={styles.buttonMargin} name="arrow-back" size={24} color="black" />
        </Pressable>
        </Text>
        : <View style ={styles.container}>
            <TextInput style ={styles.input} 
                placeholder='Search....'
                value={keyword}
                onChangeText={setKeyword}
            />
            <Pressable onPress={()=>onSearch(keyword)}>
            <MaterialCommunityIcons name="shopping-search" size={24} color="black" />
        </Pressable>
        <Pressable onPress={()=> setKeyword("")}>
            <MaterialIcons name="cleaning-services" size={24} color="black" />
        </Pressable>
        <Pressable onPress={goBack}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        </View>
            }
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        marginTop: 10,
        gap: 18,
    },
    containerSM: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        marginTop: 10,
        gap: 18,
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.blue,
        borderRadius: 10,
    },
    textError:{
        color: 'red',
        fontSize: 20
    },
    buttonMargin:{
        marginLeft: 20,
    }
})