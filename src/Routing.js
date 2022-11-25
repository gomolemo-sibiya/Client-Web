import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./redux/store";

import Layout from './pages/layout';

import AddEditAdmin from "./pages/add-edit/addEdit-Admin";
import AddEditDriver from "./pages/add-edit/addEdit-Drivers";
import AddEditClient from "./pages/add-edit/addEdit-Clients";
import AddEditCleaner from "./pages/add-edit/addEdit-Cleaners";
import AddEditPickUps from "./pages/add-edit/addEdit-Pickups";
import AddEditDropOff from "./pages/add-edit/addEdit-Dropoffs";

import adminStore from './redux/stores/adminStore';
import driverStore from "./redux/stores/driverStore";
import clientStore from "./redux/stores/clientStore";
import cleanerStore from "./redux/stores/cleanerStore";
import pickUpStore from "./redux/stores/pickUpStore";
import dropOffStore from "./redux/stores/dropOffStore";

import DriverTable from "./components/tables/drivers";
import Administrator from "./components/tables/adminstrator";
import Clients from "./components/tables/clients";
import CleanerTable from "./components/tables/cleaner";
import DropoffTable from "./components/tables/dropoffs"
import PickupTable from "./components/tables/pickups";

export const ThemeContext = React.createContext(null);

const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />} />
        {/*------------------------Stores------------------------*/}         
        <Route exact path="/add-admin" element={
            <Provider store={adminStore}>
              <AddEditAdmin />
            </Provider>
          } 
        />
        <Route exact path="/edit-admin/:id" element={
            <Provider store={adminStore}>
              <AddEditAdmin />
            </Provider>
          } 
        />

        <Route exact path="/add-driver" element={
            <Provider store={driverStore}>
              <AddEditDriver />
            </Provider>
          } 
        />
        <Route exact path="/edit-driver/:id" element={
            <Provider store={driverStore}>
              <AddEditDriver />
            </Provider>
          } 
        />

        <Route exact path="/add-client" element={
            <Provider store={clientStore}>
              <AddEditClient />
            </Provider>
          } 
        />
        <Route exact path="/edit-client/:id" element={
            <Provider store={clientStore}>
              <AddEditClient />
            </Provider>
          } 
        />

        <Route exact path="/add-cleaner" element={
            <Provider store={cleanerStore}>
              <AddEditCleaner />
            </Provider>
          } 
        />
        <Route exact path="/edit-cleaner/:id" element={
            <Provider store={cleanerStore}>
              <AddEditCleaner />
            </Provider>
          } 
        />  

        <Route exact path="/add-pickup" element={
            <Provider store={pickUpStore}>
              <AddEditPickUps />
            </Provider>
          } 
        />
        <Route exact path="/edit-pickup/:id" element={
            <Provider store={pickUpStore}>
              <AddEditPickUps />
            </Provider>
          } 
        />  

        <Route exact path="/add-dropoff" element={
            <Provider store={dropOffStore}>
              <AddEditDropOff />
            </Provider>
          } 
        />
        <Route exact path="/edit-dropoff/:id" element={
            <Provider store={dropOffStore}>
              <AddEditDropOff />
            </Provider>
          } 
        />

        {/*------------------------Tables------------------------*/}  
        <Route path="/administrators" element={
            <Layout>
              <Provider store={adminStore}>
                <Administrator />
              </Provider>
            </Layout>  
          } 
        />

        <Route path="/drivers" element={
            <Layout>
              <Provider store={driverStore}>
                <DriverTable />
              </Provider>
            </Layout>
          }
        />

        <Route path="/clients" element={
            <Layout>
              <Provider store={clientStore}>
                <Clients />
              </Provider>
            </Layout>  
          } 
        />

        <Route path="/cleaners" element={
            <Layout>
              <Provider store={cleanerStore}>
                <CleanerTable />
              </Provider>
            </Layout>
          } 
        />
        <Route path="/recycling-pickups" element={
            <Layout>
              <Provider store={pickUpStore}>
                <PickupTable />
              </Provider>
            </Layout>  
          } 
        />
        
        <Route path="/recycling-dropoffs" element={
            <Layout>
              <Provider store={dropOffStore}>
                <DropoffTable />
              </Provider>
            </Layout>  
          } 
        />
      </Routes>
  );
}

export default Routing