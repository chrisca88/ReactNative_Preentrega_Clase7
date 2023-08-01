import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from '../Global/Colors'
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../Features/Cart/cartSlice";


const ItemDetail = ({ navigation, route }) => {

    const [product, setProduct] = useState(null);
    const [orientation, setOrientation] = useState("portrait")
    const {width, height} = useWindowDimensions()

    const dispatch = useDispatch ()

    const selectedProduct = useSelector (state => state.shopReducer.value.productSelected)

    useEffect(()=> {
      if (width > height) setOrientation("landscape")
      else setOrientation("portrait")
    }, [width, height])

    

    useEffect(() => {
        const productSelected = selectedProduct
        setProduct(productSelected)
    })

    const onAddCart = () => {
        dispatch(addCartItem({
            ...product,
            quantity: 1
        }))
    }


    return (
        <View>
            {product ? (
                <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape} >
                    <Image
                        source={{ uri: product.images[0] }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style = {styles.textContainer}>
                      <Text style= {styles.textTitle}>{product.title}</Text>
                      <Text>{product.description}</Text>
                      <Text style = {styles.textPrice}>${product.price}</Text>
                      <Button color={colors.blue} title="Add cart"
                        onPress={onAddCart}
                      ></Button>
                    </View>
                </View>
            ) : null}
        </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
    },
    mainContainerLandscape: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: 'center',
      padding: 10,
  },
    image: {
        width: 300,
        height: 250,
    },
    textContainer: {
      flexDirection: 'column',
      alignItems:'center',
      marginTop: 10
    },
    textTitle:{
        marginBottom: 10,
        fontStyle:'italic',
        fontWeight: 'bold'
    },
    textPrice:{
        margin:10,
        fontWeight:'bold'
    },
});