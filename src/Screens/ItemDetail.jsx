import { Button, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from '../Global/Colors'
import { addCartItem } from "../Features/Cart/cartSlice";


const ItemDetail = ({ navigation, route }) => {

    const [product, setProduct] = useState(null);
    const [orientation, setOrientation] = useState("portrait")
    const {width, height} = useWindowDimensions()
    const [selectedImage, setSelectedImage] = useState(0);

    const dispatch = useDispatch ()

    const selectedProduct = useSelector (state => state.shopReducer.value.productSelected)

    useEffect(()=> {
      if (width > height) setOrientation("landscape")
      else setOrientation("portrait")
    }, [width, height])

    const selectImage = (index) => {
        setSelectedImage(index);
      };

    

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
        <ScrollView>
            {product ? (
                <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape} >
                   <View style={styles.imageContainer}>
                        <Image
                        source={{ uri: product.images[selectedImage] }}
                        style={styles.largeImage}
                        resizeMode="contain"
                        />
                    <View style={styles.smallImagesContainer}>
                        {product.images.map((image, index) => (
                            <TouchableWithoutFeedback
                            key={index}
                            onPress={() => selectImage(index)}
                            >
                        <Image
                            source={{ uri: image }}
                            style={[styles.smallImage, index === selectedImage ? styles.selectedImage : null]} 
                            resizeMode="contain"
                        />
                        </TouchableWithoutFeedback>
                    ))}
                    </View>
                </View>
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
        </ScrollView>
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
    imageContainer: {
        flexDirection: 'row',
      },
      largeImage: {
        flex: 2, 
           
      },
      smallImagesContainer: {
        flex: 1,
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
      },
      smallImage: {
        height: 100,
        borderColor: 'black',
        borderWidth: 1,
      },
});