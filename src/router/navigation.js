import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from '../screens/contacts/contacts';
import DetailsScreen from '../screens/details/details';

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={ContactsScreen}
          options={{
            headerShown: false,
            headerShadowVisible: false,
          }} />
        <Stack.Screen name="Details" component={DetailsScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitleAlign: "center",
            title: "Contact Details",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}