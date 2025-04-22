import databaseService from './databaseService';
import { ID, Query } from 'react-native-appwrite';

const databaseId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COL_BOOKS_ID;

const booksService = {
  async addBook(user_id, title, author) {
    if (!title) {
      return { error: '[ERROR] Title field cannot be empty.' };
    }

    const data = { title, author, user_id };
    const response = await databaseService.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      data
    );

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },

  async getBooks(user_id) {
    if (!user_id) {
      console.error('[ERROR] Missing user_id in getBooks().');

      return { data: [], error: 'user_id is missing.' };
    }

    try {
      const response = await databaseService.listDocuments(
        databaseId,
        collectionId,
        [Query.equal('user_id', user_id)]
      );

      return response;
    } catch (error) {
      console.log('[ERROR] Failed to fetch books:', error.message);

      return { data: [], error: error.message };
    }
  },

  async updateBook(id, data) {
    const response = await databaseService.updateDocument(
      databaseId,
      collectionId,
      id,
      data
    );

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },

  async deleteBook(id) {
    const response = await databaseService.deleteDocument(
      databaseId,
      collectionId,
      id
    );

    if (response?.error) {
      return { error: response.error };
    }

    return { success: true };
  },
};

export default booksService;
