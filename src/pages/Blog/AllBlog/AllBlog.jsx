import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllBlog.css";

const AllBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://goenakan.id/wp-json/wp/v2/posts?_embed"
        );
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <p className="loading-text">Loading articles...</p>;
  }

  return (
    <div className="blog-list">
      <h1 className="blog-heading">Artikel Terbaru</h1>
      <div className="blog-grid">
        {posts.map((post) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x400?text=No+Image";

          const author = post._embedded?.author?.[0];
          const authorName = author?.name || "Unknown Author";
          const authorAvatar =
            author?.avatar_urls?.["48"] ||
            "https://secure.gravatar.com/avatar/?d=mm&r=g";

          return (
            <div className="blog-card" key={post.id}>
              <Link to={`/blog/${post.slug}`} className="blog-link">
                <div className="blog-thumb">
                  <img src={featuredImage} alt={post.title.rendered} />
                </div>
                <div className="blog-info">
                  <h2
                    className="blog-title"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div className="blog-meta">
                    <div className="blog-author">
                      <img
                        src={authorAvatar}
                        alt={authorName}
                        className="blog-avatar"
                      />
                      <span>{authorName}</span>
                    </div>
                    <span className="blog-date">
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBlog;
