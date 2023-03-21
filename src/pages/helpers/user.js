import { User } from '../../models';
import { DataStore } from '@aws-amplify/datastore';


export const newUser = async (user) => {
    const user = await DataStore.save(
        new User({
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "Volunteers": []
        })
    );

    console.log(user)
}

export const getUser = async (user) => {
    const models = await DataStore.query(User);
    console.log(models);
}

export const updateUser = async (user) => {
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
     to apply updates to the item’s fields rather than mutating the instance directly */
    await DataStore.save(User.copyOf(CURRENT_ITEM, item => {
        // Update the values on {item} variable to update DataStore entry
        item.firstName = user.firstName;
        item.lastName = user.lastName;
        item.email = user.email;
    }));
}

export const deleteUser = async (user) => {
    const modelToDelete = await DataStore.query(User, 123456789);
    DataStore.delete(modelToDelete);
}