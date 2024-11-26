import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Flex,
  Divider,
  Tag,
  Select,
} from 'antd';
import axios from 'axios';

export default function EditUserForm({ setOpen, user }) {
  const initialValues = {
    age: user.age,
    email: user.email,
    lastname: user.lastname,
    name: user.name,
    status: user.status,
    username: user.username,
  };

  const options = [
    {
      value: 'active',
      label: <Tag color='green'>Activo</Tag>,
    },
    {
      value: 'inactive',
      label: <Tag color='volcano'>Inactivo</Tag>,
    },
  ];

  const handleSubmit = (data) => {
    axios
      .put(`http://localhost:4000/users/${user.id}`, data)
      .then(() => {
        setOpen(false);
        location.reload();
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <>
      <Form
        layout='vertical'
        initialValues={initialValues}
        onFinish={handleSubmit}
        requiredMark={false}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label='Usuario' name='username'>
              <Input placeholder='johndoe' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Email' name='email' rules={[{ type: 'email' }]}>
              <Input placeholder='johndoe@domain.com' />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label='Nombre' name='name'>
              <Input placeholder='John' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Apellido' name='lastname'>
              <Input placeholder='Doe' />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label='Estado' name='status'>
              <Select options={options} placeholder='Seleccione un estado' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Edad' name='age'>
              <Input placeholder='43' type='number' />
            </Form.Item>
          </Col>
        </Row>
        <Divider style={{ margin: 0 }} />
        <Flex justify='end'>
          <Form.Item style={{ margin: 0, marginTop: 20 }}>
            <Button type='primary' htmlType='submit'>
              Editar usuario
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </>
  );
}
