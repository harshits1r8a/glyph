import { Account, Client, ID } from "appwrite";

import config from "../config/config.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // SignUp
  async createAccount({ email, password, name }) {
    try {
      // 1. Create the user account
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        
        //call login for redirect
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite Service :: createAccount :: error", error);
      throw error;
    }
  }

  //   Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite Service :: login :: error", error);
      throw error;
    }
  }

  // GetUser
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service :: getCurrentUser :: error", error);
      throw error;
    }
  }

  //   Logout
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service :: logout :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
