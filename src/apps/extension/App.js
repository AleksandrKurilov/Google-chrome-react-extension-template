import React from 'react';
import colors from '../../consts/colors';
import options from '../../consts/options';
import { restoreOptions } from '../../modules/storage-provider';
import { sendToActiveTab } from '../../modules/message-provider'

function App() {

  const onOptionLoaded = ({favoriteColor}) => {
    let message = '';

    if (colors && colors.includes(favoriteColor)) {
      message = `Your favorite color is ${favoriteColor} ;-)`;
    }
    else {
      message = "You don't have any selected favorite color ¯\_(ツ)_/¯";
    }

    sendToActiveTab({message});
  }

  const remind = () => {
    restoreOptions(options.FAVORITE_COLOR, onOptionLoaded);
  }

  return (
    <div className="App">
      <button onClick={remind}>Remind me what is my favorite color</button>
    </div>
  );
}

export default App;
