import React from 'react';
import {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Modal} from 'react-native';
import Colors from '../components/Colors';
import {WebView} from 'react-native-webview';

type BtnProps = {
  textBtn?: string;
  styleBtn?: any;
  styleText?: any;
  onPress?: () => void;
  showModal?: boolean;
  style?: object;
};

const Btn = ({
  textBtn = 'Записаться',
  onPress,
  showModal,
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
      {showModal && (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={closeModal}>
            <WebView
              style={{flex: 0, height: '100%'}}
              source={{uri: 'https://n1005319.yclients.com/'}}
            />
            <View
              style={{
                alignItems: 'center',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 70,
              }}>
              <TouchableOpacity style={styleBtn} onPress={closeModal}>
                <Text style={styleText}>Закрыть</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      )}
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
});

export default Btn;
