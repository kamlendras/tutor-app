import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Okay',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://assets.vogue.in/photos/607d10139958e484805743e0/2:3/w_2560%2Cc_limit/Ira%2520Guha%2C%2520founder%2520and%2520CEO%2520Asan%2520Cup.jpg',
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      Due to some traffic issue your biology class will start 20 mins later from scheduled timings.
    </Banner>
  );
};

export default MyComponent;