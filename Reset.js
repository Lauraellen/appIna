import React, { Component, useState } from "react";
import { 
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
} from "react-native";

const Reset = () => {

    const [modalVisible, setModalVisible] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
            <Image
            source={require('./Image/logo.png')}
            />
        </View>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >

            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Email enviado!</Text>

                <TouchableHighlight
                  style={{ ...styles.openButton2, backgroundColor: "#FF9800" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  
                >
                  <Text style={styles.textStyle}>Fechar</Text>
                </TouchableHighlight>
              </View>
            </View>
        </Modal>

        <View style={styles.container}>

                <Text style={styles.text}>
                    Insira o email cadastrado e enviaremos um link para redefinir sua senha.
                </Text>
            
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={() => { }}
                />

                <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                    <Text style={styles.submitText}> Enviar </Text>
                </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
      flex: 1,
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
  text: {
      color:'#000000',
      fontSize: 14,
      textAlign: "center",
      marginBottom: 10
  },
  input: {
      backgroundColor: '#FF9800',
      width: '90%',
      marginBottom: 10,
      color: '#ffffff',
      fontSize: 14,
      borderRadius: 5,
      padding: 10,
  },
  btnSubmit: {
      backgroundColor: '#000000',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
  },
  submitText: {
      color: '#FFF',
      fontSize: 15,
  },
  openButton2:{
    backgroundColor: "#FF9800",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  openButton: {
    backgroundColor: "#FF9800",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignItems:'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});

export default Reset;