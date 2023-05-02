import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { RNTesseractOcr } from 'react-native-tesseract-ocr'

const OCRScreen = () => {
    const [imageUri, setImageUri] = useState<null | string>(null); 
    const [recognizedText, setRecognizedText] = useState(null);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    };
  
    const recognizeText = async () => {
      try {
        const tesseractOptions = {};
        const recognized = await RNTesseractOcr.recognize(imageUri, 'LANG_ENGLISH', tesseractOptions);
        setRecognizedText(recognized);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
        {recognizedText && <Text>{recognizedText}</Text>}
        {imageUri && <Button title="Recognize Text" onPress={recognizeText} />}
      </View>
    );
  };

  export default OCRScreen;