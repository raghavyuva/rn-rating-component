import React, {useState} from 'react';
import {View} from 'react-native';
import Rating from 'rn-rating-component';

const App = () => {
  const [rate, setrate] = useState(null);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Rating
        mode="heart"
        maxrating={5}
        size={60}
        color="orange"
        defaultrate={rate}
        onChangeRate={setrate}

      />
      <Rating
        mode="star"
        maxrating={5}
        size={60}
        color="yellow"
        // onChangeRate={setrate}
        defaultrate={4}
      />
      <Rating
        maxrating={5}
        size={60}
        color="pink"
        customiconfilled="lock"
        customiconoutline="lock-open"
        defaultrate={2}
        // onChangeRate={setrate}
      />
      <Rating
        mode="star"
        maxrating={5}
        size={60}
        color="white"
        parentstyle={{
          backgroundColor: 'blue',
        }}
        // onChangeRate={setrate}
        defaultrate={rate}
      />
      <Rating
        mode="star"
        maxrating={5}
        size={60}
        color="red"
        onChangeRate={setrate}
        defaultrate={rate}
        isurlpresent
        filledurl='' //pass in url for image icon filled
        outlineurl=''  //pass in url for image icon outline
      />
    </View>
  );
}; 

export default App;