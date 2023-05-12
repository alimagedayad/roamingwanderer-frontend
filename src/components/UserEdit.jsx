import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => (
    <Edit mutationMode='pessimistic'>
        <SimpleForm
          sanitizeEmptyValues={false}
        >
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);