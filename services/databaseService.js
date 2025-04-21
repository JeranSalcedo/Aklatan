import { database } from './appwrite';

const databaseService = {
  async createDocument(databaseId, collectionId, id = null, data) {
    try {
      const response = await database.createDocument(
        databaseId,
        collectionId,
        id || undefined,
        data
      );

      return response;
    } catch (error) {
      console.error('[ERROR] Failed to create document:', error.message);

      return { error: error.message };
    }
  },

  async listDocuments(databaseId, collectionId) {
    try {
      const response = await database.listDocuments(databaseId, collectionId);

      return response.documents || [];
    } catch (error) {
      console.error('[ERROR] Failed to fetch documents:', error.message);

      return { error: error.message };
    }
  },

  async updateDocument(databaseId, collectionId, id, data) {
    try {
      const response = await database.updateDocument(
        databaseId,
        collectionId,
        id,
        data
      );

      return response;
    } catch (error) {
      console.error('[ERROR] Failed to update document:', error.message);

      return { error: error.message };
    }
  },

  async deleteDocument(databaseId, collectionId, id) {
    try {
      await database.deleteDocument(databaseId, collectionId, id);
      return { success: true };
    } catch (error) {
      console.error('[ERROR] Failed to delete document:', error.message);

      return { error: error.message };
    }
  },
};

export default databaseService;
