import './App.css';
import store from './utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './component/Body';
import MainContainer from './component/MainContainer';
import WatchPage from './pages/WatchPage';
import SearchPage from './pages/SearchPage';
import Subscriptions from './pages/Subscriptions';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children: [
      {
        path: '/',
        element: <MainContainer/>
      },
      {
        path: 'watch',
        element: <WatchPage/>
      },
      {
        path: 'results',
        element: <SearchPage/>
      },
      {
        path: '/feed/subscriptions',
        element: <Subscriptions/>
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
