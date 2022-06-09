import React from "react";
import Post from "../models/Post";
import IndividualPostSummary from "./IndividualPostSummary";

interface PostProps {
  posts: Post[];
}

export const PostSummaryList: React.FC<PostProps> = ({ posts }: PostProps) => {
  return (
    <div className="post-overview">
      {posts.map((item) => {
        return (
          <IndividualPostSummary
            title={item.title}
            shortSummary={item.shortSummary}
            created={item.created}
            photoLink={item.photoLink}
            content={item.content}
          ></IndividualPostSummary>
        );
      })}
    </div>
  );
};
