import databaseService from './databaseService';
import { ID } from 'react-native-appwrite';

const databaseId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COL_AKLAT_ID;

const aklatService = {
  async addAklat(title, author) {
    if (!title) {
      return { error: '[ERROR] Title field cannot be empty.' };
    }

    const data = { title, author };
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

  async getAklat() {
    const response = await databaseService.listDocuments(
      databaseId,
      collectionId
    );

    if (response.error) {
      return { error: response.error };
    }

    return { data: response };
  },

  async updateAklat(id, data) {
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

  async deleteAklat(id) {
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

export default aklatService;
