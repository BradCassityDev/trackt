const express = require("express");
const { authMiddleware } = require("./utils/auth");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.delete("/deletephoto", (req, res) => {
  console.log(req.body);

  let publicId = `trackt-user-pfp/${req.body.photo}`;

  console.log(publicId);

  cloudinary.config({
    cloud_name: "trackt",
    api_key: "464351718111111",
    api_secret: "96ghx_SKtHqWxFmItRvfLOT4tD8",
  });

  cloudinary.uploader.destroy(publicId, function (error, result) {
    console.log(error, result);
    if (error) {
      res.status(401).send({ message: "Could not delete photo." });
    } else {
      res.status(200).send({ message: "Photo deleted!" });
    }
  });
});

app.post("/uploadphoto", (req, res) => {
  console.log(req.body);
  let publicId = `trackt-user-pfp/${req.body.username}`;
  console.log(publicId);
  cloudinary.config({
    cloud_name: "trackt",
    api_key: "464351718111111",
    api_secret: "96ghx_SKtHqWxFmItRvfLOT4tD8",
  });
  cloudinary.uploader.unsigned_upload(
    "./images/placeholder-profile-pic.jpg",
    "trackt",
    { public_id: req.body.username },
    function (error, result) {
      console.log(error, result);
      if (error) {
        res.status(401).send({ message: "Could not upload photo." });
      } else {
        res.status(200).send({ message: "Photo Uploaded!" });
      }
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
