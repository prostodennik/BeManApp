import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Section} from '../components/Section';
import {ButtonComponent} from '../components/ButtonComponent';
import Button from './Button';
import Colors from '../components/Colors';

type PriceProps = {
  data: {
    title: string;
    price: string;
    id: number;
  }[];
  meta: {
    dataTypes: {
      id: number;
      text: string;
    }[];
  };
};

const mockDataPrice: PriceProps = {
  data: [
    {title: 'Стрижка мужская', price: '1400 Р', id: 0},
    {title: 'Стрижка детская (от 3 до 10 лет)', price: '1000 Р', id: 0},
    {title: 'Стрижка машинкой (одна насадка)', price: '600 Р', id: 0},
    {title: 'Стрижка машинкой (несколько насадок)', price: '800 Р', id: 0},
    {title: 'коррекция бороды', price: '1000 Р', id: 0},
    {title: 'опасное бритье (лицо или голова)', price: '1000 Р', id: 0},
    {title: 'Химическая завивка для мужчин', price: 'ОТ 4000 Р', id: 0},
    {title: 'Окрашивание для мужчин', price: 'ОТ 2500 Р', id: 0},
    {title: 'камуфляж бороды (полный)', price: '700 Р', id: 1},
    {title: 'камуфляж головы', price: '1000 Р', id: 1},
    {title: 'мытье и укладка', price: '400 Р', id: 1},
    {title: 'окантовка с подбриванием', price: '300 Р', id: 1},
    {title: 'депиляция воском', price: '400 / 1000 Р', id: 1},
    {title: 'черная маска', price: '1000 Р', id: 1},
    {title: 'друг + друг', price: '2400 Р', id: 2},
    {
      title: 'папа + сын (стрижка мужская и детская от 3 до 10 лет)',
      price: '2000 Р',
      id: 2,
    },
    {title: 'сын + сын (от 3 до 10 лет)', price: '1800 Р', id: 2},
    {title: 'Стрижка + коррекция бороды', price: '2000 Р', id: 2},
  ],
  meta: {
    dataTypes: [
      {id: 0, text: 'Основное'},
      {id: 1, text: 'дополнительно'},
      {id: 2, text: 'комплекс'},
    ],
  },
};

const Price = () => {
  const [menuId, setMenuId] = useState(mockDataPrice.meta.dataTypes[0].id);
  const [dataPrice, setDataPrice] = useState(
    mockDataPrice.data.filter(a => a.id === menuId),
  );

  useEffect(() => {
    setDataPrice(mockDataPrice.data.filter(item => item.id === menuId));
  }, [menuId]);

  console.log(dataPrice);

  return (
    <View>
      <Section
        title="Услуги и цены"
        button={<Button />}
        subTitle="Добро пожаловать в Be man barbershop!"
        ButtonPrice={<ButtonPrice menuId={menuId} setMenuId={setMenuId} />}>
        {dataPrice.map(item => (
          <View key={item.title}>
            <Text style={styles.textPrice}>
              {item.title} - {item.price}
            </Text>
          </View>
        ))}
      </Section>
    </View>
  );
};

export default Price;

export const ButtonPrice = ({menuId, setMenuId}: any) => (
  <ButtonComponent>
    {mockDataPrice.meta.dataTypes.map((item, id) => (
      <Button
        key={id}
        textBtn={item.text}
        styleBtn={item.id === menuId ? styles.activeBtn : styles.btn}
        styleText={item.id === menuId ? styles.activeBtnText : styles.btnText}
        onPress={() => setMenuId(item.id)}
      />
    ))}
  </ButtonComponent>
);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  activeBtn: {
    alignItems: 'center',
    padding: 5,
    marginTop: 5,

    minWidth: 100,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  btnText: {
    color: Colors.black,
    textTransform: 'uppercase',
    fontSize: 12,
  },
  activeBtnText: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: Colors.white,
  },
  active: {
    backgroundColor: Colors.primary,
    color: Colors.white,
  },
  textPrice: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
});
