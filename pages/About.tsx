import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import Button from './Button';
import {Section} from '../components/Section';
import Colors from '../components/Colors';

type AboutProps = {
  id: string;
  title: string;
  image: any;
};
const data: AboutProps[] = [
  {
    id: '1',
    title:
      'Индивидуальный подход от команды профессионалов с многолетним опытом',
    image: require('../assets/about-one.png'),
  },
  {
    id: '2',
    title:
      'Мы используем профессиональную, косметику премиум класса и лучшие инструменты',
    image: require('../assets/about-two.png'),
  },
  {
    id: '3',
    title: 'Мы обязательно угостим Вас чашечкой ароматного кофе или чая',
    image: require('../assets/about-three.png'),
  },
];

const About = () => {
  return (
    <View>
      <Section title="О НАС" button={<Button />}>
        <Text>
          Мы команда профессионалов с многолетним опытом, которые создали новое
          место для мужчин всех возрастов, где все смогут ощутить качество и
          сервис наших услуг, благодаря индивидуальному подходу к каждому нашему
          гостю. Мы не огромная сеть, благодаря чему, всё наше внимание
          сосредоточено на нашем барбершопе, что позволяет нам постоянно
          совершенствоваться и оказывать лучший сервис среди многочисленных
          салонов для мужчин.
        </Text>
      </Section>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View
            style={{
              ...styles.viewSlider,
            }}>
            <Image
              style={{
                ...styles.image,
              }}
              source={item.image}
            />
            <Text style={{...styles.textImage}}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  viewSlider: {
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    justifyContent: 'flex-start',
    borderRadius: 5,
  },
  image: {
    height: 170,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  textImage: {
    alignItems: 'center',
    textAlign: 'center',
    width: 150,
  },
  container: {
    padding: 20,
  },
});
