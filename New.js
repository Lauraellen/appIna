import React, { Component, useState } from "react";
import { 
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal, TouchableHighlight
} from "react-native";

const New = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <KeyboardAvoidingView style={styles.background}>
            <ScrollView style={styles.scrollView}>
                
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={() => { }}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Sobrenome"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={() => { }}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Telefone"
                        autoCorrect={false}
                        keyboardType={'phone-pad'}
                        onChangeText={() => { }}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={() => { }}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />

                    <TouchableOpacity
                        style={styles.btnSubmit}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <Text style={styles.submitText}> Salvar </Text>
                    </TouchableOpacity>

                
            </ScrollView>
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
                <Text style={styles.modalText}>Usuário Cadastrado!</Text>
                <Text style={styles.modalText}>Retorne e efetue login!</Text>

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
    input: {
        backgroundColor: '#FF9800',
        width: '90%',
        marginBottom: 10,
        color: '#fff',
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
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    scrollView: {
        backgroundColor: '#ffffff',
        width: '95%',
        marginTop: 20,
        marginBottom: 10,
        flex: 1,
        marginLeft: 30,
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

export default New;