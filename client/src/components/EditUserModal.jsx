import { Modal } from 'antd';
import EditUserForm from './EditUserForm';

export default function EditUserModal({ open, setOpen, user }) {
  const footer = [];

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(!open)}
      footer={footer}
      title='Editar usuario'
      destroyOnClose
    >
      <EditUserForm user={user} setOpen={setOpen} />
    </Modal>
  );
}
