import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './utils/reportWebVitals';
import { PostProvider } from './contexts/PostContext';
import ErrorPage from './pages/ErrorPage';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostList />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/post/:id',
    element: <PostDetail />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
