import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, View, ToastAndroid } from 'react-native';
import SpentInput from '../../components/SpentInput';
import SpentButton from '../../components/SpentButton';
import SpentCard from '../../components/SpentCard';
import { object, string, number } from 'yup';

import { styles } from './style';


export default function SpentPage({navigation, route}) {

    React.useEffect(() => {
        const id = route.params?.id;

        console.log("aqui esta o id: " + id);
    }, [])

    const schema = object({
        spentName: string()
        .required("O nome do gasto não pode ser vazio."),
        spentValue: number()
        .required("O valor do gasto não pode ser vazio.")
        .positive("O valor do gasto deve ser um número positivo.")
    })

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

            <SpentButton title={"Adicionar"} onPress={async () => {                            

                const newSpent = {                    
                    spentName: spentName,
                    spentValue: spentValue
                }
                
                try{
                    await schema.validate(newSpent);
                    newSpent.id = data.length+1;
                    setData([...data, newSpent]);  
                } catch(error){
                    ToastAndroid.show(error.errors[0], ToastAndroid.SHORT);
                }            
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