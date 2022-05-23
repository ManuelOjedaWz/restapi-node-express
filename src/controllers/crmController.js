import mongoose from 'mongoose'
import { ContactSchema } from '../models/crmModel'

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body)
    await newContact.save()
    res.json(newContact)
  } catch (err) {
    res.send(err)
  }
}

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({})
    res.json(contacts)
  } catch (err) {
    res.send(err)
  }
}

export const getOneById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactID)
    res.json(contact)
  } catch (error) {
    res.send(error)
  }
}

export const updateContact = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.contactID, req.body)
    const contact = await Contact.findById(req.params.contactID)
    res.json(contact)
  } catch (error) {
    res.send(error)
  }
}

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactID)
    await Contact.deleteOne({ _id: req.params.contactID })
    res.json(contact)
  } catch (error) {
    res.send(error)
  }
}
