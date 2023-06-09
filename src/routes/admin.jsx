import { Admin, Resource, ListGuesser, EditGuesser, ReOrderButtons, } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import { CountryList } from '../components/CountryList'
import {CountryEdit} from '../components/CountryEdit'
import { CountryCreate } from '../components/CountryCreate'
import { UserList } from '../components/UserList'
import { UserEdit } from '../components/UserEdit'
import { UserCreate } from '../components/UserCreate'
import dataProvider from '../services/dataProvider'
import authProvider from '../services/authProvider'
// const dataProvider = simpleRestProvider(`${process.env.REACT_APP_BACKEND_URL}/admin`)

const AdminPage = () => {
  return (
    <Admin title="" basename='/admin' dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="country" list={CountryList} edit={CountryEdit} create={CountryCreate} />
        <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin>
  );
}

export default AdminPage;