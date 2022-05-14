import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import { Avatar } from "@mui/material";
import Post from "../Post/Post";
import { db } from "../../Firebase.js";
import firebase from "firebase/compat/app";

function Feed() {

  //constants
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  //send post when buttton click
  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Achitha Sandaruwan",
      description: "Test text",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__InputContainer">
      <div className="feed__InputContainerWithDp">
      
      <Avatar className="feedInput__dp" src= "https://upload.wikimedia.org/wikipedia/commons/3/35/Boki-avatar-v2.jpg" />

        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">send</button>
          </form>
        </div>
        </div>
        <div className="feed__inputOptions">
          {/* Input Option */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={ImageIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={ImageIcon} title="Job" color="#A8D4FF" />
          <InputOption Icon={ImageIcon} title="Write" color="#FC9295" />
        </div>
      </div>

      {/* Post */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
