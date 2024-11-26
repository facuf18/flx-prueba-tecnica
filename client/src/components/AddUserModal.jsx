import { Modal } from 'antd';
import AddUserForm from './AddUserForm';

export default function AddUserModal({ open, setOpen }) {
  const footer = [];

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(!open)}
      footer={footer}
      title='Agregar usuario'
      destroyOnClose
    >
      <AddUserForm setOpen={setOpen} />
    </Modal>
  );
}
