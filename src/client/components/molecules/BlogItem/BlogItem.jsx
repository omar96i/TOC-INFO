import React from "react";
import "./BlogItem.scss";
import { Link } from "react-router-dom";

const BlogItem = ({ article }) => {
  return (
    <Link to={`/blog/${article.urlSlug}`} className="blog-item" itemScope itemType="https://schema.org/blog">
      {window.innerWidth > 768?<img itemProp="associatedMedia" src={article.cardImage} alt="" />:<img itemProp="associatedMedia" src={article.coverImage} alt="" />}
      <div className="blog-item__content" >
      <p className="blog-item__content__metadata">
          Por <span itemProp="author" className="author">{article.author}</span> -{" "}
          {article.frontDate} 
        </p>
        <h5 itemProp="name">{article.title}</h5>
        <p className="blog-item__content__paragraph" itemProp="abstract">
          {100
            ? `${article.description.substring(
                0,
                100
              )}...`
            : article.description}
        </p>
        <button>Leer artículo</button>
      </div>
      
    </Link>
  );
};

export default BlogItem;
