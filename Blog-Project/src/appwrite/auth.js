// auth service form appwrite
import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite'


export class AuthService {
    client = new Client();
    // we can create the authentication from the server here but it will be the waste of resource so when the object is created only then we need to complete the request
    account;
    constructor (){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account= new Account(this.client)
    }

    async createAccount({name,email,password}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // call another method (if user exist then do the login )
                return this.login({email,password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }   
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)            
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite Error :: getcurrent user : ",error)
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("logout : ",error)
        }
    }
}

const authService = new AuthService();

export default authService; 
// export the auth Service object so that we don't need to create object in the other files