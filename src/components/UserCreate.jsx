import {Create, SimpleForm, TextInput, NumberInput, PasswordInput} from 'react-admin';

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" required />
            <TextInput source="email" required />
            <PasswordInput source="password" required />
        </SimpleForm>
    </Create>
)