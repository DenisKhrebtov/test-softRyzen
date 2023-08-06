import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { Suspense, lazy, useState } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const CreateEvent = lazy(() => import('./pages/CreateEvent'));
const EventDetail = lazy(() => import('./pages/EventDetail.jsx'));
const EditEvent = lazy(() => import('./pages/EditEvent.jsx'));

const App = () => {
  const [events, setEvents] = useState(null);
  const [formatList, setFormatList] = useState(null);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout events={events} setFormatList={setFormatList} />}>
          <Route
            index
            element={
              <Home
                events={events}
                setEvents={setEvents}
                formatList={formatList}
                setFormatList={setFormatList}
              />
            }
          />
          <Route path="create" element={<CreateEvent />} />
          <Route path="event/:eventId" element={<EventDetail />} />
          <Route path="event/edit/:eventId" element={<EditEvent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
