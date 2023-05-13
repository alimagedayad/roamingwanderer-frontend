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
                <NumberInput source="food" />
                <NumberInput source="airfare" />
                <NumberInput source="accommodation" />
            </SimpleForm>
        </Edit>
    )
}

export default CountryEdit;