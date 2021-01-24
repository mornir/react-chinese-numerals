import React, { useState, useEffect } from 'react';
import toChineseNumeral from 'to-chinese-numeral';

import {
  Card,
  Heading,
  studioTheme,
  ThemeProvider,
  TextInput,
  Container,
  Label,
  Menu,
  MenuItem,
  Stack,
  Text,
  Box,
  MenuDivider,
  Layer,
  Select,
} from '@sanity/ui';

interface AppProps {}

function App({}: AppProps) {
  // Return the App component.

  const fonts = [
    'Noto Sans SC',
    'ZCOOL KuaiLe',
    'Kaiti',
    'Liu Jian Mao Cao',
    'Ma Shan Zheng',
  ];

  const startingNumber = 156;

  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  const [inputNumber, setInputNumber] = useState(startingNumber.toString());

  const [chineseNumeral, setChineseNumeral] = useState(
    toChineseNumeral(startingNumber),
  );

  function convertToChineseNumeral(event: React.ChangeEvent<HTMLInputElement>) {
    const numString = event.currentTarget.value;
    setInputNumber(numString);

    const num = parseFloat(numString);
    setChineseNumeral(toChineseNumeral(num));
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <ThemeProvider theme={studioTheme}>
      <Container width={2}>
        <Card padding={4}>
          <Heading as="h1" size={3}>
            Chinese Numerals {selectedFont}
          </Heading>
        </Card>
        <Card padding={4}>
          <Label size={4}>
            Enter number
            <TextInput
              fontSize={[2, 2, 3, 4]}
              padding={[3, 3, 4]}
              border={true}
              value={inputNumber}
              onChange={convertToChineseNumeral}
            />
          </Label>
        </Card>
        <Card padding={6}>
          <Text size={4}>{chineseNumeral}</Text>
        </Card>
        <Card padding={4}>
          <Select
            fontSize={[2, 2, 3, 4]}
            padding={[3, 3, 4]}
            space={[3, 3, 4]}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedFont(event.currentTarget.value)
            }
          >
            {fonts.map((font) => {
              return (
                <option key={font} value={font}>
                  {font}
                </option>
              );
            })}
          </Select>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
