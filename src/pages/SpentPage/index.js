import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, View, ToastAndroid, Keyboard } from 'react-native';
import SpentInput from '../../components/SpentInput';
import SpentButton from '../../components/SpentButton';
import SpentCard from '../../components/SpentCard';
import SpentService from '../../services/spentService';
import { object, string, number } from 'yup';
import { DatabaseConnection } from '../../services/dbInit';
import { styles } from './style';
import ExpenseService from '../../services/expenseService';


export default function SpentPage({ navigation, route }) {
    const expenseId = route.params?.id;
    const epxenseName = route.params?.name;

    const [data, setData] = useState([])
    const [spentName, setSpentName] = useState('');
    const [spentValue, setSpentValue] = useState('');

    React.useEffect(() => {
        navigation.setOptions({ title: epxenseName });
        getAllSpentsByExpense(expenseId);

        return async () => {
            await sum();
        }
    }, []);


    const sum = async () => {
        const spentService = new SpentService(DatabaseConnection.getConnection());
        const expenseService = new ExpenseService(DatabaseConnection.getConnection());
        
        try {
            
            const result = await spentService.getSpentsByExpenseId(expenseId);
            let total = 0;
            for(let element of result['_array']){
                total += element.spentValue;
            }
            await expenseService.updateById(expenseId, total);

        } catch (error) {
            console.log(error);
        }
    }

    const getAllSpentsByExpense = async (id) => {
        const spentService = new SpentService(DatabaseConnection.getConnection());

        try {
            const result = await spentService.getSpentsByExpenseId(id);
            setData(result['_array']);
        } catch (error) {
            console.log(error);
        }
    }

    const schema = object({
        spentName: string()
            .required("O nome do gasto não pode ser vazio."),
        spentValue: number()
            .required("O valor do gasto não pode ser vazio.")
            .positive("O valor do gasto deve ser um número positivo.")
    })




    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <SpentInput placeholder={"Digite o nome do gasto"}
                    value={spentName}
                    onChangeText={setSpentName} />
                <SpentInput placeholder={"Digite o valor do gasto"}
                    value={spentValue}
                    keyBoardType={"number-pad"}
                    onChangeText={setSpentValue} />

                <SpentButton title={"Adicionar"} onPress={async () => {
                    const spentService = new SpentService(DatabaseConnection.getConnection());
                    const newSpent = {
                        spentName: spentName,
                        spentValue: spentValue
                    }

                    try {
                        await schema.validate(newSpent);
                        await spentService.addSpent(newSpent.spentName, newSpent.spentValue, expenseId);
                        await getAllSpentsByExpense(expenseId);
                    } catch (error) {
                        ToastAndroid.show(error.errors[0], ToastAndroid.SHORT);
                    } finally {
                        Keyboard.dismiss();
                        setSpentName('');
                        setSpentValue('');
                    }
                }} />
            </View>
            <View style={styles.list}>
                <KeyboardAvoidingView behavior='height'>
                    <FlatList
                        data={data}
                        ItemSeparatorComponent={<View style={{ height: 10 }} />}
                        renderItem={({ item }) => <SpentCard
                            onLongPress={async () => {
                                const spentService = new SpentService(DatabaseConnection.getConnection());

                                try {
                                    await spentService.deleteById(item.id);
                                    await getAllSpentsByExpense(expenseId);
                                } catch (error) {
                                    console.log(error);
                                }

                            }}
                            spentName={item.spentName}
                            spentValue={item.spentValue}
                            keyExtractor={item => item.id}
                        />}
                    />
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}