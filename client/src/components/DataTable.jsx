import { Table } from 'antd';

export default function DataTable({ data }) {
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
    },
    {
      title: 'Acciones',
      dataIndex: 'acciones',
      key: 'acciones',
    },
  ];
  return (
    <Table
      bordered
      columns={columns}
      dataSource={data}
      style={{
        width: '100%',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
      }}
      pagination={{
        position: 'bottom-right',
      }}
    />
  );
}
