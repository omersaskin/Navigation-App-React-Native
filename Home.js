import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";
import CarouselCards from './CarouselCards';
import Swiper from 'react-native-swiper'
import { Form, FormItem } from 'react-native-form-component';
import { Label } from 'react-native-form-component';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
      <View style={styles.item6}>
        <Form onButtonPress={() => console.warn('do something')}>
          <Label text="repository name" isRequired />
          <FormItem />
          <Label text="repository name" isRequired />
          <FormItem />
          <Label text="repository name" isRequired />
          <FormItem />
        </Form>
      </View>
      <View style={styles.item5}>
        <CarouselCards />
      </View>
      <View>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
        <View style={styles.item1}>
          <Text style={[stylesText.bold, stylesText.center, {'color': 'white'}, stylesText.anabaslikSize]}>HABERLER</Text>
        </View>
        <View style={styles.item2}>
          <Image
            style={styles.stretch}
            source={require('./assets/favicon.png')}
          />
          <Text style={[stylesText.text, stylesText.center, stylesText.thin, styles.buttonBottom, stylesText.baslikSize]}> Haber Başlığı </Text>
          <Button 
            title="İncele"
            onPress={() => navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })}
            color="#000000"
          />
        </View>
        <View style={styles.item3}>
          <Image
            style={styles.stretch}
            source={require('./assets/favicon.png')}
          />
          <Text style={[stylesText.text, stylesText.center, stylesText.thin, styles.buttonBottom, stylesText.baslikSize]}> Haber Başlığı </Text>
          <Button 
            title="İncele"
            onPress={() => navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })}
            color="#000000"
          />
        </View>
        <View style={styles.item4}>
          <Image
            style={styles.stretch}
            source={require('./assets/favicon.png')}
          />
          <Text style={[stylesText.text, stylesText.center, stylesText.thin, styles.buttonBottom, stylesText.baslikSize]}> Haber Başlığı </Text>
          <Button 
            title="İncele"
            onPress={() => navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })}
            color="#000000"
          />
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  contentContainer: { paddingVertical: 0 },
  container: {flex: 1, flexDirection: 'column'},
  item1: {flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', paddingVertical: 50},
  item2: {flex: 5, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center', paddingVertical: 100},
  item3: {flex: 2, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center', paddingVertical: 100},
  item4: {flex: 2, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', paddingVertical: 100},
  item5: {flex: 2, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center', paddingVertical: 100},
  item6: {flex: 2, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', paddingVertical: 100},
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  buttonBottom:{marginBottom:20},
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

const stylesText = StyleSheet.create({
  container: {flex:1, flexDirection: 'column', 
  justifyContent: 'center'},
  headline: {fontFamily: 'Georgia', fontSize: 20},
  subheader: { color: 'blue' },
  bold: { fontWeight: 'bold' },
  thin: { fontWeight: '200'},
  italic: { fontStyle: 'italic' },
  moreLineHeight: { lineHeight: 40 },
  right: { textAlign: 'right'},
  center: { textAlign: 'center'},
  code: { fontFamily: 'Courier'},
  baslikSize:{fontSize:20},
  anabaslikSize:{fontSize:25},
  });
