import { Table,Input} from 'antd';
import { useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useFetch } from '../Main/hooks';

const { Search } = Input;


const CovidTable = ()=>{
    const [isLoading,stateWiseData,districtWiseData,hasError]  =  useFetch();

    const handleSearch  = ({ setSelectedKeys, selectedKeys, confirm, clearFilters })=>{
        return    ( <Search placeholder="input search text" onSearch={(value)=>{
            confirm()
        }}           onChange={e =>

            {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                if(!e.target.value)
                {
                    confirm();
                }

            }
        
        }
        enterButton allowClear />)

    }

    const stateWiseResult = (record)=>{
        let expandedDataSource = districtWiseData[record.state];
        const expandedColumns = [
            { title: 'District', dataIndex: 'district', key: 'district',filterDropdown:handleSearch,filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
            onFilter: (value, record) =>
            {
               return  record
                ? record.district.toString().toLowerCase().includes(value.toLowerCase())
                : ''
            }
        },
        { title: 'Confirmed Cases', dataIndex: 'confirmed', key: 'confirmed' },
        { title: 'Recovered Cases', dataIndex: 'recovered', key: 'recovered' },
        { title: 'Deceased Cases', dataIndex: 'deceased', key: 'deceased' }
        ] 

        return <Table columns={expandedColumns} dataSource={expandedDataSource} />
        
    }

    const columns = [
        { title: 'State', dataIndex: 'state', key: 'state' },
        { title: 'Confirmed Cases', dataIndex: 'confirmed', key: 'confirmed' },
        { title: 'Recovered Cases', dataIndex: 'recovered', key: 'recovered' },
        { title: 'Deceased Cases', dataIndex: 'deceased', key: 'deceased' }
    ]

    useEffect(()=>{
        console.log("sdad",isLoading,stateWiseData,districtWiseData,hasError)
    })


    return (
        <Table bordered title={()=>"State wise covid19 data"} className="covid_table" columns={columns} dataSource={stateWiseData}  expandable={{ expandedRowRender:stateWiseResult }}

        />
    )

}

export default CovidTable;