import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const CreateEvent = lazy(() => import('./pages/CreateEvent'));
const EventDetails = lazy(() => import('./pages/EventDetails.jsx'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateEvent />} />
          <Route path="event/:eventId" element={<EventDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
