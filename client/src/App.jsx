import { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import axios from 'axios';
import { Breadcrumb, Flex, Button } from 'antd';
import SearchBox from './components/SearchBox';
import FilterSelect from './components/FilterSelect';
import Header from './components/Header';
import { addKey } from './utils/utils';
import AddUserModal from './components/addUserModal';
import EditUserModal from './components/EditUserModal';
import DeleteUserModal from './components/DeleteUserModal';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const [editUserModalOpen, setEditUserModalOpen] = useState(false);
  const [deleteUserModalOpen, setDeleteUserModalOpen] = useState(false);

  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get('http://localhost:4000/users')
        .then((response) => {
          if (response) {
            setData(addKey(response?.data));
            setIsLoading(false);
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    }, 2000);
  }, []);

  return (
    <>
      <main
        style={{
          backgroundColor: '#f4f4f5',
          minHeight: '100vh',
          paddingBottom: '24px',
        }}
      >
        {/* Header */}
        <Header />

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
          <Breadcrumb
            items={[{ title: 'Usuarios' }, { title: 'Listado de usuarios' }]}
          />

          {/* Search, Filter and Add */}
          <Flex
            justify='space-between'
            align='center'
            style={{
              width: '100%',
            }}
          >
            <Flex justify='flex-start' gap={16}>
              <SearchBox setData={setData} setIsLoading={setIsLoading} />
              <FilterSelect setData={setData} setIsLoading={setIsLoading} />
            </Flex>
            <Button
              type='primary'
              style={{
                width: 138,
              }}
              onClick={() => setAddUserModalOpen(!addUserModalOpen)}
            >
              Agregar usuario
            </Button>
          </Flex>

          {/* Table */}
          <DataTable
            data={data}
            isLoading={isLoading}
            setEditUserModalOpen={setEditUserModalOpen}
            setEditUser={setEditUser}
            setDeleteUserModalOpen={setDeleteUserModalOpen}
            setDeleteUser={setDeleteUser}
          />
        </Flex>
      </main>

      {/* Modals */}
      <AddUserModal open={addUserModalOpen} setOpen={setAddUserModalOpen} />
      <EditUserModal
        open={editUserModalOpen}
        setOpen={setEditUserModalOpen}
        user={editUser}
      />
      <DeleteUserModal
        open={deleteUserModalOpen}
        setOpen={setDeleteUserModalOpen}
        user={deleteUser}
      />
    </>
  );
}

export default App;
