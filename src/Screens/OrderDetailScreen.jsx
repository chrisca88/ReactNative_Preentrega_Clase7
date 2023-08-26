import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../Global/Colors';

const OrderDetailScreen = ({ route }) => {
    const { order } = route.params;
  
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.card}>
            <View style={styles.itemsColumn}>
              {order.items.map((item, index) => (
                <View key={index}>
                  <Text style={styles.text}>{item.title}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                  <Text style={styles.margin}>Price: ${item.price}</Text>
                </View>
              ))}
            </View>
            <View style={styles.totalColumn}>
              <Text style={[styles.text, styles.totalText]}>Total: ${order.total}</Text>
            </View>
          </View>
        </ScrollView>
      );
    };

export default OrderDetailScreen

const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
    },
    card: {
      flexDirection: 'row',
      backgroundColor: colors.blue,
      padding: 10,
      margin: 10,
      borderWidth: 2,
      borderRadius: 10,
    },
    margin:{
        marginBottom: 5,
    },
    itemsColumn: {
      flex: 1,
    },
    totalColumn: {
      flex: 1,
      alignItems: 'flex-end'
    },
    text: {
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
    totalText: {
      fontWeight: 'bold',
    },
  });