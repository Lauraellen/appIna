import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";
import Constants from "expo-constants";
import { Searchbar } from 'react-native-paper';
import { DataTable } from 'react-native-paper';


const Dashboard = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        

        <View style={styles.container}>

        <Searchbar style={styles.search}
          placeholder="Pesquisar"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

          <Text style={styles.text}> Precisa de ajuda? 
            Encontre a matéria que deseja, escolha seu discente, 
            e entre em contato para agendar sua aula!!</Text>

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
                <Text style={styles.modalText}>Entre em contato:</Text>
                <Text style={styles.modalText}>35 - 91234-5678</Text>

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
  
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Aula</DataTable.Title>
              <DataTable.Title>Discente</DataTable.Title>
              <DataTable.Title numeric>$</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Derivada</DataTable.Cell>
              <DataTable.Cell onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>João</DataTable.Cell>
              <DataTable.Cell numeric>10.00</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Química</DataTable.Cell>
              <DataTable.Cell onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>Bruna</DataTable.Cell>
              <DataTable.Cell numeric>15.00</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Física</DataTable.Cell>
              <DataTable.Cell onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>Pedro</DataTable.Cell>
              <DataTable.Cell>Voluntário</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={page => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
          </DataTable>

          <TouchableHighlight
            style={styles.openButton}
            onPress={() => navigation.navigate("Aulas")}
          >
            <Text>
              Quero oferecer aulas!
            </Text>
          </TouchableHighlight>

          

                    
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8
  },
  header: {
    fontSize: 20,
    backgroundColor: "#000000",
    color: "#fff",
    textAlign: "center"
  },
  title: {
    fontSize: 17,
  },
  search:{
    marginBottom: 10,
    height:30,
    borderRadius: 20,
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
  text: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 10,
    fontSize: 15,


  }
});

export default Dashboard;