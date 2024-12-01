import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/Home';
import BookListScreen from './src/screen/BookList';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Buscas' }} />
        <Stack.Screen name="Books" component={BookListScreen} options={{ title: 'Lista de livros' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
