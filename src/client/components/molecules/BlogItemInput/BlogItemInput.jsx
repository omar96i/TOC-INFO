import React, { useEffect, useContext } from "react";
import "./BlogItemInput.scss";
import Resizer from "react-image-file-resizer";
import ImageService from "../../../../services/ImageService";
import TokenService from "../../../../services/TokeService";
import { LoadingContext } from "../../../../providers/LoadingProvider";
import { ModalContext } from "../../../../providers/ModalProvider";

const BlogItemInput = ({ articleController }) => {
  let imageService = new ImageService();
  let tokenService = new TokenService();
  const { setShowLoading } = useContext(LoadingContext);
  const { openModal, setModalMessage } = useContext(ModalContext);

  useEffect(() => {
    if (articleController.article.description) {
      document.querySelector("#descriptionEditable").textContent =
        articleController.article.description;
    }
  }, []);

  const loadImage = async (cover) => {
    setShowLoading(true);
    if (!cover || (cover.type !== "image/jpeg" && cover.type !== "image/png")) {
      setModalMessage({
        title: "Imagen invalido",
        body:
          "Este formato de archivo no es una imagen valida, asegurate de seleccionar una imagen como JPG o PNG",
        actionName1: "Aceptar",
      });
      openModal();
      return;
    }

    if (
      articleController.article.fileName &&
      articleController.article.fileName !== ""
    ) {
      try {
        await imageService.delete(`${articleController.article.fileName}.jpg`);
      } catch (error) {
        setModalMessage({
          title: "Error al cambiar la imagen",
          body:
            "No se pudo subir la nueva image, por favor intentelo de nuevo.",
          actionName1: "Aceptar",
        });
        openModal();
        setShowLoading(false);
        return;
      }
    }

    Resizer.imageFileResizer(
      cover,
      500,
      500,
      cover.type,
      60,
      0,
      (image64) => {
        const date = new Date();
        const fileName = `${tokenService.getAttribute(
          tokenService.getToken(),
          "https://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
        )}${date.getTime()}`;
        imageService
          .create(fileName, {
            imageString: image64,
          })
          .then((res) => {
            setShowLoading(false);
            articleController.setArticle({
              ...articleController.article,
              image: res.data.result,
              fileName: fileName,
            });
          })
          .catch(() => {
            setModalMessage({
              title: "Error al subir una imagen",
              body:
                "No se pudo subir la nueva image, por favor intentelo de nuevo.",
              actionName1: "Aceptar",
            });
            openModal();
            setShowLoading(false);
          });
      },
      "base64"
    );
  };

  const clearPaste = (pasteEvent) => {
    pasteEvent.preventDefault();
    document.execCommand(
      "insertText",
      false,
      (pasteEvent.originalEvent || pasteEvent).clipboardData.getData(
        "text/plain"
      )
    );
  };

  return (
    <>
      <div className="blog-item-input">
        <div className="blog-item-input__content">
          <h5>{articleController.article.title}</h5>
          <p
            id="descriptionEditable"
            className="blog-item-input__content__paragraph"
            contentEditable="true"
            data-placeholder="Escribir descripción..."
            onInput={(e) =>
              articleController.setArticle({
                ...articleController.article,
                description: e.target.textContent,
              })
            }
            onPaste={(e) => clearPaste(e)}
            suppressContentEditableWarning="true"
          ></p>
          <p className="blog-item-input__content__metadata">
            Por{" "}
            <span className="author">{articleController.article.author}</span> -{" "}
            {articleController.article.frontDate}
          </p>
        </div>
        <label className="blog-item-input__image" htmlFor="cover">
          {!articleController.article.image ? (
            <>
              <i className="material-icons">cloud_upload</i>
              Cargar imagen
            </>
          ) : (
            <img src={articleController.article.image} alt="" />
          )}
        </label>
        <input
          // ref={register()}
          onChange={(e) => loadImage(e.target.files[0])}
          type="file"
          name="cover"
          id="cover"
          accept="image/png, image/jpeg"
        />
      </div>
      <p className="blog-item-input-indicative">
        {articleController.article.description
          ? articleController.article.description.length
          : 0}
        /300 caracteres
      </p>
    </>
  );
};

export default BlogItemInput;
