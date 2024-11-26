import { Flex } from 'antd';

import logo from '/logo.png';

export default function Header() {
  return (
    <Flex
      align='center'
      justify='flex-start'
      style={{
        height: 90,
        backgroundColor: '#d9d8d8',
        paddingLeft: 60,
      }}
    >
      <img src={logo} alt='logo_flexxus' />
    </Flex>
  );
}
