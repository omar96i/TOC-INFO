import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Main from "../components/organisms/Main/Main";
import Courses from "../components/organisms/Courses/Courses";
import Methodology from "../components/organisms/Methodology/Methodology";
import Questions from "../components/organisms/Questions/Questions";
import Join from "../components/organisms/Join/Join";
import CourseDetail from "../components/organisms/CourseDetail/CourseDetail";
import Payments from "../components/organisms/Payments/Payments";
import PaymentSteps from "../components/organisms/PaymentSteps/PaymentSteps";
import PaymentResult from "../components/organisms/PaymentResult/PaymentResult";
import PaymentGuide from "../components/organisms/PaymentGuide/PaymentGuide";
import TermsConditions from "../components/organisms/TermsConditions/TermsConditions";
import ThankYou from "../components/organisms/ThankYou/ThankYou";
import ThankYouCourses from "../components/organisms/ThankYouCourses/ThankYouCourses";
import InfoUpdate from "../components/organisms/InfoUpdate/InfoUpdate";
import Article from "../components/organisms/Article/Article";
import Blog from "../components/organisms/Blog/Blog";
import { Helmet } from "react-helmet";
import SEOPage from "../common/SEOPage";

const HomePage = ({ history }) => {
  let location = useLocation();
  const obj = { hjid: 2625482, hjsv: 6 };
  return (
    <Switch>
      <Route
        path="/iniciar"
        render={() => (
          <>
            <Helmet>
              <title>{SEOPage.join.title}</title>
              {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
              {/* <script>
                {(function (h, o, t, j, a, r) {
                  h.hj =
                    h.hj ||
                    function () {
                      (h.hj.q = h.hj.q || []).push(arguments);
                    };
                  h._hjSettings = { hjid: 2625482, hjsv: 6 };
                  a = o.getElementsByTagName("head")[0];
                  r = o.createElement("script");
                  r.async = 1;
                  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                  a.appendChild(r);
                })(
                  window,
                  document,
                  "https://static.hotjar.com/c/hotjar-",
                  ".js?sv="
                )}
              </script> */}
              <meta name="keywords" content={SEOPage.join.keywords} />
              <meta name="description" content={SEOPage.join.content} />
              <meta property="og:title" content={SEOPage.join.title} />
              <meta property="og:description" content={SEOPage.join.content} />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://cursostoc.com/iniciar/"
              />
              <meta
                property="og:image"
                content="../src/client/assets/images/logo.jpg"
              />
              <link rel="canonical" href="https://cursostoc.com/iniciar/" />
            </Helmet>
            <Join history={history} />
          </>
        )}
      />
      <Route
        path="/pagos"
        render={() => (
          <>
            <Helmet>
              <title>{SEOPage.payments.title}</title>
              {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
              {/* <script>
                {(function (h, o, t, j, a, r) {
                  h.hj =
                    h.hj ||
                    function () {
                      (h.hj.q = h.hj.q || []).push(arguments);
                    };
                  h._hjSettings = { hjid: 2625482, hjsv: 6 };
                  a = o.getElementsByTagName("head")[0];
                  r = o.createElement("script");
                  r.async = 1;
                  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                  a.appendChild(r);
                })(
                  window,
                  document,
                  "https://static.hotjar.com/c/hotjar-",
                  ".js?sv="
                )}
              </script> */}
              <meta name="keywords" content={SEOPage.payments.keywords} />
              <meta name="description" content={SEOPage.payments.content} />
              <meta
                property="og:description"
                content={SEOPage.payments.content}
              />
              <meta property="og:title" content={SEOPage.payments.title} />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://cursostoc.com/pagos/" />
              <meta
                property="og:image"
                content="../src/client/assets/images/logo.jpg"
              />
              <link rel="canonical" href="https://cursostoc.com/pagos/" />
            </Helmet>
            <Payments history={history} />
          </>
        )}
      />
      <Route
        path="/pago-proceso"
        render={() => {
          return location.state?.amountInCents ? (
            <PaymentSteps />
          ) : (
            <Redirect to="/pagos" />
          );
        }}
      />
      <Route path="/pago-finalizado" component={PaymentResult} />
      <Route path="/pago-guia" component={PaymentGuide} />
      <Route
        path="/cursos"
        exact
        strict
        render={() => (
          <>
            <Helmet>
              <title>{SEOPage.courses.title}</title>
              {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
              {/* <script>
                {(function (h, o, t, j, a, r) {
                  h.hj =
                    h.hj ||
                    function () {
                      (h.hj.q = h.hj.q || []).push(arguments);
                    };
                  h._hjSettings = { hjid: 2625482, hjsv: 6 };
                  a = o.getElementsByTagName("head")[0];
                  r = o.createElement("script");
                  r.async = 1;
                  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                  a.appendChild(r);
                })(
                  window,
                  document,
                  "https://static.hotjar.com/c/hotjar-",
                  ".js?sv="
                )}
              </script> */}
              <meta name="keywords" content={SEOPage.courses.keywords} />
              <meta name="description" content={SEOPage.courses.content} />
              <meta property="og:title" content={SEOPage.courses.title} />
              <meta
                property="og:description"
                content={SEOPage.courses.content}
              />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://cursostoc.com/cursos/" />
              <meta
                property="og:image"
                content="https://cursostoc.com/assets/3a7258987e67ebff51bdecfc94ce75fe.png"
              />
              <link rel="canonical" href="https://cursostoc.com/cursos/" />
            </Helmet>
            <Courses history={history} />
          </>
        )}
      />
      <Route
        path="/cursos/:urlSlug/:urlSlug"
        render={() => {
          return (
            <>
              <Helmet>
                <title>{SEOPage.courses.title}</title>
                {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
                <script>
                  {(function (h, o, t, j, a, r) {
                    h.hj =
                      h.hj ||
                      function () {
                        (h.hj.q = h.hj.q || []).push(arguments);
                      };
                    h._hjSettings = { hjid: 2625482, hjsv: 6 };
                    a = o.getElementsByTagName("head")[0];
                    r = o.createElement("script");
                    r.async = 1;
                    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                    a.appendChild(r);
                  })(
                    window,
                    document,
                    "https://static.hotjar.com/c/hotjar-",
                    ".js?sv="
                  )}
                </script>
                <meta property="og:title" content={SEOPage.courses.title} />
                <meta
                  property="og:description"
                  content="Sabemos que esta es una de las especializaciones más demandadas en Colombia, por eso hemos diseñado un curso complementario para esta área."
                />
                <meta property="og:type" content="website" />
                <meta
                  property="og:image"
                  content="https://cursostoc.com/assets/3a7258987e67ebff51bdecfc94ce75fe.png"
                />
                <meta
                  property="og:url"
                  content={`https://cursostoc.com/cursos/${location.pathname.substring(
                    6
                  )}`}
                />
                <link
                  rel="canonical"
                  href={`https://cursostoc.com/cursos/${location.pathname.substring(
                    6
                  )}`}
                />
              </Helmet>
              <CourseDetail />
            </>
          );
        }}
      />
      <Route
        path="/metodologia"
        render={() => (
          <>
            <Helmet>
              <title>{SEOPage.methodology.title}</title>
              {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
              {/* <script>
                {(function (h, o, t, j, a, r) {
                  h.hj =
                    h.hj ||
                    function () {
                      (h.hj.q = h.hj.q || []).push(arguments);
                    };
                  h._hjSettings = { hjid: 2625482, hjsv: 6 };
                  a = o.getElementsByTagName("head")[0];
                  r = o.createElement("script");
                  r.async = 1;
                  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                  a.appendChild(r);
                })(
                  window,
                  document,
                  "https://static.hotjar.com/c/hotjar-",
                  ".js?sv="
                )}
              </script> */}
              <meta name="keywords" content={SEOPage.methodology.keywords} />
              <meta name="description" content={SEOPage.methodology.content} />
              <link rel="canonical" href="https://cursostoc.com/metodologia/" />
              <meta property="og:title" content={SEOPage.methodology.title} />
              <meta
                property="og:description"
                content={SEOPage.methodology.content}
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://cursostoc.com/metodologia/"
              />
              <meta
                property="og:image"
                content="https://cursostoc.com/assets/2afc3df50feea7ac072dbf5aeb627632.png"
              />
            </Helmet>
            <Methodology />
          </>
        )}
      />
      <Route
        path="/preguntas"
        render={() => (
          <>
            <Helmet>
              <title>{SEOPage.questions.title}</title>
              {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
              {/* <script>
                {(function (h, o, t, j, a, r) {
                  h.hj =
                    h.hj ||
                    function () {
                      (h.hj.q = h.hj.q || []).push(arguments);
                    };
                  h._hjSettings = { hjid: 2625482, hjsv: 6 };
                  a = o.getElementsByTagName("head")[0];
                  r = o.createElement("script");
                  r.async = 1;
                  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                  a.appendChild(r);
                })(
                  window,
                  document,
                  "https://static.hotjar.com/c/hotjar-",
                  ".js?sv="
                )}
              </script> */}
              <meta name="keywords" content={SEOPage.questions.keywords} />
              <meta name="description" content={SEOPage.questions.content} />
              <link rel="canonical" href="https://cursostoc.com/preguntas/" />
              <meta property="og:title" content={SEOPage.questions.title} />
              <meta
                property="og:description"
                content={SEOPage.questions.content}
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://cursostoc.com/metodologia/"
              />
              <meta
                property="og:image"
                content="../src/client/assets/images/logo.jpg"
              />
            </Helmet>
            <Questions />
          </>
        )}
      />
      <Route path="/terminos" component={TermsConditions} />
      <Route path="/actualizame" component={InfoUpdate} />
      <Route
        path="/gracias"
        render={() => (
          <>
            <Helmet>
              <title>{SEOPage.main.title}</title>
              {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
              <meta name="keywords" content={SEOPage.main.keywords} />
              <meta name="description" content={SEOPage.main.content} />
              <link rel="canonical" href="https://cursostoc.com/metodologia/" />
              <meta property="og:title" content={SEOPage.main.title} />
              <meta
                property="og:description"
                content={SEOPage.main.content}
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://cursostoc.com/gracias/"
              />
              <meta
                property="og:image"
                content="https://cursostoc.com/assets/2afc3df50feea7ac072dbf5aeb627632.png"
              />
            </Helmet>
            <ThankYou />
          </>
        )}
      />
      <Route
        path="/gracias-:urlslug"
        render={() => (
          <>
            <Helmet>
              <title>{SEOPage.main.title}</title>
              {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
              <meta name="keywords" content={SEOPage.main.keywords} />
              <meta name="description" content={SEOPage.main.content} />
              <link rel="canonical" href="https://cursostoc.com/metodologia/" />
             
            </Helmet>
            <ThankYouCourses />
          </>
        )}
      />
      {/* <Route
        path="/gracias-:urlslug"
        render={() => {
          return <ThankYouCourses />;
        }}
      /> */}
      <Route
        path="/errormatricula-curso"
        render={() => {
          return <ThankYouCourses error={1} />;
        }}
      />
      <Route
        path="/errormatricula"
        render={() => {
          return <ThankYou error={1} />;
        }}
      />
      <Route
        path="/dobleregistro"
        render={() => {
          return <ThankYou error={0} />;
        }}
      />
      <Route
        path="/dobleregistro-curso"
        render={() => {
          return <ThankYouCourses error={0} />;
        }}
      />
      <Route
        path="/"
        exact
        render={() => (
          <>
            <Helmet>
              <title>{SEOPage.main.title}</title>
              {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
              {/* <script>
                {(function (h, o, t, j, a, r) {
                  h.hj =
                    h.hj ||
                    function () {
                      (h.hj.q = h.hj.q || []).push(arguments);
                    };
                  h._hjSettings = { hjid: 2625482, hjsv: 6 };
                  a = o.getElementsByTagName("head")[0];
                  r = o.createElement("script");
                  r.async = 1;
                  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                  a.appendChild(r);
                })(
                  window,
                  document,
                  "https://static.hotjar.com/c/hotjar-",
                  ".js?sv="
                )}
              </script> */}
              <meta name="keywords" content={SEOPage.main.keywords} />
              <meta name="description" content={SEOPage.main.content} />

              <link rel="canonical" href="https://cursostoc.com/" />
              <meta property="og:title" content={SEOPage.main.title} />
              <meta property="og:description" content={SEOPage.main.content} />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://cursostoc.com/" />
              <meta
                property="og:image"
                content="../src/client/assets/images/logo.jpg"
              />
            </Helmet>
            <Main />
          </>
        )}
      />
      <Route
        path="/blog/:urlSlug"
        render={() => {
          return (
            <>
              <Helmet>
                <title>{SEOPage.blog.title}</title>
                {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
                <script>
                  {(function (h, o, t, j, a, r) {
                    h.hj =
                      h.hj ||
                      function () {
                        (h.hj.q = h.hj.q || []).push(arguments);
                      };
                    h._hjSettings = { hjid: 2625482, hjsv: 6 };
                    a = o.getElementsByTagName("head")[0];
                    r = o.createElement("script");
                    r.async = 1;
                    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                    a.appendChild(r);
                  })(
                    window,
                    document,
                    "https://static.hotjar.com/c/hotjar-",
                    ".js?sv="
                  )}
                </script>
                <meta property="og:title" content={SEOPage.blog.title} />
                <meta
                  property="og:description"
                  content={SEOPage.blog.content}
                />
                <meta property="og:type" content="website" />
                <meta
                  property="og:image"
                  content="../src/client/assets/images/logo.jpg"
                />
                <meta
                  property="og:url"
                  content={`https://cursostoc.com/blog/${
                    // location.pathname.split("/")[2]
                    location.pathname.substring(6)
                  }`}
                />
                <link
                  rel="canonical"
                  href={`https://cursostoc.com/blog/${
                    // location.pathname.split("/")[2]
                    location.pathname.substring(6)
                  }`}
                />
              </Helmet>
              <Article />
            </>
          );
        }}
      />
      <Route
        path="/blog"
        render={() => (
          <>
            <Helmet>
              <title>{SEOPage.blog.title}</title>
              {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
              {/* <script>
                {(function (h, o, t, j, a, r) {
                  h.hj =
                    h.hj ||
                    function () {
                      (h.hj.q = h.hj.q || []).push(arguments);
                    };
                  h._hjSettings = { hjid: 2625482, hjsv: 6 };
                  a = o.getElementsByTagName("head")[0];
                  r = o.createElement("script");
                  r.async = 1;
                  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                  a.appendChild(r);
                })(
                  window,
                  document,
                  "https://static.hotjar.com/c/hotjar-",
                  ".js?sv="
                )}
              </script> */}
              <meta name="keywords" content={SEOPage.blog.keywords} />
              <meta name="description" content={SEOPage.blog.content} />
              <link rel="canonical" href="https://cursostoc.com/blog/" />
              <meta
                property="og:image"
                content="../src/client/assets/images/logo.jpg"
              />
              <meta property="og:title" content={SEOPage.blog.title} />
              <meta property="og:description" content={SEOPage.blog.content} />
              <meta property="og:type" content="website" />
            </Helmet>
            <Blog />
          </>
        )}
      />
      <Route
        path="/contacto"
        render={() => (
          <>
            <Helmet>
              <title>{SEOPage.contact.title}</title>
              {/* <script>
                {(function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src =
                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-P42CFVZ")}
              </script> */}
              {/* <script>
                {(function (h, o, t, j, a, r) {
                  h.hj =
                    h.hj ||
                    function () {
                      (h.hj.q = h.hj.q || []).push(arguments);
                    };
                  h._hjSettings = { hjid: 2625482, hjsv: 6 };
                  a = o.getElementsByTagName("head")[0];
                  r = o.createElement("script");
                  r.async = 1;
                  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                  a.appendChild(r);
                })(
                  window,
                  document,
                  "https://static.hotjar.com/c/hotjar-",
                  ".js?sv="
                )}
              </script> */} 
              <meta name="keywords" content={SEOPage.contact.keywords} />
              <meta name="description" content={SEOPage.contact.content} />
              <link rel="canonical" href="https://cursostoc.com/contacto/" />
              <meta property="og:title" content={SEOPage.contact.title} />
              <meta
                property="og:description"
                content={SEOPage.contact.content}
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:image"
                content="../src/client/assets/images/logo.jpg"
              />
            </Helmet>
            <Main />
          </>
        )}
      />

      <Redirect from="*" to="/404" />
    </Switch>
  );
};

export default HomePage;
