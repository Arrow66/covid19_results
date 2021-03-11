import { Layout } from 'antd';
import './App.css';
import CustomHeader from './components/Header';
import Main from './components/Main';
const { Footer} = Layout;


function App() {
  return (
    <Layout>
     <CustomHeader/>
        <Main/>
      <Footer> All Rights Reserved  </Footer>
    </Layout>
  );
}

export default App;


