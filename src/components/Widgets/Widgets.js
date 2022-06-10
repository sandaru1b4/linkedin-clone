import React from "react";
import "./Widgets.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordOutlinedIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoOutlinedIcon />
      </div>
      {newsArticle(
        "LIVE from Cannes: Marketing in a new era",
        "Top news - 2678 readers"
      )}
      {newsArticle(
        "A lack of motivation in job hunting can start a vicious spiral of self-doubt and distractions — often leading to a longer-than-necessary search",
        "Top news - 3453 readers"
      )}
      {newsArticle(
        "Elon Musk may finally get the Twitter information he's been waiting for",
        "Top news - 2444 readers"
      )}
      {newsArticle(
        "9 out of 10 people don't know how to negotiate their salary during an interview."
      )}

      <img
        src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
        alt="ad"
      />
    </div>
  );
}

export default Widgets;
