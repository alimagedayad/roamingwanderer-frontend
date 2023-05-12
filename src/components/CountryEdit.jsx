import {TextInput, NumberInput, SimpleForm, Edit} from 'react-admin';

export const CountryEdit = () => {
    const transform = (data) => {
        if(data.updatedAt) {
            delete data.updatedAt;
        }
        if(data.id) {
            delete data.id;
        }

        return data;
    }
    return (
        <Edit transform={transform} mutationMode='pessimistic'>
            <SimpleForm>
                <TextInput source="currency.name" />
                <TextInput source="geometry.coordinates.0" label="Lat" />
                <TextInput source="geometry.coordinates.1" label="Long" />
                <TextInput source="name" />
                <TextInput source="capital" />
                <TextInput source="continent" />
                <TextInput source="language" />
                <TextInput source="demonym" />
                <TextInput source="flag" />
                <TextInput source="happiness_level" />
                <NumberInput source="income_level" />
                <NumberInput source="live_cost" />
                <NumberInput source="rent_price" />
                <NumberInput source="total_score" />
                <NumberInput source="total_cost_per_day" />
            </SimpleForm>
        </Edit>
    )
}

export default CountryEdit;