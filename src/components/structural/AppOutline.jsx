import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';  // Import Layout
import Home from '../content/Home';
import Status from '../content/Status';
import SystemConfig from '../content/SystemConfig';
import AGC from '../content/AGC';
import Blanking from '../content/Blanking';
import Network from '../content/Network';
import Scheduler from '../content/Scheduler';
import Account from '../content/Account';
import NotFound from '../content/NotFound';

function AppOutline() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="status" element={<Status />}/>
          <Route path="systemconfig" element={<SystemConfig />}/>
          <Route path="agc" element={<AGC />}/>
          <Route path="blanking" element={<Blanking />}/>
          <Route path="network" element={<Network />}/>
          <Route path="scheduler" element={<Scheduler />}/>
          <Route path="account" element={<Account/>} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppOutline;
