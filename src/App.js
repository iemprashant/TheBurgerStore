import React from 'react';
import Layout from "./Components/Layout/Layout"
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

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
