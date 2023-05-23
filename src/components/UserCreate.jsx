import {Create, SimpleForm, TextInput, NumberInput, PasswordInput} from 'react-admin';

export const UserCreate = () => {

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
        
        if(data.id) {
            delete data.id;
        }

        return data;
    }
    
    <Create transform={transform}>
        <SimpleForm>
            <TextInput source="name" required />
            <TextInput source="email" required />
            <PasswordInput source="password" required />
        </SimpleForm>
    </Create>
}