import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
    <RouterProvider router={router} />
  )
}

export default App;