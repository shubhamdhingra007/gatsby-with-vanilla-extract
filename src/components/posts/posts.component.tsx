import React, { FC } from "react";
import { Post } from "./post.component";
import { banner, container, postsBox } from "./posts.css";

export const Posts: FC<{ posts: any[]; title: string }> = ({
  posts,
  title,
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className={container}>
        <article className={postsBox}>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </article>
        <article className={banner}>Banner</article>
      </div>
    </section>
  );
};
