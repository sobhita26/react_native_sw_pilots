import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';

import getPilotsApiAsync from '../../api/GetPilots';
import styles from './Styles'; 


const onFavoritePress = () => {
  //TODO: add the data to Redux so we can render in Favorite tab
}

//TODO: This can be in a seperate component
const Item = ({ data }) => (
  <View style={styles.itemView}>
    <View style={styles.nameView}>
      <Text>Name: {data.name}</Text>
      <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={onFavoritePress}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Add Favorite</Text>
          </TouchableOpacity>
        </View>
    </View>
    <View style={styles.genderView}>
      <Text>Gender: {data.gender}</Text>
    </View>
    <Text>Starships: </Text>
  </View>
);

const PilotScreen = () => {
  const [pilotData, setPilotData] = useState(null);

  //Fetch an api and update local state and Redux
  useEffect(() => {
    let filteredPilotData = [];
    async function fetchPilots() {
      const result = await getPilotsApiAsync();
      if  (result&& result.length > 0) {
        result.map((data) => {
          if (data && data.starships && data.starships.length > 0) {
            filteredPilotData.push(data);
            setPilotData(filteredPilotData);
          }
        })
      }
    }
    fetchPilots();
  }, []);

  const renderItem = ({ item }) => (
    <Item data={item} />
  );
  
  console.log('pilotData', pilotData);

  //TODO: This can be a Modal on a seperate component
  if (!pilotData) {
    return (
      <ActivityIndicator
        animating={true}
        color="#0000ff"
        style={styles.indicator}
        size="large"
      />
    );
  }

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <FlatList
          data={pilotData}
          renderItem={renderItem}
          keyExtractor={item => item.name}
      />
      </View>
    </SafeAreaView>
  );
};

export default PilotScreen;
