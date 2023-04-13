import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const API_URL = 'https://6435d3bb537112453fe040ad.mockapi.io/';

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}:endpoint`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {data.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default ApiData;