// App imports
import { Main } from './components';
import { MainProvider } from './components/context';
import './styles.scss';

export const App = () => {
  return (
    <div className="App">
      <MainProvider>
        <Main/>
      </MainProvider>
    </div>
  );
}