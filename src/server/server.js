import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from "helmet";
import React from "react";
import Routes from "../client/utils/Routes";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import getManifest from "./getManifest";

dotenv.config();
const { ENV, PORT } = process.env;
const app = express();
const hsts = require("hsts");
const sts = require('strict-transport-security');

  app.use(
    helmet.hsts({
      maxAge: 31536000,
      includeSubDomains: true
    })
  );
  // app.use(
  //   helmet.contentSecurityPolicy({
  //     directives: {
  //       defaultSrc: ["'self'"],
  //       scriptSrc: ["'self'", "example.com"],
  //       objectSrc: ["'none'"],
  //       upgradeInsecureRequests: [],
  //     },
  //   })
  // );
  app.use(
    helmet.referrerPolicy({
      policy: "no-referrer",
    })
  );
  app.use(helmet.noSniff());
  app.use(
    helmet.frameguard({
      action: "sameorigin",
    })
  );
if (ENV === "development") {
  console.log("Development config");
  const webpackConfig = require("../../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    port: PORT,
    hot: true,
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable("x-powered-by");
}

const setResponse = (html, manifest) => {
  const mainStyles = manifest ? manifest["main.css"] : "assets/app.css";
  const mainBuild = manifest ? manifest["main.js"] : "assets/app.js";

  return `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <link rel="icon" href="./favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
           
          <meta
            name="description"
            content="El objetivo es claro: pasar el examen de residencia o especialización médica. Prueba gratis una semana con nosotros"
          />
          <script src="https://www.googleoptimize.com/optimize.js?id=OPT-5RTXPGD"></script>
          <script type="text/javascript" src="https://checkout.wompi.co/widget.js"></script>
          <!-- Google Tag Manager -->
          
          
          <!-- End Google Tag Manager -->
          <link rel="apple-touch-icon" href="logo192.png" />
          <!--
            manifest.json provides metadata used when your web app is installed on a
            user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
          -->
          <link rel="manifest" href="manifest.json" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="${mainStyles}"
            rel="stylesheet"
          />
          <link rel="canonical" href="https://cursostoc.com/">
          <!--
            Notice the use of %PUBLIC_URL% in the tags above.
            It will be replaced with the URL of the 'public' folder during the build.
            Only files inside the 'public' folder can be referenced from the HTML.

            Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
            work correctly both with client-side routing and a non-root public URL.
            Learn how to configure a non-root public URL by running 'npm run build'.
          -->
          <title>Cursos TOC. El objetivo es claro</title>
        </head>
        <body>
          <!-- Google Tag Manager (noscript) -->
          <noscript
            ><iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-P42CFVZ"
              height="0"
              title="promotional-video"
              width="0"
              style="display: none; visibility: hidden;"
            ></iframe
          ></noscript>
          <!-- End Google Tag Manager (noscript) -->
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root" itemScope itemType="https://schema.org/WebSite">          
            <div>
              <div class="navbar-fixed">
                <nav class="navbar">
                  <div class="nav-wrapper">                      
                      <a itemProp="url" href="https://cursostoc.com/" class="sidenav-trigger">
                        <img src="../src/client/assets/images/logo.jpg" itemProp="logo" class="logo" alt="logo Cursos TOC" />
                        <h1><span itemProp="name">Cursos TOC</span></h1>
                      </a>
                    <div class="nav-wrapper__content">
                      <ul class="left hide-on-med-and-down" itemScope itemType="https://schema.org/SiteNavigationElement">
                        <li itemProp="name"><a itemProp="url" href="https://cursostoc.com/cursos" title="Cursos">Cursos</a></li>
                        <li itemProp="name"><a itemProp="url" href="https://cursostoc.com/metodologia" title="Metodología">Metodología</a></li>
                        <li itemProp="name"><a itemProp="url" href="https://cursostoc.com/preguntas" title="Preguntas">Preguntas Frecuentes</a></li>
                        <li itemProp="name"><a itemProp="url" href="https://cursostoc.com/blog?pagina=1" title="Blog">Blog</a></li>
                        <li itemProp="name"><a itemProp="url" href="https://cursostoc.com/pagos" title="PAGOS">PAGOS</a></li>
                        <li itemProp="name"><a itemProp="url" href="https://cursostoc.com/iniciar" title="INICIAR">INICIAR MI CURSO</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>              
            </div>
          </div>
          <main style="display: none;">
      <div className="banner">
        <div className="banner__text">
          <h3>
            <div className="text__square">
              Una buena <br />
              técnica <br />
            </div>
            <span className="text__middle">
              de estudio, <br />
              te va a permitir <br />
            </span>
            <span className="text__large">
              ahorrar <br />
              mucho <br />
              tiempo.
            </span>
          </h3>
        </div>
        <div className="banner__img"></div>
      </div>
      <hr />
    </main>
    <footer style="display: none;">
      <div>
        <div><span>Click para probar</span> <br />5 días gratis</div>
        <span>¿Tienes dudas?</span> <br />
            Aquí las respondemos
        <div className="contact" itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Cursos TOC</span>
          <p className="contact__title">Contáctanos</p>
          <p itemProp="email">
            contacto@cursostoc.com
          </p>
          <p itemProp="telephone">
           +57 321 6677865
          </p>
        </div>
      </div>
      <hr />
      <div className="second-footer">
        <p>
          Todos los derechos reservados. |{" "}
          <a itemProp="url" href="https://cursostoc.com/terminos">Términos y Condiciones</a>
        </p>
        <div>
          <a
            href="https://www.facebook.com/cursostoc"
            target="__blank"
            rel="noopener"
            itemProp="sameAs"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/cursostoc/"
            target="__blank"
            rel="noopener"
            itemProp="sameAs"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/channel/UCzkvAkpE-WTPKqiJRNVJD2g"
            target="__blank"
            rel="noopener"
            itemProp="sameAs"
          >
          </a>
        </div>
      </div>
    </footer>
        
          <script src="${mainBuild}" type="text/javascript"></script>
          <script type="application/ld+json">
{
  "@context" : "https://schema.org",
  "@type" : "Organization",
  "name" : "Cursos TOC",
  "url" : "https://cursostoc.com/",
  "sameAs" : [
    "https://www.facebook.com/cursostoc",
    "https://www.instagram.com/cursostoc/",
    "https://www.youtube.com/channel/UCzkvAkpE-WTPKqiJRNVJD2g"
  ]
}
</script>
        </body>
      </html>
    `;
};

const renderApp = (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Routes />
    </StaticRouter>
  );

  res.send(setResponse(html, req.hashManifest));
};

app.get("*", (req, res) => renderApp(req, res));

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT}`);
});
