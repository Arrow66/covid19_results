import { Layout } from 'antd';
import "./index.css"
const { Header} = Layout;

const CustomHeader = ()=>{
    return (
        <Header className="header">
            <h1>Covid 19 Report India</h1>
        </Header>
    )
}

export default CustomHeader