// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Volunteer, User } = initSchema(schema);

export {
  Volunteer,
  User
};