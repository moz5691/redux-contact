import {GET_CONTACTS,
        GET_CONTACT,
        EDIT_CONTACT,
        ADD_CONTACT,
        DELETE_CONTACT} from "./types";
import axios from 'axios';

export const getContacts = () => async (dispatch) => {
  try {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: GET_CONTACTS,
        payload: result.data
      }
    )
  } catch(err){
    console.log(err);
  }
};

export const getContact = (id) => async (dispatch) => {
  try{
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: GET_CONTACT,
      payload: result.data
    })

  }catch(err){
    console.log(err);
  }
}

export const editContact = (contact) => async (dispatch) => {
  try {
    const result = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact )
    dispatch({
      type: EDIT_CONTACT,
      payload: result.data
    })

  } catch(err){
    console.log(err);
  }
}

export const addContact = (contact) => async (dispatch) =>{
  try {
    const result = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
    dispatch({
      type: ADD_CONTACT,
      payload: result.data
    })
  } catch (err){
    console.log(err);
  }
};

export const deleteContact = (id) => async (dispatch) =>{
  try {
    const result = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  } catch (err){
    console.log(err);
  }

};