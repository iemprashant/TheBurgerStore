import React from 'react';
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './Containers/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
