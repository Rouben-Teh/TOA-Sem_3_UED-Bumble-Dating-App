import React,{useCallback, useState} from "react";
import {ImageBackground, Image, Text, View, TouchableOpacity } from "react-native";
import {Button} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Slider from 'rn-range-slider';
import Thumb from '../slider/Thumb';
import Rail from '../slider/Rail';
import RailSelected from '../slider/RailSelected';

export default function Search() {
  const navigation = useNavigation();
  const [currentSelect,setCurrentSelect]= useState(1);

  const [low, setLow] = useState(18);
  const [high, setHigh] = useState(80);
  const [min, setMin] = useState(18);
  const [max, setMax] = useState(80);

  const renderThumb = useCallback(() => <Thumb/>, []);
  const renderRail = useCallback(() => <Rail/>, []);
  const renderRailSelected = useCallback(() => <RailSelected/>, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  const [low2, setLow2] = useState(100);
  const [high2, setHigh2] = useState(200);
  const [min2, setMin2] = useState(100);
  const [max2, setMax2] = useState(200);
  const handleValueChange2 = useCallback((low2, high2) => {
    setLow2(low2);
    setHigh2(high2);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor:'white' }}>
      <ImageBackground source={require('../assets/bg/filter_top.png')} style={{width: '100%', height: 95, }}></ImageBackground>

      <TouchableOpacity style={{marginTop:60, marginLeft:24,position:'absolute',}} onPress={()=>navigation.goBack()}>
        <Image
                      style={{
                        width:15,
                        height:25}}
                      source={require('../assets/icons/back.png')}/></TouchableOpacity>
      <Text style={{position:'absolute', marginTop:50, marginLeft:64, fontSize:30,fontFamily:'Nunito-Bold', color:"black"}}>Filter</Text>

      <Text style={{marginTop:20, marginLeft:50, fontSize:12,fontFamily:'Nunito-Bold', color:"black"}}>Looking For</Text>
        <View style={{marginTop:10, width:342, height:50, flexDirection:'row', borderColor:'#FEC629', borderWidth:2, borderRadius:50, alignSelf:'center', justifyContent: 'center',}}>
            <TouchableOpacity 
              style={{width: 102,
                height: 42,
                marginHorizontal:6,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 50,backgroundColor:(currentSelect==1)?'#FEC629':'rgba(0, 0, 0, 0)'}} onPress={() => setCurrentSelect(1)}>
              <Text style={{alignSelf: 'center',color:(currentSelect==1)?'white':'black', fontFamily: 'Nunito-Bold', fontSize: 14,}}>Women</Text>
            </TouchableOpacity >

            <TouchableOpacity 
              style={{width: 102,
                height: 42,
                marginHorizontal:6,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 50,backgroundColor:(currentSelect==2)?'#FEC629':'rgba(0, 0, 0, 0)'}} onPress={() => setCurrentSelect(2)}>
              <Text style={{alignSelf: 'center',color:(currentSelect==2)?'white':'black', fontFamily: 'Nunito-Bold', fontSize: 14,}}>Men</Text>
            </TouchableOpacity >

            <TouchableOpacity  style={{width: 102,
                height: 42,
                marginHorizontal:6,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 50,backgroundColor:(currentSelect==3)?'#FEC629':'rgba(0, 0, 0, 0)'}} onPress={() => setCurrentSelect(3)}>
              <Text style={{alignSelf: 'center',color:(currentSelect==3)?'white':'black', fontFamily: 'Nunito-Bold', fontSize: 14,}}>Everyone</Text>
            </TouchableOpacity >
        </View>

        <View style={{flexDirection:'row', marginTop: 30, marginHorizontal:40, justifyContent:'space-between'}}>
          <Text style={{fontSize:12,fontFamily:'Nunito-Bold', color:"black"}}>Age</Text>
          <Text style={{color: 'black', fontFamily:'Nunito-Bold', fontSize: 12}}>{low}-{high}</Text>
        </View>

        <Slider
          style={{width:'80%', height: 10, alignSelf:'center', marginTop:12}}
          min={min}
          max={max}
          step={1}
          floatingLabel={false}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          onValueChanged={handleValueChange}
        />

        <View style={{flexDirection:'row', marginTop: 50, marginHorizontal:40, justifyContent:'space-between'}}>
          <Text style={{fontSize:12,fontFamily:'Nunito-Bold', color:"black"}}>Height</Text>
          <Text style={{color: 'black', fontFamily:'Nunito-Bold', fontSize: 12}}>{low2}cm-{high2}cm</Text>
        </View>

        <Slider
          style={{width:'80%', height: 10, alignSelf:'center', marginTop:12}}
          min={min2}
          max={max2}
          step={1}
          floatingLabel={false}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          onValueChanged={handleValueChange2}
        />

        <TouchableOpacity 
              style={{width: 342,
                height: 50,
                marginTop:44,
                marginHorizontal:6,
                alignSelf: 'center',
                flexDirection:'row',
                borderRadius: 50,backgroundColor:'#F6F6F6'}}>
              <Text style={{flex:4, alignSelf:'center', marginLeft:20, color:'black', fontFamily: 'Nunito-Bold', fontSize: 14,}}>Set advanced filters</Text>
              <View style={{flex:3}}></View>
              <AntDesign style={{flex:1, alignSelf:'center', }} name="right" size={24} color="#B0B0B0" />
        </TouchableOpacity >

      <Button style={{width:342,
                                height:50,
                                position:'absolute', 
                                bottom:24, 
                                borderRadius: 50, 
                                alignSelf:'center', 
                                justifyContent: 'center',
                                elevation: 0, 
                                backgroundColor:'#FEC629'}} onPress={()=>navigation.goBack()}>
                                <Text style={{fontFamily:'Nunito-Bold', 
                                alignSelf: 'center',
                                fontSize:16, 
                                color:'white'}}>Apply</Text></Button>
    </View>
  );
}