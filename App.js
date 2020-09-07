import React, { Component } from 'react';
import { 
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Reset from './Reset';

const App = ({ navigation }) => {
  return (
    
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Image
          source={require('./Image/logo.png')}
          />
        </View>
  
        <View style={styles.container}>
          <TextInput
          style={styles.input}
          onChangeText={UserEmail => setUserEmail(UserEmail)}
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={() => {}}
          />
  
          <TextInput
          style={styles.input}
          onChangeText={UserPassword => setUserPassword(UserPassword)}
          placeholder="Senha"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={() => {}}
          />
  
          <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => navigation.navigate("Dashboard")}>
            <Text style={styles.submitText}> Acessar </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.btnRegister}
          onPress={() => navigation.navigate("Reset")}>
            <Text style={styles.registerText}> Esqueci minha senha </Text>
          </TouchableOpacity>
  
          <TouchableOpacity 
          style={styles.btnRegister}
          onPress={() => navigation.navigate("New")}>
            <Text style={styles.registerText}> Criar conta </Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
    paddingTop: 50,
  },
  input: {
    backgroundColor: '#FF9800',
    width: '90%',
    marginBottom: 15,
    color:'#ffffff',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#000000',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#000000'
  }
});

export default App;