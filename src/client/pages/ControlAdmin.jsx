// import React from "react";
// import { Switch, Route } from "react-router-dom";
// import PrivateRoute from "../utils/PrivateRoute";
// import Blog from "../components/controlAdmin/organisms/Blog/Blog";
// import Article from "../components/controlAdmin/organisms/Article/Article";
// import ArticleEditor from "../components/controlAdmin/organisms/ArticleEditor/ArticleEditor";
// import Groups from "../components/controlAdmin/organisms/Groups/Groups";
// import Group from "../components/controlAdmin/organisms/Group/Group";
// import Student from "../components/controlAdmin/organisms/Student/Student";
// import Students from "../components/controlAdmin/organisms/Students/Students";
// import { Helmet } from "react-helmet";
// import SEOPage from "../common/SEOPage";

// const ControlAdmin = () => {
//   return (
//     <Switch>
//       <PrivateRoute
//         path="/blog/:urlSlug/editar"
//         exact
//         component={ArticleEditor}
//       />
//       <PrivateRoute
//         path="/blog/articulo/crear"
//         exact
//         component={ArticleEditor}
//       />
//       <Route path="/blog/:urlSlug" component={Article} />
//       <Route
//         path="/blog"
//         render={() => (
//           <>
//             <Helmet>
//               <title>{SEOPage.blog.title}</title>
//               <meta name="keywords" content={SEOPage.blog.keywords} />
//               <meta name="description" content={SEOPage.blog.content} />
//               <link rel="canonical" href="https://cursostoc.com/blog/" />
//             </Helmet>
//             <Blog />
//           </>
//         )}
//       />
//       <PrivateRoute path="/grupos/:id/estudiante/:id" component={Student} />
//       <PrivateRoute path="/grupos/:id" component={Group} />
//       <PrivateRoute path="/grupos" component={Groups} />
//       <PrivateRoute path="/estudiantes" component={Students} />
//     </Switch>
//   );
// };

// export default ControlAdmin;
