import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from './inicio';
import Home from './home';
const Tab = createBottomTabNavigator();

function HomeScreen() {
  const data = 'Texto a codificar en el código QR';
  const handlePress = () => {
    // Función a ejecutar cuando se presione el botón
    console.log('Botón presionado');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>PARKPAL</Text>
      <Image
        source={require('./img/carro.png')}
        style={styles.imagen}
        
      />
      <Text style={styles.subtitle}>{'\n'}Dile adios al estres de buscar {'\n'}
        lugar en el estacionamiento 
      </Text>

      <TouchableOpacity style={styles.button1} onPress={handlePress}>
        <Text style={styles.buttonText}>Iniciar de Sesion </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonTexto}>Crear Cuenta </Text>
      </TouchableOpacity>
      
      <Text > {'\n'}{'\n'}{'\n'}{'\n'}Al iniciar sesion aceptas nuestras politicas{'\n'}
        de privacidad
      </Text>
    </View>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="ejemplos" component={Home} />
        <Tab.Screen name="vistas" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 180, // Ancho de la imagen
    height: 180, // Altura de la imagen
    borderRadius: 80, // Mitad del ancho o la altura para un círculo perfecto
  },
  title:{
    color: '#FCE019',
    fontSize: 40,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle:{
    color: '#FCE019',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button1:{
    backgroundColor: '#FCE019',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    width: 180,
    textAlign: 'center',
    alignItems : 'center',
  },
  button:{
    backgroundColor: '#E8E6E6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    width: 180,
    textAlign: 'center',
    alignItems : 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
buttonTexto: {
  color: '#A1A1A1',
  fontSize: 16,
  fontWeight: 'bold',
}
});

export default App;
