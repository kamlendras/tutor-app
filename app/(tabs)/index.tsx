import { Image, StyleSheet, Platform } from 'react-native';
import { View, Text,ScrollView, } from "react-native";
import { Button } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AppBar from '@/components/appbar'
import Banner from '@/components/banner'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import Menu from '@/components/menu'
import Calender from '@/components/calender'
export default function HomeScreen() {
  const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );
  return (
<SafeAreaView>
<ScrollView >
      <AppBar/>
      <Calender/>
<Banner/>
<Card>
      <Card.Title
      
    title="Anil Doolani Sir | mathematics"
    subtitle="6:30 PM"
    left={(props) => <Avatar.Image size={50} source={require('../../assets/images/a1.jpg')} />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
  />
   <Card.Actions>
      <Button >Cancel</Button>
      <Button  icon="chat-processing" >Message</Button>
      <Button icon="phone" >Call</Button>
      <Button onPress={() => setVisible(true)} uppercase={false} >Change Time</Button>
    </Card.Actions>
 
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={6}
          minutes={30}
        />
        </Card>
        <Card>
      <Card.Title
      
    title="Anil Doolani Sir | mathematics"
    subtitle="6:30 PM"
    left={(props) => <Avatar.Image size={50} source={require('../../assets/images/a1.jpg')} />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
  />
   <Card.Actions>
      <Button >Cancel</Button>
      <Button  icon="chat-processing" >Message</Button>
      <Button icon="phone" >Call</Button>
      <Button onPress={() => setVisible(true)} uppercase={false} >Change Time</Button>
    </Card.Actions>
 
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={6}
          minutes={30}
        />
        </Card>
        <Card>
      <Card.Title
      
    title="Anil Doolani Sir | mathematics"
    subtitle="6:30 PM"
    left={(props) => <Avatar.Image size={50} source={require('../../assets/images/a1.jpg')} />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
  />
   <Card.Actions>
      <Button >Cancel</Button>
      <Button  icon="chat-processing" >Message</Button>
      <Button icon="phone" >Call</Button>
      <Button onPress={() => setVisible(true)} uppercase={false} >Change Time</Button>
    </Card.Actions>
 
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={6}
          minutes={30}
        />
        </Card>
       
        <Menu/>
        </ScrollView>
    </SafeAreaView>
  );
}

