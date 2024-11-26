import { Modal } from 'antd';
import axios from 'axios';

export default function DeleteUserModal({ open, setOpen, user }) {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/users/${user.id}`)
      .then(() => {
        setOpen(!open);
        location.reload();
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(!open)}
      title='Eliminar usuario'
      okButtonProps={{
        color: 'danger',
      }}
      onOk={handleDelete}
      okText='Eliminar'
      destroyOnClose
    >
      <p style={{ fontSize: '1rem' }}>
        ¿Está seguro que desea eliminar el usuario{' '}
        <b style={{ color: 'red' }}>@{user?.username}?</b>
      </p>
    </Modal>
  );
}
