import React, {useState} from 'react';
import {ImageBackground, Image, View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, KeyboardAvoidingView, Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default function App(){
const CELL_COUNT = 6;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const navigation = useNavigation();
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" :{}} style={{flex: 1, backgroundColor: 'white', }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

    <View style={{flex: 1, backgroundColor: 'white',}}>
    
    <ImageBackground source={require('../assets/bg/phonelogin_top.png')} style={{position:'absolute', top:0, width: '100%', height:86}}/>
    
    
    <TouchableOpacity style={{marginTop:60, marginLeft:24}} onPress={()=>navigation.goBack()}>
        <Image
                      style={{
                        width:15,
                        height:25}}
                      source={require('../assets/icons/back.png')}/></TouchableOpacity>

      <Text  style={{marginTop:10, fontFamily:'Nunito-Black', marginHorizontal:24, color:'black',fontSize:32, alignSelf:'stretch'}}>
      Verification Code</Text>
      <Text  style={{paddingTop:10, fontFamily:'Roboto-Regular', marginHorizontal:24, marginBottom:20, fontSize:14, alignSelf:'stretch'}}>
      We have sent you the verification code.</Text>
      
      <View style={{flex: 1, marginHorizontal:24, }}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        caretHidden={false}
        autoFocus={true}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      </View>
      
      <ImageBackground source={require('../assets/bg/phonelogin_bottom.png')} style={{position:'absolute', bottom:0, width: '100%', height:230}}>
      <TouchableOpacity
        style={{
            position:'absolute',
            right:24,
            bottom:24,
            alignItems:'center',
            justifyContent:'center',
            width:72,
            height:72,
            backgroundColor:(value=='')?'#B0B0B0':'#FEC629',
            borderRadius:50,
          }} 
          disabled={value == '' ? true : false}
          onPress={()=>navigation.navigate('Onboarding')} >
        <Image style={{ width:24, height:38}} source={require('../assets/icons/next.png')}/>
      </TouchableOpacity>
      </ImageBackground>
      
    </View>
    </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 14},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 2,
    borderColor:'#FEC629',
    borderRadius:10,
    textAlign: 'center',
    backgroundColor: '#FFF',
  },
  focusCell: {
    borderColor: '#FEC629',
  },
});
