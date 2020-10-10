// https://sample-nodejs-rest-service.azurewebsites.net/

const fetch = require('node-fetch');

const url = 'https://sample-nodejs-rest-service.azurewebsites.net/api/v1/';
const pathUser = 'user/';
const pathPost = 'post/';
const pathComment = 'comment/';
const Query = {
    users: () =>
        fetch(url + pathUser).then(p => p.json()),
    user: (root, args, context, info) =>
        fetch(url + pathUser + args.userId).then(p => p.json())
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