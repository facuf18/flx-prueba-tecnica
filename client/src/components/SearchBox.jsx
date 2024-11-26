import axios from 'axios';
import { Input } from 'antd';
import { addKey } from '../utils/utils';
const { Search } = Input;

export default function SearchBox({ setData, setIsLoading }) {
  const handleSearch = async (value) => {
    setIsLoading(true);
    setTimeout(() => {
      if (value === '') {
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
          .all([
            axios.get(`http://localhost:4000/users?name=${value}`),
            axios.get(`http://localhost:4000/users?lastname=${value}`),
          ])
          .then(
            axios.spread((dataName, dataLastname) => {
              const fullData = [...dataName.data, ...dataLastname.data];
              setData(addKey(fullData));
              setIsLoading(false);
            }),
          )
          .catch((error) => {
            throw new Error(error);
          });
      }
    }, 2000);
  };

  return (
    <Search
      placeholder='Buscar usuarios'
      allowClear
      style={{
        width: 290,
      }}
      onSearch={handleSearch}
    />
  );
}
