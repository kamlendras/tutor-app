import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const MyComponent = () => (
    <Appbar.Header>
       <Appbar.Content title="Schedule" subtitle={'Subtitle'} />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="bell-badge" onPress={() => {}} />
    </Appbar.Header>
);

export default MyComponent;
