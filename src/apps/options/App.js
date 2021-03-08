import React, { useState, useEffect } from 'react';
import SelectOption from './components/select-option';
import options from '../../consts/options';
import { saveOptions, restoreOptions, clearOptions } from '../../modules/storage-provider';

function App() {
  const [color, setColor] = useState('');

  const onOptionLoaded = ({favoriteColor}) => {
    setColor(favoriteColor);
  }

  useEffect(() => {
    restoreOptions(options.FAVORITE_COLOR, onOptionLoaded);
  }, []);

  const saveColor = () => {
    saveOptions(options.FAVORITE_COLOR, color);
  }

  const loadColor = () => {
    restoreOptions(options.FAVORITE_COLOR, onOptionLoaded);
  }

  const clearColor = () => {
    clearOptions();
    loadColor();
  }

  return (
    <SelectOption
      selectedColor={color}
      setColor={setColor}
      save={saveColor}
      load={loadColor}
      clear={clearColor}
    />
  )
}

export default App;
