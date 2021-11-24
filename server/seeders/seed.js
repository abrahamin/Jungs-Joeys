const db = require('../config/connection');
const { User, Topic, Post, Comment } = require('../models');
const userSeeds = require('./userSeeds.json');
const topicSeeds = require('./topicSeeds.json');
const postSeeds = require('./postSeeds.json');
const commentSeeds = require('./commentSeeds.json');


db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Topic.deleteMany({});
        await Post.deleteMany({});
        await Comment.deleteMany({});

        const users = await User.insertMany(userSeeds);
        const topics = await Topic.insertMany(topicSeeds);
        const posts = await Post.insertMany(postSeeds);
        const comments = await Comment.insertMany(commentSeeds);

        for (newPost of posts) {
            //randomly assign each post to a user
            const tempUser = users[Math.floor(Math.random() * users.length)];
            tempUser.posts.push(newPost._id);
            await tempUser.save();

            //randomly assign a topic to each post
            const tempTopic = topics[Math.floor(Math.random() * topics.length)];
            newPost.topic = tempTopic._id;
            await newPost.save();

            //randomly assign a comment to each post
            const tempComment = comments[Math.floor(Math.random() * comments.length)];
            newPost.comments = tempComment._id;
            await newPost.save();
        }

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
