import { Layout,Row,Col } from 'antd';
import CovidTable from '../Table';
import "./index.css"
const { Content } = Layout;


const Main = ()=>{
     
    return (
        <Content className="content">
            <Row> 
                <Col span={4}/>
            <Col span={16}>
        <div className="main_div">
            <CovidTable/>
        </div>
        </Col>
        <Col span={4}/>
        </Row>
        </Content>
    )
}

export default Main;