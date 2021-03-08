import React from 'react';
import './select-options.css';
import colors from '../../../../consts/colors';

function SelectOption({setColor, selectedColor, save, load, clear}) {
  const handleChangeSelected = ({target}) => {
    if (target.options.selectedIndex < 1) {
      return;
    }

    setColor(target.options[target.options.selectedIndex].value);
  }

  const color = colors.includes(selectedColor) ? selectedColor : 'default';

  return (
    <div className='wrap'>
      <h5 className='header'>Favorite color:</h5>
      <select value={color} onSelect={handleChangeSelected} onChange={handleChangeSelected}>
        <option value='default'>-</option>
        {
          colors.map((c) => {
            return (
            <option selected={selectedColor === c} key={c} value={c}>{c}</option>
            )
          })
        }
      </select>

      <div className='action-buttons'>
        <div className='action-button'>
          <button onClick={save}>Save</button>
        </div>
        <div className='action-button'>
          <button onClick={load}>Cancel</button>
        </div>
        <div className='action-button'>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
