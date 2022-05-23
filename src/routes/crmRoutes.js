import { addNewContact, getAllContacts, getOneById, updateContact, deleteContact } from '../controllers/crmController'

const routes = (app) => {
  app.route('/contact')
    .get(getAllContacts)
    .post(addNewContact)

  app.route('/contact/:contactID')
    .get(getOneById)
    .put(updateContact)
    .delete(deleteContact)
}

export default routes
