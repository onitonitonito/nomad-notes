/*
*
*
**/
import { NOTE_FRAGMENT } from './fragments';
// import { GET_NOTES } from './queries';
import { saveNotes, restoreNotes } from './offline';

export const defaults = {
  notes: restoreNotes()
};

export const resolvers = {
  
};

export const typeDefs = {

};