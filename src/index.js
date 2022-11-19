import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './services/store';
import App from './components/App/App';
import './pages/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

