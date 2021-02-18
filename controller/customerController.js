const Post = require("../model/customercollection");

const controller = {};

controller.save = async (req, res) => {
  console.log("in save method");
  console.log(req.body);
  const post = new Post({
    userName: req.body.userName,
    contact: req.body.contact,
    address: req.body.address,
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
    console.log(savePost);
  } catch (err) {
    res.json({ message: err });
  }
};

controller.retriveWithoutPromise = async (req, res) => {
  let myPromise = new Promise(function (myResolve, myReject) {
    myResolve(Post.find());
  });
  const retrivePost = await myPromise;
  res.json(retrivePost);
  console.log(retrivePost);
};

controller.promiseRetrive = (req, res) => {
  let myPromise = new Promise(function (myResolve, myReject) {
    myResolve(Post.find());
    myReject();
  });
  myPromise.then(
    function (value) {
      console.log(value);
      res.json(value);
    },
    function (error) {
      console.log(error);
    }
  );
};

controller.retrive = async (req, res) => {
  try {
    const retrivePost = await Post.find();
    res.json(retrivePost);
    console.log(retrivePost);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = controller;
