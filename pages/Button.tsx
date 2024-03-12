import React from 'react';
import {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Modal} from 'react-native';
import Colors from '../components/Colors';
// import {WebView} from 'react-native-webview';

type BtnProps = {
  textBtn?: string;
  styleBtn?: any;
  styleText?: any;
  onPress?: () => void;
};

const Btn = ({
  textBtn = 'Записаться',
  onPress,
  styleBtn = {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    width: 200,
  },
  styleText = {color: 'white', textTransform: 'uppercase', fontWeight: 'bold'},
}: BtnProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.center}>
      <TouchableOpacity style={styleBtn} onPress={onPress || openModal}>
        <Text style={styleText}>{textBtn}</Text>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <WebView
                source={{uri: 'https://n1005319.yclients.com/'}}
                style={styles.webview}
              /> */}
              <TouchableOpacity style={styleBtn} onPress={closeModal}>
                <Text style={styleText}>Закрыть</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  webview: {
    width: '85%',
    height: '100%',
  },
});

export default Btn;
