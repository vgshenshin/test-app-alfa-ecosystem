import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store/store';
import MainPage from '../../pages/mainPage/MainPage';
import SingleCharacterPage from '../../pages/singleCharacterPage/SingleCharacterPage';
import PageNotFound from '../../pages/404/404';

import './app.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/id",
    element: <SingleCharacterPage />,
    errorElement: <PageNotFound />,
  },
])


function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;