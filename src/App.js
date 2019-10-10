import React from 'react';
import './App.css';
import { Layout, Menu, Icon } from 'antd';
import NavBar from './components/NavBar';
// import { Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
     <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>
            <NavBar />
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
        <Sider>Sider</Sider>
      </Layout>
    </div>
  );
}

export default App;
