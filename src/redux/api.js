import axios from "axios";

export const loadUsersApi = async (start, end) =>
  await axios.get(`http://localhost:5000/users?_start=${start}&_end=${end}`);

export const createUserApi = async (user) =>
  await axios.post(`http://localhost:5000/users`, user);

export const deleteUserApi = async (id) =>
  await axios.delete(`http://localhost:5000/users/${id}`);

export const updateUserApi = async (id, user) =>
  await axios.put(`http://localhost:5000/users/${id}`, user);

export const searchUserApi = async (query) =>
  await axios.get(`http://localhost:5000/users?q=${query}`);

export const filterUserApi = async (value) =>
  await axios.get(`http://localhost:5000/users?status=${value}`);

export const sortUserApi = async (value) =>
  await axios.get(`http://localhost:5000/users?_sort=${value}$_order=asc`);

/*-----------------------------Administrator-----------------------------*/
export const loadAdminUsersApi = async (start, end) =>
  await axios.get(`http://localhost:5000/adminUsers?_start=${start}&_end=${end}`);

export const createAdminUserApi = async (adminUser) =>
  await axios.post(`http://localhost:5000/adminUsers`, adminUser);

export const deleteAdminUserApi = async (id) =>
  await axios.delete(`http://localhost:5000/adminUsers/${id}`);

export const updateAdminUserApi = async (id, adminUser) =>
  await axios.put(`http://localhost:5000/adminUsers/${id}`, adminUser);

export const searchAdminUserApi = async (query) =>
  await axios.get(`http://localhost:5000/adminUsers?q=${query}`);

export const filterAdminUserApi = async (value) =>
  await axios.get(`http://localhost:5000/adminUsers?status=${value}`);

export const sortAdminUserApi = async (value) =>
  await axios.get(`http://localhost:5000/adminUsers?_sort=${value}$_order=asc`);


/*-----------------------------Clients-----------------------------*/
export const loadClientUsersApi = async (start, end) =>
  //await axios.get(`http://localhost:5000/clients`);
  await axios.get(`http://localhost:5000/clientUsers?_start=${start}&_end=${end}`);

export const createClientUserApi = async (clientUser) =>
  await axios.post(`http://localhost:5000/clientUsers`, clientUser);

export const deleteClientUserApi = async (id) =>
  await axios.delete(`http://localhost:5000/clientUsers/${id}`);

export const updateClientUserApi = async (id, clientUser) =>
  await axios.put(`http://localhost:5000/clientUsers/${id}`, clientUser);

export const searchClientUserApi = async (query) =>
  await axios.get(`http://localhost:5000/clientUsers?q=${query}`);

export const filterClientUserApi = async (value) =>
  await axios.get(`http://localhost:5000/clientUsers?status=${value}`);

export const sortClientUserApi = async (value) =>
  await axios.get(`http://localhost:5000/clientUsers?_sort=${value}$_order=asc`);

/*-----------------------------Drivers-----------------------------*/
export const loadDriverUsersApi = async (start, end) =>
  await axios.get(`http://localhost:5000/driverUsers?_start=${start}&_end=${end}`);

export const createDriverUserApi = async (driverUser) =>
  await axios.post(`http://localhost:5000/driverUsers`, driverUser);

export const deleteDriverUserApi = async (id) =>
  await axios.delete(`http://localhost:5000/driverUsers/${id}`);

export const updateDriverUserApi = async (id, driverUser) =>
  await axios.put(`http://localhost:5000/driverUsers/${id}`, driverUser);

export const searchDriverUserApi = async (query) =>
  await axios.get(`http://localhost:5000/driverUsers?q=${query}`);

export const filterDriverUserApi = async (value) =>
  await axios.get(`http://localhost:5000/driverUsers?status=${value}`);

export const sortDriverUserApi = async (value) =>
  await axios.get(`http://localhost:5000/driverUsers?_sort=${value}$_order=asc`);

/*-----------------------------Cleaners-----------------------------*/
export const loadCleanerUsersApi = async (start, end) =>
  await axios.get(`http://localhost:5000/cleanerUsers?_start=${start}&_end=${end}`);

export const createCleanerUserApi = async (cleanerUser) =>
  await axios.post(`http://localhost:5000/cleanerUsers`, cleanerUser);

export const deleteCleanerUserApi = async (id) =>
  await axios.delete(`http://localhost:5000/cleanerUsers/${id}`);

export const updateCleanerUserApi = async (id, cleanerUser) =>
  await axios.put(`http://localhost:5000/cleanerUsers/${id}`, cleanerUser);

export const searchCleanerUserApi = async (query) =>
  await axios.get(`http://localhost:5000/cleanerUsers?q=${query}`);

export const filterCleanerUserApi = async (value) =>
  await axios.get(`http://localhost:5000/cleanerUsers?status=${value}`);

export const sortCleanerUserApi = async (value) =>
  await axios.get(`http://localhost:5000/cleanerUsers?_sort=${value}$_order=asc`);


/*-----------------------------PickUps-----------------------------*/
export const loadPickUpsApi = async (start, end) =>
  await axios.get(`http://localhost:5000/pickups?_start=${start}&_end=${end}`);

export const createPickUpApi = async (pickUp) =>
  await axios.post(`http://localhost:5000/pickups`, pickUp);

export const deletePickUpApi = async (id) =>
  await axios.delete(`http://localhost:5000/pickups/${id}`);

export const updatePickUpApi = async (id, pickUp) =>
  await axios.put(`http://localhost:5000/pickups/${id}`, pickUp);

export const searchPickUpApi = async (query) =>
  await axios.get(`http://localhost:5000/pickups?q=${query}`);

export const filterPickUpApi = async (value) =>
  await axios.get(`http://localhost:5000/pickups?status=${value}`);

export const sortPickUpApi = async (value) =>
  await axios.get(`http://localhost:5000/pickups?_sort=${value}$_order=asc`);

/*-----------------------------DropOffs-----------------------------*/
export const loadDropOffsApi = async (start, end) =>
  await axios.get(`http://localhost:5000/dropoffs?_start=${start}&_end=${end}`);

export const createDropOffApi = async (dropOff) =>
  await axios.post(`http://localhost:5000/dropoffs`, dropOff);

export const deleteDropOffApi = async (id) =>
  await axios.delete(`http://localhost:5000/dropoffs/${id}`);

export const updateDropOffApi = async (id, dropOff) =>
  await axios.put(`http://localhost:5000/dropoffs/${id}`, dropOff);

export const searchDropOffApi = async (query) =>
  await axios.get(`http://localhost:5000/dropoffs?q=${query}`);

export const filterDropOffApi = async (value) =>
  await axios.get(`http://localhost:5000/dropoffs?status=${value}`);

export const sortDropOffApi = async (value) =>
  await axios.get(`http://localhost:5000/dropoffs?_sort=${value}$_order=asc`);