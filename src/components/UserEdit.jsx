import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => {
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
    return (
        <Edit mutationMode='pessimistic' >
            <SimpleForm
            sanitizeEmptyValues={false}
            >
                <TextInput source="name" />
                <TextInput source="email" />
            </SimpleForm>
        </Edit>
    )
};