// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Index from "./index"
import Explore from "./explore"
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const ScheduleRoute = () => <><Index/></>;

const PayRoute = () => <><Explore/></>;

const AskRoute = () => <Text>Recents</Text>;

const WorkRoute = () => <Text>Notifications</Text>;

const SettingsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'schedule', title: 'schedule', focusedIcon: 'clock-edit', unfocusedIcon: 'clock-edit-outline'},
    { key: 'pay', title: 'Pay', focusedIcon: 'qrcode' ,unfocusedIcon: 'data-matrix-scan'},
    { key: 'ask', title: 'Ask', focusedIcon: 'comment-question', unfocusedIcon: 'comment-question-outline'},
    { key: 'work', title: 'Homework', focusedIcon: 'file-document-edit' ,unfocusedIcon: 'file-document-edit-outline'},
    { key: 'settings', title: 'settings', focusedIcon: 'account-settings' ,unfocusedIcon: 'account-settings-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    schedule: ScheduleRoute,
    pay: PayRoute,
    ask: AskRoute,
    work: WorkRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;