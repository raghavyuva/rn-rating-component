
# rn-rating-component

A Simple react-native rating component.


![npm](https://img.shields.io/npm/v/rn-rating-component)
  
## Installation

Install rn-rating-component and its dependeices with npm

```bash
  npm install --save rn-rating-component
```
 or

```bash
  yarn add --save rn-rating-component
```
    
## Basic Example

```javascript
import React, {useState} from 'react';
import Rating from 'rn-rating-component'

export const Rn_Rating_Component_Example =()=> {
      const [rate, setRate] = useState(null);
      return (
       <Rating
        maxrating={5}
        size={30}
        defaultrate={rate}
        onChangeRate={setRate}
      />
  );
}
```
## Features

- two default modes
- uri string for custom icons
- fully customisable style and props
- Highly functional

  
## Documentation
The default icons are from [react-native-vector-icons]('https://github.com/oblador/react-native-vector-icons').see the demo app inside the directory rating_test_app/App.js
you can find all the usage examples in the same file of the demo app.for customiconfilled and customiconoutline prop pass in the icon name from react-native-vector-icons/MaterialIcons.
  
## Usage

### Props
| Prop              | Type      | Default             | Description                                                                                         |
|-------------------|-----------|---------------------|-----------------------------------------------------------------------------------------------------|
| color             |  String   | #900                | Required for default and custom icons,it'll be ignored if isurlpresent prop set to true             |
| customiconfilled  |  String   | undefined           | Used for custom filled icon,it'll override default icons                                            |
| customiconoutline |  String   | undefined           | Used for custom outline icon,it'll override default icons                                           |
| defaultrate       |  Number   | 0                   | Default rate for filled icons and it's required                                                     |
| filledurl         |  Uri      | undefined           | Uri string for filled png / svg icons to be used, this will work if isurlpresent prop set to true.  |
| isurlpresent      |  Boolean  | false               | Used for custom image icons,                                                                        |
| maxrating         |  Number   | 5                   | Maximum icons or ratings to be rendered                                                             |
| mode              |  String   | star                | Used for defaults mode options can be either 'star' or 'heart'                                      |
| onChangeRate      |  function | undefined           | It's required for handling change in icons and is required                                          |
| outlineurl        |  Uri      | undefined           | Uri string for outline png / svg icons to be used, this will work if isurlpresent prop set to true. |
| parentstyle       |  Style    | flexDirection:'row' | This style will apply to total component, use this for handling parent View of the component        |
| size              |  Number   | 30                  | Will be used for changing size of the icons, ignored if isurlpresent set to true                    |
| style             |  Style    | undefined           | Style for icons,for ex margin:2, this will render icons with margin of 2.                           |
| key               |  Number   | undefined           | key prop,                                                                                           |

## Advanced Example

```javascript
import React, { useState } from "react";
import Rating from "rn-rating-component";

export const Rn_Rating_Component_Example = () => {
  const [rate, setRate] = useState(null);
  
  console.log(rate);

  return (
    <Rating
      maxrating={5}
      onChangeRate={setRate}
      defaultrate={rate}
      isurlpresent={true}
      filledurl=""
      outlineurl=""
    />
  );
};

```

## Demo App Installation
```bash
cd rating_test_app
```

```bash
npm install --save
```

```bash
npx react-native start
```
```bash
npx react-native run-android
```

## Contributing

Contributions are always welcome!
Please adhere to this project's `code of conduct`.

  
## Support

For support, create an issue

  
