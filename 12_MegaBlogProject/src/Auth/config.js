import conf from "../config/conf";
import { Client, Account, ID, Databases, Storage } from "appwrite";


export class Service{
    client = new Client();
    database;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }    
    
    
};
const service = new Service();

export default service

