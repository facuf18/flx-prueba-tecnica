import { Select, Tag } from 'antd';
import axios from 'axios';
import { addKey } from '../utils/utils';

export default function FilterSelect({ setData, setIsLoading }) {
  const options = [
    {
      value: 'all',
      label: 'Todos',
    },
    {
      value: 'active',
      label: <Tag color='green'>Activo</Tag>,
    },
    {
      value: 'inactive',
      label: <Tag color='volcano'>Inactivo</Tag>,
    },
  ];

  const handleSelect = (value) => {
    setIsLoading(true);
    setTimeout(() => {
      if (value === 'all') {
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
      } else {
        axios
          .get(`http://localhost:4000/users?status=${value}`)
          .then((response) => {
            if (response) {
              setData(addKey(response?.data));
              setIsLoading(false);
            }
          })
          .catch((error) => {
            throw new Error(error);
          });
      }
    }, 2000);
  };

  return (
    <Select
      placeholder='Filtrar por estado'
      style={{
        width: 210,
      }}
      options={options}
      onSelect={handleSelect}
    />
  );
}
