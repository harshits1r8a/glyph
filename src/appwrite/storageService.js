import { Client, ID,Storage } from "appwrite";

import config from "../config/config";

export class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(config.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

   getFilePreview(fileId) {
    try {
      return   this.storage.getFilePreview(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite serive :: getFilePreview :: error", error);
      return false;
    }
  }
}

const storageService = new StorageService();

export default storageService;
