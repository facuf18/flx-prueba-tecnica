import { Table, Flex, Button, Tag } from 'antd';

export default function DataTable({
  data,
  isLoading,
  setEditUserModalOpen,
  setEditUser,
  setDeleteUserModalOpen,
  setDeleteUser,
}) {
  const openEditModal = (id) => {
    const user = data?.find((u) => u.id === id);
    setEditUser(user);
    setEditUserModalOpen(true);
  };

  const openDeleteModal = (id) => {
    const user = data?.find((u) => u.id === id);
    setDeleteUser(user);
    setDeleteUserModalOpen(true);
  };

  const columns = [
    {
      title: 'Usuario',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Apellido',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <>
          {status === 'active' && <Tag color='green'>Activo</Tag>}
          {status === 'inactive' && <Tag color='volcano'>Inactivo</Tag>}
        </>
      ),
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_, { id }) => (
        <Flex gap={8}>
          <Button
            color='primary'
            variant='link'
            onClick={() => openEditModal(id)}
          >
            Editar
          </Button>
          <Button
            color='primary'
            variant='link'
            onClick={() => openDeleteModal(id)}
          >
            Eliminar
          </Button>
        </Flex>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      style={{
        width: '100%',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
      }}
      tableLayout='fixed'
      pagination={{
        position: 'bottom-right',
        defaultPageSize: 9,
        showSizeChanger: false,
      }}
      loading={isLoading}
    />
  );
}
