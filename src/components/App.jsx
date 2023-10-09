import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
