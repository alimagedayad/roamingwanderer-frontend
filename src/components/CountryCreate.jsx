import {Create, SimpleForm, TextInput, NumberInput} from 'react-admin';

export const CountryCreate = () => {
    const transform = (data) => {
        if(data.updatedAt) {
            delete data.updatedAt;
        }
        
        if (data.last_modified) {
            delete data.last_modified;
        }

        if (data.createdAt) {
            delete data.createdAt;
        }

        if (data.total_cost_per_day) {
            delete data.total_cost_per_day;
        }
        
        if(data.id) {
            delete data.id;
        }

        return data;
    }

    return (
        <Create transform={transform} mutationMode='pessimistic'>
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
            <NumberInput source="airfare" required />
            <NumberInput source="food" required />
            <NumberInput source="accommodation" required />
        </SimpleForm>
    </Create>
    )
}