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
import { v4 as uuidv4 } from 'uuid';

export default function AddUserForm({ setOpen }) {
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
      .post('http://localhost:4000/users', {
        id: uuidv4(),
        ...data,
      })
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
      <Form layout='vertical' onFinish={handleSubmit} requiredMark={false}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label='Usuario' name='username'>
              <Input placeholder='johndoe' required />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Email' name='email' rules={[{ type: 'email' }]}>
              <Input placeholder='johndoe@domain.com' required />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label='Nombre' name='name'>
              <Input placeholder='John' required />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Apellido' name='lastname'>
              <Input placeholder='Doe' required />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label='Estado'
              name='status'
              rules={[{ required: true }]}
            >
              <Select
                options={options}
                required
                placeholder='Seleccione un estado'
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Edad' name='age'>
              <Input placeholder='43' required type='number' />
            </Form.Item>
          </Col>
        </Row>
        <Divider style={{ margin: 0 }} />
        <Flex justify='end'>
          <Form.Item style={{ margin: 0, marginTop: 20 }}>
            <Button type='primary' htmlType='submit'>
              Agregar usuario
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </>
  );
}
