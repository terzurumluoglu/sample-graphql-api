// https://sample-nodejs-rest-service.azurewebsites.net/

const fetch = require('node-fetch');

const url = 'https://sample-nodejs-rest-service.azurewebsites.net/api/v1/';
const pathUser = 'user/';
const pathPost = 'post/';
const pathComment = 'comment/';
const Query = {
    users: async () => {
        const data = await fetch(url + pathUser);
        return data.json();
    },
    user: async (root, args, context, info) =>{
        const data = await fetch(url + pathUser + args.userId);
        return data.json();
    }
}

const User = {
    posts: async (root) => {
        const data = await fetch(url + pathUser + root.id + '/' + pathPost);
        return data.json();
    }
}

const Post = {
    comments: async (root) => {
        const data = await fetch(url + pathComment + root.id);
        return data.json();
    }
}

module.exports = { Query, User, Post };