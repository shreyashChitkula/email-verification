import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("651fa942d30aae8e03d2")

export const account = new Account(client)

//Database

export const databases = new Databases(client);