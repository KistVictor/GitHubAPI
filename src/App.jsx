import './App.css';
import { Provider } from 'react-redux';

import store from './store';

import Layout from './components/Layout'
import Home from './view/Home'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Layout>

          <Home />

        </Layout>
      </Provider>
    </div>
  );
}

export default App;