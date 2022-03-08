import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import getPilotsApiAsync from '../../api/GetPilots';

const PilotScreen = () => {
  const [pilotData, setPilotData] = useState(null);
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

  console.log('pilotData', pilotData);

  return (
    <SafeAreaView>
      <View>
        <Text>PilotScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default PilotScreen;
