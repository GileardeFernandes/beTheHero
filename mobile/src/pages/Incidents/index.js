import React, {useEffect, useState} from 'react';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import {useNavigation}  from    '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';

import imgLogo from '../../assets/logo.png'
export default function Incidents() {
     const [page, setPage] =  useState(1);
     const [loading,setLoading] = useState(false);
     const [total, setTotal] = useState('');
     const [incidents,setIncidents] = useState([]);
     const navigator = useNavigation();

     function navigateToDetail(incident){
         navigator.navigate('Detail', {incident});
     }

     async function loadingIncidents(){
         if(loading || incidents.count == total ){
             return;
         }

         setLoading(true);

         const response = await api.get('incidents', {
             params:{ page}
            });
         setIncidents([...incidents,...response.data]);
         setTotal(response.headers['x-total-count']);
         setPage(page + 1);
         setLoading(false);
     }

     useEffect(() => {
        loadingIncidents();
     },[]);
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={imgLogo} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadingIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item:incident} ) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)} >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}