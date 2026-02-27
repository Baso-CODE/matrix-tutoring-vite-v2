import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

const API_URL = "https://goenakan.id/wp-json/wp/v2/posts?slug=";

function fixLazyImages(html) {
  return html
    .replace(/<img([^>]+)data-src="([^"]+)"([^>]*)>/g, '<img$1src="$2"$3>')
    .replace(/data-srcset="[^"]*"/g, "")
    .replace(/src="[^"]*lazy\.svg"/g, "");
}

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  console.log("ini adalah data author", author);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_URL}${slug}`);
        const data = await res.json();

        if (data.length > 0) {
          const postData = data[0];
          postData.content.rendered = fixLazyImages(postData.content.rendered);

          // ambil author
          if (postData.author) {
            const authorRes = await fetch(
              `https://goenakan.id/wp-json/wp/v2/users/${postData.author}`
            );
            const authorData = await authorRes.json();
            setAuthor(authorData);
          }

          setPost(postData);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div className="blog-loading">Loading...</div>;
  if (!post)
    return <div className="blog-not-found">Artikel tidak ditemukan.</div>;

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const authorName = author?.name || "Unknown Author";
  const authorAvatar =
    author?.avatar_urls?.["96"] ||
    author?.avatar_urls?.["48"] ||
    "https://secure.gravatar.com/avatar/?d=mm&r=g";

  return (
    <div className="blog-detail-container">
      {featuredImage && (
        <div className="blog-featured">
          <img src={featuredImage} alt={post.title.rendered} />
        </div>
      )}{" "}
      {featuredImage && (
        <div className="blog-featured">
          <img src={featuredImage} alt={post.title.rendered} />
        </div>
      )}
      <h1
        className="blog-title"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      {/* Author Info */}
      <div className="blog-author">
        <img
          src={authorAvatar}
          alt={authorName}
          className="blog-author-avatar"
        />
        <div>
          <p className="blog-author-name">{authorName}</p>
          <p className="blog-date">
            {new Date(post.date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
};

export default BlogDetail;
