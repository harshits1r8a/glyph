import { Client, Databases, Query } from "appwrite";

import config from "../config/config.js";

export class Databasesservice {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  //   CreatePost
  async createPost({
    title,
    slug,
    content,
    featuredImg,
    status,
    userId,
    category,
    tags,
  }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImg,
          status,
          userId,
          category,
          tags,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
      throw error;
    }
  }

  //   updatePost
  async updatePost(
    slug,
    { title, content, featuredImg, status, category, tags }
  ) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImg,
          status,
          category,
          tags,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
      throw error;
    }
  }

  //   deletePost
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      throw error;
    }
  }

  //   getPost
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  //getPosts

  async getPosts(
    queries = [
      Query.equal("status", "active"),
      Query.limit(10),
      Query.offset(0),
    ]
  ) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }
}

const databasesservice = new Databasesservice();

export default databasesservice;
