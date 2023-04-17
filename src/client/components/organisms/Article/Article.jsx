import React, { useEffect, useState, useContext } from "react";
import "./Article.scss";
import CustomHr from "../../atoms/CustomHr/CustomHr";
// import EditorJS from "@editorjs/editorjs";
// import Header from "@editorjs/header";
// import Paragraph from "@editorjs/paragraph";
// import Marker from "@editorjs/marker";
// import Delimiter from "@editorjs/delimiter";
// import ImageTool from "@editorjs/image";
// import Embed from "@editorjs/embed";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BlogService from "../../../services/BlogService";
import AuthService from "../../../services/AuthService";
import ImageService from "../../../services/ImageService";
import { ModalContext } from "../../../providers/ModalProvider";
import { months } from "../../../common/dateLabels";
// import M from "materialize-css/dist/js/materialize.min.js";
import { LoadingContext } from "../../../providers/LoadingProvider";
import facebook from "../../../assets/icons/Media/facebook-256.png"
import whatsappIcon from "../../../assets/icons/Media/whatsapp-256.png"
import twitter from "../../../assets/icons/Media/twitter-256.png"

const Article = () => {
  const M =
    typeof window !== "undefined"
      ? require("materialize-css/dist/js/materialize.min.js")
      : null;
  const EditorJS =
    typeof window !== "undefined" ? require("@editorjs/editorjs") : null;
  const Header =
    typeof window !== "undefined" ? require("@editorjs/header") : null;
  const Paragraph =
    typeof window !== "undefined" ? require("@editorjs/paragraph") : null;
  const Marker =
    typeof window !== "undefined" ? require("@editorjs/marker") : null;
  const Delimiter =
    typeof window !== "undefined" ? require("@editorjs/delimiter") : null;
  const ImageTool =
    typeof window !== "undefined" ? require("@editorjs/image") : null;
  const Embed =
    typeof window !== "undefined" ? require("@editorjs/embed") : null;
  let blogService = new BlogService();
  let location = useLocation();
  const [article, setArticle] = useState({});
  const [blocks, setBlocks] = useState([]);
  const { openModal, setModalMessage } = useContext(ModalContext);
  const { setShowLoading } = useContext(LoadingContext);
  const [editorJs, setEditorJs] = useState({});
  const [editorReady, setEditorReady] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    initEditor();
  }, []);
  useEffect(() => {
    if (editorReady && typeof window !== "undefined") {
      var editable_elements = document.querySelectorAll(
        "[contenteditable=true]"
      );
      for (var i = 0; i < editable_elements.length; i++) {
        var item = editable_elements[i]; // No es necesario llamar a myNodeList.item(i) en JavaScript
        item.setAttribute("contenteditable", false);
      }
    }
  }, [editorReady]);
  const initEditor = () => {
    blogService.getByUrlSlug(location.pathname.substring(6)).then((res) => {
      let article = res.data.result;
      let date = new Date(article.date);
      article.frontDate = `${
        months[date.getMonth()]
      } ${date.getDate()} ${date.getFullYear()}`;
      setArticle(article);
      const editor = new EditorJS({
        holder: "editorjsLocked",
        readOnly: true,
        data: JSON.parse(article.data),
        onReady: () => {
          setEditorReady(true);
        },
        tools: {
          header: Header,
          paragraph: Paragraph,
          marker: Marker,
          delimiter: Delimiter,
          image: ImageTool,
          embed: Embed,
        },
      });
      setEditorJs(editor);
    });
  };

  return (
    <div
      className="article-container"
      itemScope
      itemType="https://schema.org/article"
    >
      <div className="ppal">
        <h2 className="ppal__title">Blog cursos TOC</h2>
        <span className="ppal__route">
          <Link to="/">Inicio</Link>/<Link to="/blog?pagina=1">Blog</Link>/
          <Link to={`/blog/${article.urlSlug}`}>{article.title}</Link>
        </span>
      </div>
      {article.coverImage && (
        <>
          {window.innerWidth > 768 ? (
            <div
              className="article-container__img"
              style={{ backgroundImage: `url(${article.coverImage})` }}
            ></div>
          ) : (
            <div
              className="article-container__img"
              style={{ backgroundImage: `url(${article.cardImage})` }}
            ></div>
          )}
        </>
      )}
      <article className="article-view">
        <h1 className="title" itemProp="name">
          {article.title}
        </h1>
        <div className="metadata">
          <p className="metadata__author">
            Por{" "}
            <span className="metadata__author__name" itemProp="author">
              {article.author}
            </span>{" "}
          </p>
          <p itmeprop="datePublished">{article.frontDate}</p>
        </div>
        {/* {blocks.length === 0 && <div itemProp="articleBody" id="editorjs"></div>} */}
        <div itemProp="articleBody" id="editorjsLocked"></div>
      </article>
      <h5>Compartelo en tus redes sociales:</h5>
      <div className="article-socialMedia">
        
        <a className="article-socialMedia__facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=https://cursostoc.com/blog/${article.urlSlug}`}
          target="_blank"
        >
         <img alt="facebook icon" src={facebook}/> Facebook
        </a>
        <a className="article-socialMedia__whatsapp"
          href={`https://api.whatsapp.com/send?text=https://cursostoc.com/blog/${article.urlSlug}`}
          target="_blank"
          data-action="share/whatsapp/share"
        >
         <img alt="facebook icon" src={whatsappIcon}/> Whatsapp
        </a>
        <a className="article-socialMedia__twitter"
          href={`https://twitter.com/intent/tweet?text=https://cursostoc.com/blog/${article.urlSlug}`}
          target="_blank"
        >
          <img alt="facebook icon" src={twitter}/>Twitter
        </a>
      </div>
    </div>
  );
};

export default Article;
