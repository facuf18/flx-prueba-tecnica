import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ConfigProvider } from 'antd';

import '../src/index.css';

createRoot(document.getElementById('root')).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
);
