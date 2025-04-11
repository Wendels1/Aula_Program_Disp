import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Escudo') {
              iconName = focused ? 'shield' : 'shield-outline';
            } else if (route.name === 'Jogadores') {
              iconName = focused ? 'account-group' : 'account-group-outline';
            } else if (route.name === 'Títulos') {
              iconName = focused ? 'trophy' : 'trophy-outline';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#e53030',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
          },
          headerStyle: {
            backgroundColor: '#e53030',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Escudo" component={EscudoScreen} />
        <Tab.Screen name="Jogadores" component={JogadoresScreen} />
        <Tab.Screen name="Títulos" component={TitulosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}