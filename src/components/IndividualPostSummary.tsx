import React from "react";
import Post from "../models/Post";

const IndividualPostSummary: React.FC<Post> = ({
  title,
  shortSummary,
  created,
  photoLink,
  content,
}: Post) => {
  return (
    <div>
      <tr>
        <td> {title}</td>
      </tr>
      <tr>
        <td> { shortSummary } </td>
      </tr>
      
      <tr>
        <td> { photoLink } </td>
      </tr>
    </div>
  );
};

export default IndividualPostSummary;
