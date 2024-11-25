import { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import logo from '/logo.png';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Breadcrumb, Flex, Input, Select, Button } from 'antd';

const { Search } = Input;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'http://localhost:4000/users',
        });
        if (response) {
          const parsedData = response?.data?.map((user) => {
            return {
              key: uuidv4(),
              ...user,
            };
          });
          setData(parsedData);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <main
      style={{
        backgroundColor: '#f4f4f5',
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <Flex
        align='center'
        justify='flex-start'
        style={{
          height: 90,
          backgroundColor: '#d9d8d8',
          paddingLeft: 60,
        }}
      >
        <img src={logo} alt='logo_flexxus' />
      </Flex>

      {/* Container */}
      <Flex
        vertical
        gap={20}
        justify='center'
        align='start'
        style={{
          marginLeft: 98,
          marginRight: 98,
          marginTop: 24,
        }}
      >
        {/* Breadcrumb */}
        <Breadcrumb>
          <Breadcrumb.Item>Usuarios</Breadcrumb.Item>
          <Breadcrumb.Item>Listado de usuarios</Breadcrumb.Item>
        </Breadcrumb>

        <Flex
          justify='space-between'
          align='center'
          style={{
            width: '100%',
          }}
        >
          <Flex justify='flex-start' gap={16}>
            <Search
              placeholder='Buscar usuarios'
              allowClear
              size='large'
              style={{
                width: 290,
              }}
            />
            <Select
              placeholder='Filtrar por estado'
              size='large'
              style={{
                width: 210,
              }}
            />
          </Flex>
          <Button
            type='primary'
            size='large'
            style={{
              width: 138,
            }}
          >
            Agregar usuario
          </Button>
        </Flex>

        {/* Table */}
        <DataTable data={data} />
      </Flex>
    </main>
  );
}

export default App;
