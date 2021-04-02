// export const contactAdd = value => ({
//     type: 'contact/Add';
//     payload: value;
// });

// export const contactDelate = id => ({
//     type: 'contact/Delate';
//     payload: id;
// })

import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const contactAdd = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const contactDelete = createAction('contacts/delete');
const filterChange = createAction('contacts/change');

export default { contactAdd, contactDelete, filterChange };