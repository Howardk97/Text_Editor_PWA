import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // create database
  openDB('editor', 1, {
    upgrade(db) {
      if(db.objectStoreNames.contains('editor')) {
        console.log('editor database already exists')
        return;
      }

      // Object store for data
      db.createObjectStore('editor', { keyPath: 'id', autoIncrement: true });
      console.log('editor database created')
    }
  })
  console.error('putDb not implemented')
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // connect to database
  const editorDb = await openDB('editor', 1);

  // Specify database and privleges
  const tx = contactDb.trahnsaction('contact', 'readonly');

  // Get data from database
  const request = store.getAll();

  // Get confirmation of request
  const result = await request;
  console.log(result);

  console.error('getDb not implemented')
};

// Starts the database
initdb();
