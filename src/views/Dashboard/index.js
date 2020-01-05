import React from 'react'
import { useState,useEffect} from 'react'
import { Table,Button,Input,Icon, Row } from 'antd';
import Highlighter from 'react-highlight-words';
import Layout from '../../components/Layout'
import { withFirebase} from '../../Firebase/context'

function Dashboard(props) {
  const [selected,setSelected] = useState({})
  const [sortedInfo, setSortedInfo] = useState({})
  const [filteredInfo,setFilteredInfo] = useState({})
  const [dataSource,setDataSource] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [searchInfo, setSearchInfo] = useState({
    searchText: '',
    searchedColumn: '',
  })


  async function getUsers() {
    setLoading(true)
    const customers = await props.firebase.getCustomers()
    setDataSource(customers)
    setLoading(false)
  }
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo({...sorter});
    setFilteredInfo({...filters})
  }
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInfo.searchInput = node;
          }}
          placeholder={"Ara"}
          value={selectedKeys? selectedKeys[0] : ''}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Ara
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Temizle
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInfo.searchInput.select());
      }
    },
    render: text =>
      searchInfo.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchInfo.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
          text
        ),
  });
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchInfo({
      searchText:selectedKeys[0],
      searchedColumn: dataIndex,
    })
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSortedInfo({...sortedInfo, searchText: '' });
  };
  const clearAll = () => {
    setFilteredInfo({})
    setSortedInfo({})
  };
  const columns = [
    {
      title: 'İd',
      dataIndex: 'key',
      key: 'key',
      onFilter: (value, record) => record.key === +value,
      filteredValue: filteredInfo.key || null,
      sorter: (a, b) => a.key > b.key,
      sortOrder: sortedInfo.columnKey === 'key' && sortedInfo.order,
      ...getColumnSearchProps('key'),
    },
    {
      title: 'İsim',
      dataIndex: 'name',
      key: 'name',
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Soyisim',
      dataIndex: 'surname',
      key: 'surname',
      sorter: (a, b) => a.name.length -  b.name.length,
      sortOrder: sortedInfo.columnKey === 'surname' && sortedInfo.order,
      ...getColumnSearchProps('surname'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
      ...getColumnSearchProps('email'),
    }
  ]
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelected({
        selectedRowKeys,
        selectedRows
      })
    },
  };
  return (
    <Layout>
      <Row type="flex" justify="end" style={{marginBottom : 20}}>
        <Button onClick={clearAll}>Filtreleri temizle</Button>
      </Row>
      <Table tableLayout="fixed" loading={loading} rowSelection={rowSelection} columns={columns} dataSource={dataSource} onChange={handleChange}/>
    </Layout>
  )
}
export default withFirebase(Dashboard)