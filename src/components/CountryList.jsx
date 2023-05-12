import {List, Datagrid, TextField, NumberField, SimpleList} from 'react-admin';

export const CountryList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="currency.name" />
            <TextField source="geometry.type" />
            <TextField source="name" />
            <TextField source="capital" />
            <TextField source="continent" />
            <TextField source="language" />
            <TextField source="demonym" />
            <TextField source="flag" />
            <TextField source="happiness_level" />
            <NumberField source="income_level" />
            <NumberField source="live_cost" />
            <NumberField source="rent_price" />
            <NumberField source="total_score" />
            <NumberField source="total_cost_per_day" />
        </Datagrid>
        {/* <SimpleList
            primaryText={record => record.name}
            secondaryText={record => record.capital}
        /> */}
    </List>
)