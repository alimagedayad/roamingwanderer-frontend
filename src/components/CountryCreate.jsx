import {Create, SimpleForm, TextInput, NumberInput} from 'react-admin';

export const CountryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" required />
            <TextInput source="capital" required />
            <TextInput source="continent" required />
            <TextInput source="currency.name" required />
            <TextInput source="currency.code" required />
            <TextInput source="currency.symbol" required />
            <TextInput source="language" required />
            <TextInput source="geometry.type" disabled defaultValue="Point" />
            <NumberInput source="geometry.coordinates.0" label="Lat" required />
            <NumberInput source="geometry.coordinates.1" label="Long" required />
            <TextInput source="demonym" required />
            <TextInput source="flag" required />
            <TextInput source="life_score" required />
            <TextInput source="happiness_level" required />
            <NumberInput source="income_level" required />
            <NumberInput source="live_cost" required />
            <NumberInput source="rent_price" required />
            <NumberInput source="total_score" required />
            <NumberInput source="total_cost_per_day" required />
        </SimpleForm>
    </Create>
)