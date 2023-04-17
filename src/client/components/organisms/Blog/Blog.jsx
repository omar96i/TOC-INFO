import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Blog.scss";
// import M from "materialize-css/dist/js/materialize.min.js";
import CustomHr from "../../atoms/CustomHr/CustomHr";
import SubNavbar from "../../molecules/SubNavbar/SubNavbar";
import BlogItem from "../../molecules/BlogItem/BlogItem";
import LoadingIcon from "../../../assets/icons/Upload.svg";
import AuthService from "../../../services/AuthService";
import BlogService from "../../../services/BlogService";
import SubscriptionService from "../../../services/SubscriptionService";
import { months } from "../../../common/dateLabels";
import searchImg from "../../../assets/icons/busqueda.png";

const Blog = () => {
  const M =
    typeof window !== "undefined"
      ? require("materialize-css/dist/js/materialize.min.js")
      : null;
  let authService = new AuthService();
  let blogService = new BlogService();
  let subscriptionService = new SubscriptionService();
  let location = useLocation();
  const [allArticles, setAllArticles] = useState([]);
  const [popular, setPopular] = useState({});
  const [articles, setArticles] = useState(allArticles);
  const [showLoading, setShowLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [filterValue, setFilterValue] = useState("");
  const [totalPages, setTotalPages] = useState([]);
  const [emailSubs, setEmailSubs] = useState("");
  const [errorSubs, setErrorSubs] = useState(false);
  const [succSubs, setSuccSubs] = useState(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
    let tooltipped = document.querySelector(".tooltipped");
    M.Tooltip.init(tooltipped, {});

    // pagination
    let page = location.search
      .split("&")
      .find(
        (param) =>
          param.split("=")[0] == "pagina" || param.split("=")[0] == "?pagina"
      )
      ?.split("=")[1];

    if (page > 0) {
      setPageNumber(page - 1);
    } else {
      page = 1;
    }

    getArticles(page - 1);
  }, []);

  useEffect(() => {
    // pagination
    let page = location.search
      .split("&")
      .find(
        (param) =>
          param.split("=")[0] == "pagina" || param.split("=")[0] == "?pagina"
      )
      ?.split("=")[1];

    if (page > 0) {
      setPageNumber(page - 1);
    } else {
      page = 1;
    }

    if (page - 1 == pageNumber) {
      return;
    }

    return changePage(page - 1);
  }, [location]);

  const filterArticles = () => {
    let words = filterValue.toLowerCase();
    if (words.length > 0) {
      // console.log(words);
    } else {
      setArticles([...allArticles]);
    }
  };

  const changePage = (page) => {
    setShowLoading(true);
    setPageNumber(page);
    getArticles(page);
  };

  const getArticles = (page) => {
    blogService
      .getAll(page * 10)
      .then((res) => {
        console.log(res.data)
        res.data.result?.blogEntries.forEach((article) => {
          let date = new Date(article.date);
          article.frontDate = `${
            months[date.getMonth()]
          } ${date.getDate()} ${date.getFullYear()}`;
        });
        setAllArticles(res.data.result.blogEntries);
        setArticles(res.data.result.blogEntries);

        // setPopular(
        //   res.data.result.blogEntries[10]
        //     ? res.data.result.blogEntries[10]
        //     : res.data.result.blogEntries[0]
        // );
        setTotalPages(new Array(res.data.result.pages).fill(null));
        setShowLoading(false);
      })
      .catch(() => {
        setShowLoading(false);
      });
    blogService
      .getByUrlSlug(
        "como-puedo-prepararme-de-la-mejor-manera-para-el-examen-de-residencia-o-especializaciones-medicas-en-colombia"
      )
      .then((res) => {
        //console.log(res.data.result);
        setPopular(res.data.result);
      })
      .catch((err) => {
        //console.log(err);
        setPopular(res.data.result.blogEntries[0]);
      });
  };

  const renderPages = () => {
    return totalPages.map((item, index) => (
      <li
        key={`page${index}`}
        className={`${pageNumber == index ? "active" : "waves-effect"}`}
      >
        <Link
          to={{
            pathname: "/blog",
            search: `?pagina=${index + 1}`,
          }}
        >
          {index + 1}
        </Link>
      </li>
    ));
  };
  const handleChange = (e) => {
    setEmailSubs(e.target.value);
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailSubs !== "") {
      let data = {
        id: 0,
        email: emailSubs,
      };
      subscriptionService
        .create(data)
        .then((res) => {
          setSuccSubs(1);
        })
        .catch((res) => {
          setSuccSubs(0);
        });
    } else {
      setErrorSubs(true);
    }
  };
  const handleSearch = (e) => {
    var search = e.target.value.toLowerCase();
    var debug = articles.filter((article) =>
      article.title?.toLowerCase().includes(search)
    );
    // console.log(debug);
    if (search == "") {
      setArticles(allArticles);
    } else {
      setArticles(debug);
    }
  };
  return (
    <div className="blog">
      <div className="blog-title">
        <h4>Blog Cursos TOC</h4>
        <SubNavbar
          onSearhInput={(e) => handleSearch(e)}
          onSearhInput2={() => filterArticles()}
        />
      </div>

      <div className="blog-main__background">
        <div className="blog-aside">
          <div className="blog-aside__subs">
            <p>Reciba actualizaciones de Cursos TOC en cu correo</p>
            <form onSubmit={(e) => handleSubscribe(e)}>
              <input
                id="blog-email-subs"
                type="email"
                placeholder="Ingrese su correo"
                onChange={(e) => handleChange(e)}
              />
              <p
                className={
                  errorSubs
                    ? "error"
                    : succSubs == 1
                    ? "success"
                    : succSubs == 0
                    ? "error"
                    : "hideSubs"
                }
              >
                {errorSubs
                  ? "Debe llenar este campo"
                  : succSubs == 1
                  ? "Se ha registrado correctamente"
                  : succSubs == 0
                  ? "Error en la suscripciòn"
                  : "hideSubs"}
              </p>
              <button type="submit">Suscribirse</button>
            </form>
          </div>
          {!showLoading && articles.length !== 0 && (
            <Link to={`/blog/${popular.urlSlug}`} key={0}>
              <div className="blog-aside__popular">
                <h6>Más popular</h6>
                <div className="blog-aside__popular-span"> </div>
                <div className="blog-aside__popular-cont">
                  <img src={popular.cardImage} alt="" />
                  <div className="blog-aside__popular-cont--txt">
                    {/* <span className="category">Categoría</span> */}
                    <p>
                      Por <span> {`\t${popular.author}`}</span> |{" "}
                      {popular.frontDate}{" "}
                    </p>
                    <p>{popular.title}</p>
                  </div>
                </div>
              </div>
            </Link>
          )}
          {/* <div className="blog-aside__categories">
            <h6>Categorías</h6>
            <div className="blog-aside__categories-span"> </div>
            <Link to="/">
              <p>Medicos</p>
            </Link>
            <Link to="/">
              <p>Medicos</p>
            </Link>
            <Link to="/">
              <p>Medicos</p>
            </Link>
            <Link to="/">
              <p>Medicos</p>
            </Link>
          </div> */}
          {!showLoading && articles.length !== 0 && (
            <div className="blog-aside__lastpost">
              <h6>Últimas publicaciones</h6>
              <div className="blog-aside__lastpost-span"> </div>
              {!showLoading &&
                articles.map((article, index) => {
                  if (index < 3) {
                    return (
                      <Link to={`/blog/${article.urlSlug}`} key={index}>
                        <div className="blog-aside__lastpost-card">
                          <img src={article.cardImage} />
                          <span>
                            <h5>{article.title}</h5>
                            <p>{`${article.frontDate}\t`}</p>
                          </span>
                        </div>
                      </Link>
                    );
                  }
                })}
            </div>
          )}
        </div>

        <div className="blog-main">
          {authService.isAdmin() && (
            <Link
              to="/blog/articulo/crear"
              className="btn-floating btn-large right waves-effect waves-light red tooltipped blog-main__add"
              data-position="bottom"
              data-tooltip="Crear artículo"
            >
              <i className="material-icons">create</i>
            </Link>
          )}

          <div className="blog-container">
            {!showLoading &&
              articles.map((article, index) => {
                if (index == 0) {
                  return (
                    <Link to={`/blog/${article.urlSlug}`} key={index}>
                      <div
                        key={index}
                        className="blog-main__firstArticle"
                        itemScope
                        itemType="https://schema.org/blog"
                      >
                        {" "}
                        <img src={article.coverImage} alt="" />
                        <p className="blog-main__firstArticle-author">
                          Por <span> {`\t${popular.author}`}</span> -{" "}
                          {`${article.frontDate}\t`}
                          {/* <span className="category_new">{`Categoría`}</span> */}
                        </p>
                        <h5 itemProp="name">{article.title}</h5>
                        <div className="blog-main__firstArticle-span"> </div>
                        <p itemProp="abstract">
                          {article.description.length > window.innerWidth > 768
                            ? 610
                            : 300
                            ? `${article.description.substring(
                                0,
                                window.innerWidth > 768 ? 600 : 300
                              )}...`
                            : article.description}
                        </p>
                        <button>Leer articulo</button>
                      </div>
                    </Link>
                  );
                } else {
                  return <BlogItem key={index} article={article} />;
                }
              })}
            {!showLoading && articles.length === 0 && (
              <div className="no-results">
                <h3>Ups!... No hay resultados que coincidan con su búsqueda</h3>
                <p>Por favor intente otra búsqueda</p>
                <img src={searchImg} alt="busqueda" />
              </div>
            )}
            {showLoading && (
              <img
                src={LoadingIcon}
                className="blog-container__loading"
                alt=""
              />
            )}
          </div>
          {!showLoading && (
            <ul className="pagination blog-main__pagination">
              <li
                className={`${pageNumber != 0 ? "waves-effect" : "disabled"}`}
              >
                <Link
                  to={{
                    pathname: "/blog",
                    search: `?pagina=${pageNumber == 0 ? "1" : pageNumber}`,
                  }}
                  // onClick={() => pageNumber != 0 && changePage(pageNumber - 1)}
                >
                  <i className="material-icons">chevron_left</i>
                </Link>
              </li>
              {renderPages()}
              <li
                className={`${pageNumber != 1 ? "waves-effect" : "disabled"}`}
              >
                <Link
                  to={{
                    pathname: "/blog",
                    search: `?pagina=${
                      pageNumber == totalPages.length - 1
                        ? totalPages.length
                        : pageNumber + 2
                    }`,
                  }}
                  // onClick={() =>
                  //   pageNumber != totalPages.length - 1 &&
                  //   changePage(pageNumber + 1)
                  // }
                >
                  <i className="material-icons">chevron_right</i>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
