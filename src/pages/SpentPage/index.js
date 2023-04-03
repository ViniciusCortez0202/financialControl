import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, View } from 'react-native';
import SpentInput from '../../components/SpentInput';
import SpentButton from '../../components/SpentButton';
import SpentCard from '../../components/SpentCard';

import { styles } from './style';


export default function SpentPage() {

    const [data, setData] = useState(
        [
            {
            id: 1,
            spentName: "Aluguel",
            spentValue: 500
            },
        ]
    )
    let spentName;
    let spentValue;

    
 return (
   <View style={styles.container}>
        <View style={styles.content}>

            <SpentInput placeholder={"Digite o nome do gasto"} 
            onChangeText={(value) => {spentName = value}} />
            <SpentInput placeholder={"Digite o valor do gasto"} 
            keyBoardType={"number-pad"}
            onChangeText={(value) => {
                spentValue=value;
            }}/>

            <SpentButton title={"Adicionar"} onPress={() => {
              
                const newSpent = {
                    id: data.length + 1,
                    spentName: spentName,
                    spentValue: spentValue
                }

              setData([...data, newSpent]);  
            }}/>
        </View>
            <View style={styles.list}>
                <KeyboardAvoidingView behavior='height'>
                    <FlatList
                        data={data}
                        ItemSeparatorComponent={<View style={{height: 10}}/>}
                        renderItem={({item}) => <SpentCard spentName={item.spentName} 
                        spentValue={item.spentValue}
                        keyExtractor={item => item.id}
                        />}
                    />
                </KeyboardAvoidingView>
            </View>
   </View>
  );
}