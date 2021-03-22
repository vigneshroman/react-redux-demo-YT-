import store from './redux/store.js'
import {Provider} from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer.js';
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer.js';
import ItemContainer from './components/ItemContainer.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake="cake"/>
        <ItemContainer/>
    <CakeContainer />
    <HooksCakeContainer/>
    <IceCreamContainer/>
    <NewCakeContainer/>
    
   
  </div>
  </Provider>
    
  );
}

export default App;
