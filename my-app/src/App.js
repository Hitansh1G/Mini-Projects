import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import EventList from './EventList';
import RegistrationForm from './RegistrationForm';
import Dashboard from './Dashboard';

const events = [
  {
    id: 1,
    name: 'Event 1',
    date: '2023-04-01',
    location: 'Location 1',
  },
  {
    id: 2,
    name: 'Event 2',
    date: '2023-05-01',
    location: 'Location 2',
  },
  {
    id: 3,
    name: 'Event 3',
    date: '2023-06-01',
    location: 'Location 3',
  },
];

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>
          <Route exact path="/events">
            <EventList events={events} />
          </Route>
          <Route exact path="/events/:id">
            {/* Add individual event page component here */}
          </Route>
          <Route exact path="/register">
            <RegistrationForm />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
