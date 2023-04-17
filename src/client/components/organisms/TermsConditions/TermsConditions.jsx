import React, { useEffect } from "react";
import "./TermsConditions.scss";
import CustomHr from "../../atoms/CustomHr/CustomHr";
const M =
  typeof window !== "undefined"
    ? require("materialize-css/dist/js/materialize.min.js")
    : null;
const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  }, []);

  return (
    <div className="terms-conditions">
      <div className="terms-conditions__content">
        <div>
          <h1>Políticas de privacidad, contrato, términos y condiciones</h1>
          <div></div>
        </div>
        <ul className="collapsible popout">
          <li>
            <div className="collapsible-header">
              <h3>Políticas de privacidad</h3>
              <div></div>
            </div>
            <div className="collapsible-body">
              <span>
                La presente Política de Privacidad establece los términos en que
                Cursos TOC usa y protege la información que es proporcionada por
                sus usuarios al momento de utilizar su sitio web. Esta compañía
                está comprometida con la seguridad de los datos de sus usuarios.{" "}
                <br />
                <br />
                Cuando le pedimos llenar los campos de información personal con
                la cual usted pueda ser identificado, lo hacemos asegurando que
                sólo se empleará de acuerdo con los términos de este documento.
                Sin embargo esta Política de Privacidad puede cambiar con el
                tiempo o ser actualizada por lo que le recomendamos y
                enfatizamos revisar continuamente esta página para asegurarse
                que está de acuerdo con dichos cambios.{" "}
              </span>
              <span>
                <h2 className="highlighter">Información que es recogida</h2>{" "}
                <div></div>
                Nuestro sitio web podrá recoger información personal por
                ejemplo: Nombre, información de contacto como su dirección de
                correo electrónica e información demográfica. Así mismo cuando
                sea necesario podrá ser requerida información específica para
                procesar algún pedido o realizar una entrega o facturación.{" "}
              </span>
              <span>
                <h2 className="highlighter">Uso de la información recogida</h2>{" "}
                <div></div>
                Nuestro sitio web emplea la información con el fin de
                proporcionar el mejor servicio posible, particularmente para
                mantener un registro de usuarios, de pedidos en caso que
                aplique, y mejorar nuestros productos y servicios. Es posible
                que sean enviados correos electrónicos periódicamente a través
                de nuestro sitio con ofertas especiales, nuevos productos y otra
                información publicitaria que consideremos relevante para usted o
                que pueda brindarle algún beneficio, estos correos electrónicos
                serán enviados a la dirección que usted proporcione y podrán ser
                cancelados en cualquier momento.Cursos TOC está altamente
                comprometido para cumplir con el compromiso de mantener su
                información segura. Usamos los sistemas más avanzados y los
                actualizamos constantemente para asegurarnos que no exista
                ningún acceso no authorizado.{" "}
              </span>
              <span>
                <h2 className="highlighter">Cookies</h2>
                <div></div>
                Una cookie se refiere a un fichero que es enviado con la
                finalidad de solicitar permiso para almacenarse en su ordenador,
                al aceptar dicho fichero se crea y la cookie sirve entonces para
                tener información respecto al tráfico web, y también facilita
                las futuras visitas a una web recurrente. Otra función que
                tienen las cookies es que con ellas las web pueden reconocerte
                individualmente y por tanto brindarte el mejor servicio
                personalizado de su web.
              </span>
              <span>
                Nuestro sitio web emplea las cookies para poder identificar las
                páginas que son visitadas y su frecuencia. Esta información es
                empleada únicamente para análisis estadístico y después la
                información se elimina de forma permanente. Usted puede eliminar
                las cookies en cualquier momento desde su ordenador. Sin embargo
                las cookies ayudan a proporcionar un mejor servicio de los
                sitios web, estás no dan acceso a información de su ordenador ni
                de usted, a menos de que usted así lo quiera y la proporcione
                directamente, visitas a una web . Usted puede aceptar o negar el
                uso de cookies, sin embargo la mayoría de navegadores aceptan
                cookies automáticamente pues sirve para tener un mejor servicio
                web. También usted puede cambiar la configuración de su
                ordenador para declinar las cookies. Si se declinan es posible
                que no pueda utilizar algunos de nuestros servicios.
              </span>
              <span>
                <h2 className="highlighter">Enlaces a Terceros</h2>
                <div></div>
                Este sitio web pudiera contener en laces a otros sitios que
                pudieran ser de su interés. Una vez que usted de clic en estos
                enlaces y abandone nuestra página, ya no tenemos control sobre
                al sitio al que es redirigido y por lo tanto no somos
                responsables de los términos o privacidad ni de la protección de
                sus datos en esos otros sitios terceros. Dichos sitios están
                sujetos a sus propias políticas de privacidad por lo cual es
                recomendable que los consulte para confirmar que usted está de
                acuerdo con estas.
              </span>
              <span>
                <h2 className="highlighter">
                  Control de su información personal
                </h2>{" "}
                <div></div>
                En cualquier momento usted puede restringir la recopilación o el
                uso de la información personal que es proporcionada a nuestro
                sitio web. Cada vez que se le solicite rellenar un formulario,
                como el de alta de usuario, puede marcar o desmarcar la opción
                de recibir información por correo electrónico.  En caso de que
                haya marcado la opción de recibir nuestro boletín o publicidad
                usted puede cancelarla en cualquier momento.Esta compañía no
                venderá, cederá ni distribuirá la información personal que es
                recopilada sin su consentimiento, salvo que sea requerido por un
                juez con un orden judicial.Cursos TOC Se reserva el derecho de
                cambiar los términos de la presente Política de Privacidad en
                cualquier momento.
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h3>Contrato</h3>
              <div></div>
            </div>
            <div className="collapsible-body">
              <span>
                <h2 className="highlighter">
                  CONTRATO PRESTACIÓN DE SERVICIOS
                </h2>{" "}
                <div></div>
                Entre los suscritos: Por una parte; NATALIA BOHÓRQUEZ BEDOYA,
                Colombiana, ciudadano en ejercicio, identificada con cédula de
                ciudadanía Nº 108823965, quien en adelante se denominará EL
                CONTRATISTA o TOC EDUCATION. Por otra parte;
                _________________________________________, identificada(o) con
                CC/Nit. Nº_______________________________, quien en adelante se
                denominará EL CONTRATANTE; se comprometen a celebrar y dar
                cumplimiento al siguiente contrato de prestación de servicios y
                de uso adecuado del material compartido: TOC EDUCATION brinda un
                servicio que permite a nuestros miembros acceder material
                educativo para la formación en el área de la salud y la
                medicina. Los presentes acuerdos de uso rigen la utilización que
                haga de nuestro servicio. Según se utilicen en el presente
                clausulado de uso, las frases “el servicio de TOC EDUCATION”,
                “nuestro servicio” o “el servicio” se refieren al servicio
                personalizado brindado por TOC EDUCATION para descubrir y ver
                contenido de TOC EDUCATION, incluidas todas las características
                y funcionalidades, recomendaciones y críticas, el sitio web y/o
                medio de captación, además de todo el contenido y software
                asociado a nuestro servicio.
              </span>
              <span>
                <h2 className="highlighter">CLÁUSULAS</h2> <div></div>
                PRIMERA. DECLARACIONES DEL USUARIO:
                <ol>
                  <li>
                    Que ha recibido información clara, completa y veraz sobre
                    los requisitos para el ingreso a la educación para formación
                    en servicios de salud y medicina.{" "}
                  </li>
                  <li>
                    Que la información suministrada por el USUARIO y exigida por
                    los Reglamentos para suscribir este contrato, es veraz.
                  </li>
                  <li>
                    Que habiendo realizado el proceso establecido por la TOC
                    EDUCATION, ha escogido los núcleos tal como consta en la
                    Asesoría y Registro que se anexa y que hace parte de este
                    Contrato. Que por tanto, acepta dichas condiciones, sin
                    perjuicio de las facultades que le otorga el Reglamento.
                  </li>
                  <li>
                    Que conoce, acepta y se somete al Pensum, a los Reglamentos,
                    Normas Institucionales, Modalidad, Horarios y a las
                    modificaciones que de ellos efectúe TOC EDUCATION.
                  </li>
                  <li>
                    Que se compromete a mantener un rendimiento académico
                    suficiente y a cumplir las obligaciones inherentes a su
                    calidad de USUARIO y los deberes establecidos en los
                    Estatutos, Reglamento Académico, Manual de Convivencia y en
                    las demás Normas Universitarias, las cuales hacen parte
                    integrante del presente contrato.
                  </li>
                  <li>
                    Que declara conocer los derechos que le otorga la ley 1581
                    de 2012, tales como conocer, actualizar, rectificar y
                    eliminar sus datos personales los cuales reposan en las
                    bases de datos de la institución y, en ese sentido, autoriza
                    a TOC EDUCATION para que sus datos personales sean
                    almacenados en la base de datos alojada en los servidores de
                    la Institución, custodiada mediante el empleo de
                    herramientas de seguridad. El USUARIO autoriza a que la
                    información obtenida sea usada por TOC EDUCATION para tener
                    un contacto directo con él y para enviarle información
                    general, programación de eventos, facturación y
                    actualizaciones de datos, entre otras actividades.
                  </li>
                  <li>
                    Que se obliga a mantener su información personal
                    actualizada, suministrando dicha información una vez sea
                    requerida por TOC EDUCATION, obligándose a suministrar una
                    información completa y veraz.
                  </li>
                  <li>
                    Que con la suscripción de este contrato el USUARIO autoriza
                    de forma expresa la realización de grabaciones de voz e
                    imagen en todo tipo de pruebas evaluativas realizadas en el
                    desarrollo del programa en el cual se inscribe o actividades
                    extras realizadas por la Institución.
                  </li>
                </ol>
                SEGUNDA: TOC EDUCATION se compromete a señalarle al USUARIO los
                medios para que éste, pueda alcanzar una formación integral en
                el programa para el que se matricula.
                <br />
                TERCERA: Los derechos de matrícula liquidados, son aceptados por
                el USUARIO y se causan íntegros desde la suscripción de este
                contrato. En consecuencia, el USUARIO se compromete a pagar los
                derechos académicos que le fueron asignados en su asesoría de
                matrícula.
                <br />
                PARÁGRAFO: La interrupción de estudios por decisión del USUARIO,
                una vez realizada la asesoría, no le exonera del pago total del
                valor liquidado.
                <br />
                CUARTA: El USUARIO tiene derecho y el deber a que se le respete
                y a respetar la propiedad intelectual de los trabajos, estudios
                y otras realizaciones, de acuerdo con los parámetros estipulados
                para el efecto en TOC EDUCATION. El material educativo y
                literario (propiedad intelectual) compartido al usuario por TOC
                EDUCATION solo le pertenece a TOC EDUCATION.
                <br />
                QUINTA: Este Contrato de Matrícula tiene vigencia hasta la
                terminación de estudios, renovándose automáticamente con la
                asesoría y registro en cada período.
                <br />
                PARÁGRAFO: Se implementarán al contrato los siguientes:
                <ol>
                  <li>
                    Su membresía de TOC EDUCATION continuará hasta que la
                    cancele. Para usar el servicio de TOC EDUCATION, debe tener
                    acceso a internet, en caso de solicitarlo presencial podrá
                    hacerlo siempre y cuando TOC EDUCATION pueda hacerlo; el
                    USUARIO debe proporcionar una o más Formas de pago. “Forma
                    de pago” significa una forma de pago actual, válida y
                    aceptada.{" "}
                  </li>
                  <li>
                    Debe tener, al menos, 18 años de edad, o la mayoría de edad
                    en su región, territorio o país, para ser miembro del
                    servicio de TOC EDUCATION. Los menores solamente pueden usar
                    el servicio bajo la supervisión de un adulto.
                  </li>
                  <li>
                    El servicio de TOC EDUCATION y todo el contenido visto en él
                    son solo para uso personal, no comercial, y no debe
                    compartirse con personas que no sean miembros de su hogar.
                    Durante la membresía de TOC EDUCATION, le otorgamos un
                    derecho limitado, no exclusivo e intransferible para acceder
                    al servicio de TOC EDUCATION con el propósito de ver
                    contenido de TOC EDUCATION. Más allá de esto, no se le
                    transferirá ningún otro derecho, título o interés. Usted
                    acepta que no usará el servicio para presentaciones
                    públicas.
                  </li>
                  <li>
                    TOC EDUCATION actualiza el servicio continuamente, incluido
                    su catálogo de contenido. Además, probamos regularmente
                    varios aspectos de nuestro servicio, tales como nuestro
                    sitio web, las interfaces de usuario, las funciones
                    promocionales y la disponibilidad de contenido de TOC
                    EDUCATION.{" "}
                  </li>
                  <li>
                    Parte del contenido de TOC EDUCATION está disponible para
                    descarga temporal y visualización offline en ciertos
                    dispositivos compatibles. Se aplican restricciones,
                    incluidas las restricciones a la cantidad de Títulos offline
                    por cada cuenta, la cantidad máxima de dispositivos que
                    pueden contener Títulos offline, el período en el cual
                    deberá comenzar a ver los Títulos offline y cuánto tiempo
                    permanecerán accesibles los Títulos offline.{" "}
                  </li>
                  <li>
                    Acepta usar el servicio de TOC EDUCATION, incluidas todas
                    las características y funcionalidades asociadas con éste,
                    bajo conformidad con todas las leyes, normas y
                    reglamentaciones vigentes, o cualquier otra restricción al
                    uso del servicio o sus contenidos. Usted acepta no archivar,
                    reproducir, distribuir, modificar, mostrar, ejecutar,
                    publicar, otorgar licencias, crear obras derivadas basadas
                    en el servicio, u ofrecer en venta, o usar (a excepción de
                    que se autorice explícitamente en estos Términos de uso)
                    contenido e información contenida en u obtenida a través del
                    servicio de TOC EDUCATION. Usted también acepta: no evitar,
                    eliminar, alterar, desactivar, interferir con o burlar las
                    protecciones de contenido del servicio de TOC EDUCATION; no
                    usar ningún robot, spider, scraper u otra forma automatizada
                    para acceder al servicio de TOC EDUCATION; ni descompilar,
                    realizar ingeniería inversa, desarmar el software u otro
                    producto o proceso a los que se acceda a través del servicio
                    de TOC EDUCATION; no introducir de alguna manera un código o
                    producto o manipular el contenido del servicio de TOC
                    EDUCATION; ni usar método alguno de análisis, extracción u
                    obtención de datos. Asimismo, se compromete a no subir,
                    publicar, enviar por email ni transmitir de cualquier otra
                    forma ningún material diseñado para interrumpir, destruir o
                    limitar la funcionalidad del software de computación,
                    hardware o equipos de telecomunicaciones asociados con el
                    servicio de TOC EDUCATION, incluido material que contenga
                    virus de software o cualquier otro código, archivos o
                    programas. Podríamos terminar o restringir su uso de nuestro
                    servicio si usted viola cualquiera de los Términos de uso o
                    usa el servicio de forma ilegal o fraudulenta.
                  </li>
                </ol>
                SEXTA: EXCLUSIÓN DE GARANTÍAS Y LIMITACIONES A LA
                RESPONSABILIDAD: El servicio de TOC EDUCATION se ofrece “tal
                cual”, sin garantía ni condición. En particular, nuestro
                servicio no se declara sin interrupciones ni sin errores. Usted
                renuncia a todos los daños especiales, indirectos y consecuentes
                contra nosotros. Estos términos no limitarán las garantías no
                renunciables ni los derechos de protección al consumidor a los
                que usted tenga derecho bajo las leyes imperativas de Colombia.
                <br />
                SÉPTIMA: RENUNCIA A LA ACCIÓN COLECTIVA: EN LA MEDIDA EN QUE LAS
                LEYES APLICABLES LO PERMITAN, USTED Y TOC EDUCATION ACUERDAN QUE
                CADA UNO PUEDE PRESENTAR RECLAMOS CONTRA LA OTRA PARTE SOLO EN
                NOMBRE PROPIO, Y NO COMO ACTORA O PARTE DE UN GRUPO EN UNA
                ACCIÓN COLECTIVA O REPRESENTATIVA. Además, si la ley aplicable
                lo permite, a menos que tanto usted como TOC EDUCATION acuerden
                lo contrario, el tribunal no podrá acumular las causas de más de
                una persona con su causa o, de lo contrario, no podrá presidir
                ninguna acción representativa o colectiva.
                <br />
                OCTAVA: MATERIAL NO SOLICITADO: TOC EDUCATION no acepta
                materiales ni ideas no solicitados para su contenido, y no es
                responsable por la similitud entre los contenidos o la
                programación de cualquier medio con los materiales o ideas
                transmitidos a TOC EDUCATION.
                <br />
                NOVENA: SERVICIO AL CLIENTE: Si necesita obtener más información
                sobre nuestro servicio y sus funciones, o si necesita asistencia
                con su cuenta, visite el Centro de ayuda de TOC EDUCATION en
                nuestro sitio web. En algunos casos, el Servicio al cliente
                podrá ayudarlo mejor utilizando una herramienta de asistencia de
                acceso remoto con el que se accede completamente a su
                computadora. Si no desea que tengamos este acceso, usted no
                debería autorizar la asistencia a través de la herramienta de
                acceso remoto y nosotros le ayudaremos de otra forma. En el caso
                en que haya un conflicto entre estos Términos de uso y la
                información proporcionada por el Servicio al Cliente u otras
                secciones de nuestro sitio web, estos Términos de uso dirimirán
                cualquier diferencia.
                <br />
                DÉCIMA: CONTINUACIÓN DE VIGENCIA: Si alguna de las disposiciones
                de estos Términos de uso es declarada nula, ilegal o
                inaplicable, la validez, legalidad y aplicación de las restantes
                disposiciones continuarán en plena vigencia.
                <br />
                DÉCIMA PRIMERA: CAMBIOS EN LOS TÉRMINOS DE USO Y CESIÓN: TOC
                EDUCATION puede cambiar estos Términos de uso cuando sea
                necesario. Le informaremos con al menos 30 días de anticipación
                si estos cambios se aplican a usted. Podemos ceder o transferir
                nuestro acuerdo con usted, incluidos nuestros derechos asociados
                y nuestras obligaciones en cualquier momento y usted acepta
                cooperar con nosotros en relación con dicha cesión o
                transferencia.
                <br />
                DÉCIMA SEGUNDA: COMUNICACIONES ELECTRÓNICAS: Le enviaremos la
                información relativa a su cuenta (por ejemplo, las
                autorizaciones de pago, las facturas, los cambios de contraseña
                o de la forma de pago, los mensajes de confirmación, los avisos)
                de manera electrónica únicamente, por ejemplo, mediante emails a
                la dirección de email proporcionada durante el registro.
                <br />
                DÉCIMA TERCERA. PERFECCIONAMIENTO Y EJECUCIÓN. El presente
                contrato se perfecciona con la suscripción del mismo por parte
                de las partes en señal de su consentimiento y aceptación. Sus
                efectos están vigentes desde la fecha de su inicio hasta su
                terminación, conforme a las condiciones aquí pactadas.
              </span>
              <span>
                <div></div>
                En señal de conformidad se suscribe en dos (2) originales del
                mismo valor, tenor y efecto probatorio el presente Contrato, en
                la ciudad de Dosquebradas, Departamento de Risaralda, a los
                ___________________________________ (_____) días del mes de
                ____________________ de 202____.
              </span>
               


            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h3>Términos y condiciones</h3>
              <div></div>
            </div>
            <div className="collapsible-body">
              <span>
                <h2 className="highlighter">Relación contractual</h2>{" "}
                <div></div>
                Las presentes Condiciones de uso, regulan el acceso o uso que
                usted como usuario realice, como persona, desde cualquier parte
                de Colombia y sus países vecinos (Venezuela, Perú, Ecuador,
                Brasil y Panamá) de aplicaciones, páginas web, contenido,
                productos y servicios, puestos a disposición por NATALIA
                BOHORQUEZ BEDOYA, Colombiana, ciudadano en ejercicio,
                identificado con cedula de ciudadanía Nº 1088239685, en adelante
                reconocida por las partes como “TOC EDUCATION”, con domicilio
                social en Dosquebradas Risaralda.{" "}
              </span>
              <span>
                <h2 className="highlighter">Consideraciones</h2> <div></div>
                TOC EDUCATION es una empresa que presta servicios educativos en
                los cuales ofrece herramientas para facilitación, educación,
                gestionamiento y formación de personas interesadas en el área de
                la salud y la medicina; lo cual incluye preguntas y respuestas,
                junto con material educativo para la ayuda educativa de nuestros
                clientes. Para acceder a los servicios de nuestro sitio web
                (www.cursostoc.com) o nuestra aplicación para dispositivos
                móviles (APP) TOC EDUCATION, es necesario que el Usuario acepte
                los presentes términos y condiciones antes de acceder y/o usar
                los servicios de la compañía.
              </span>
              <span>
                <h2 className="highlighter">Definiciones</h2>
                <div></div>
                <ol>
                  <li>
                    “TOC EDUCATION”: Hace referencia a NATALIA BOHÓRQUEZ BEDOYA.
                  </li>
                  <li>
                    “Plataforma”: Integra el sitio web www.cursostoc.com y la
                    aplicación para dispositivos móviles (APP) TOC EDUCATION.
                    También integra de manera conjunta los servicios de
                    contenido educativo.
                  </li>
                  <li>
                    “Servicio(s)”: Es el servicio para ofrecer herramientas para
                    facilitación, educación, gestionamiento y formación de
                    personas interesadas en el área de la salud y la medicina;
                    lo cual incluye preguntas y respuestas, junto con material
                    educativo para la ayuda educativa de nuestros clientes.
                  </li>
                  <li>
                    “Usuario(s)”: Integra a los consumidores/clientes que se han
                    puesto en contacto a través de la Plataforma y/o toda
                    persona natural o jurídica que ingrese utilice o se registre
                    en la Plataforma y/o que tome nuestros servicios
                    independiente de la red de captación.
                  </li>
                </ol>
              </span>

              <span>
                <h2 className="highlighter">Acuerdo de Uso</h2>
                <div></div>
                Mediante su acceso y uso de los Servicios, usted como usuario
                acuerda vincularse jurídicamente por las presentes Condiciones,
                que establecen una relación contractual entre el usuario y TOC
                EDUCATION. Si el usuario no acepta las Condiciones contenidas en
                el presente documento, no podrá acceder o usar los Servicios.
                Estas Condiciones sustituyen taxativamente los acuerdos o
                compromisos previos con usted como usuario. TOC EDUCATION podrá
                poner fin de inmediato a estas Condiciones o cualquiera de los
                Servicios respecto de usted o, en general, dejar de ofrecer o
                denegar el acceso a los Servicios o cualquier parte de ellos, en
                cualquier momento y por cualquier motivo. Se podrán aplicar
                condiciones suplementarias a determinados Servicios, como
                políticas para un evento, una actividad o una promoción
                particular, y dichas condiciones suplementarias se le
                comunicarán en relación con los Servicios aplicables. Las
                condiciones suplementarias se establecen además de las
                Condiciones, y se considerarán una parte de estas, para los
                fines de los Servicios aplicables. Las condiciones
                suplementarias prevalecerán sobre las Condiciones en el caso de
                conflicto con respecto a los Servicios aplicables. TOC EDUCATION
                podrá modificar las Condiciones relativas a los Servicios cuando
                lo considere oportuno. Las modificaciones serán efectivas
                después de la publicación por parte de TOC EDUCATION de dichas
                Condiciones actualizadas en esta ubicación o las políticas
                modificadas o condiciones suplementarias sobre el Servicio
                aplicable. Su acceso o uso continuado de los Servicios después
                de dicha publicación constituye su consentimiento a vincularse
                por las Condiciones y sus modificaciones. La recopilación y el
                uso que hacemos de la información personal en relación con los
                Servicios es conforme se dispone en la Política de privacidad de
                TOC EDUCATION, disponible en
                https://www.cursostoc.com/terminosycondiciones; TOC EDUCATION
                podrá facilitar a un procesador de reclamaciones o a una
                aseguradora cualquier información necesaria (incluida su
                información de contacto) si hubiera quejas, disputas, y dicha
                información o dichos datos fueran necesarios para resolver la
                queja, la disputa o el conflicto.
              </span>
              <span>
                <h2 className="highlighter">Los Servicios</h2> <div></div>
                Los Servicios constituyen una plataforma de tecnología o de los
                servicios de contenido educativo que permite a los usuarios de
                aplicaciones móviles de TOC EDUCATION o páginas web
                proporcionadas como parte de los Servicios conocida como
                “Aplicación” para ofrecer herramientas para facilitación,
                educación, gestionamiento y formación de personas interesadas en
                el área de la salud y la medicina; lo cual incluye preguntas y
                respuestas, junto con material educativo para la ayuda educativa
                de nuestros clientes; así como en su momento compartir
                información confidencial, ideas y participación en concursos
                para compartir propiedad intelectual del usuario y que TOC
                EDUCATION explote de manera propia sea de forma directa o
                indirecta la propiedad que el usuario comparta.
              </span>
              <span>
                <h2 className="highlighter">
                  Descarga, instalación y actualización de la APP
                </h2>{" "}
                <div></div>
                La descarga, instalación y actualización de la APP TOC EDUCATION
                puede realizarse desde las principales tiendas de aplicaciones
                para dispositivos móviles (App Store, Google Play); los usos de
                versiones desactualizadas de la aplicación web o móvil podrían
                afectar su correcto funcionamiento, en caso de requerir soporte
                técnico relacionado con la aplicación puede escribirnos al
                correo electrónico contacto@cursostoc.com. El Usuario debe
                verificar, antes de efectuar cualquier descarga o instalación
                que la Plataforma sea compatible con sus dispositivos o de los
                servicios de contenido educativo. En todo caso, el Usuario es el
                único responsable de cualquier daño causado a sus dispositivos
                por la instalación o uso de versiones no compatibles de la APP
                TOC EDUCATION, por ejemplo, la instalación desde páginas o
                tiendas no oficiales.
              </span>
              <span>
                <h2 className="highlighter">Licencia.</h2> <div></div>
                Sujeto al cumplimiento de estas Condiciones, TOC EDUCATION le
                otorga una licencia limitada, no exclusiva, no sublicenciable,
                revocable, no transferible para: (i) el acceso y uso de las
                Aplicaciones en su dispositivo personal solo en relación con su
                uso de los Servicios; y (ii) el acceso y uso de cualquier
                contenido, información y material relacionado que pueda ponerse
                a disposición a través de los Servicios, en cada caso solo para
                su uso personal, no comercial. TOC EDUCATION y sus licenciantes
                se reservan cualquier derecho que no haya sido expresamente
                otorgado por el presente.
              </span>
              <span>
                <h2 className="highlighter">Registro de usuarios.</h2>{" "}
                <div></div>
                Para registrarse como Usuario en la Plataforma o de los
                servicios de contenido educativo es necesario ser mayor de 18
                años y gozar de plena capacidad para contraer las obligaciones
                que se señalan en los presentes términos y condiciones. El
                Usuario actuando en nombre propio o por medio de su
                representante legal, reconoce tener capacidad legal para
                contratar y contraer obligaciones. Además, declara carecer de
                impedimentos legales que le prohíban vincularse al presente
                contrato. El registro se realiza de manera virtual a través de
                la Plataforma, ingresando datos del Usuario tales como nombre,
                apellido, número celular, correo electrónico, entre otros. El
                Usuario declara y garantiza que la información y datos
                suministrados a la Plataforma es veraz y actualizada. Los
                derechos que se adquieren con el registro son personales e
                intransferibles. La contraseña de ingreso registrada por el
                Usuario no debe ser informada a terceros y debe ser usada con la
                mayor prudencia y diligencia, pues cualquier daño o perjuicio
                que se ocasione por el robo o mal uso de la misma será
                responsabilidad exclusiva del Usuario. En todo caso TOC
                EDUCATION se reserva el derecho de verificar por cualquier medio
                lícito la veracidad de la información registrada por los
                Usuarios y de aceptar o negar el registro de los mismos.
              </span>
              <span>
                <h2 className="highlighter">
                  Requisitos y conducta del usuario.
                </h2>{" "}
                <div></div>
                El Servicio no está disponible para el uso de personas menores
                de 18 años. Usted no podrá autorizar a terceros a utilizar su
                Cuenta, así mismo no podrá permitir a personas menores de 18
                años que reciban servicios de venta y productos de TOC EDUCATION
                o logísticos de Terceros proveedores, a menos que aquellos sean
                acompañados por usted. No podrá ceder o transferir de otro modo
                su Cuenta a cualquier otra persona o entidad. Usted acuerda
                cumplir con todas las leyes aplicables al utilizar los Servicios
                y solo podrá utilizar los Servicios con fines legítimos. En el
                uso de los Servicios, no causará estorbos, molestias,
                incomodidades o daños a la propiedad, tanto al Tercero proveedor
                como a cualquier otra parte. En algunos casos, se le podrá
                requerir que facilite un documento de identidad u otro elemento
                de verificación de identidad para el acceso o uso de los
                Servicios, y usted acepta que se le podrá denegar el acceso o
                uso de los Servicios si se niega a facilitar el documento de
                identidad o el elemento de verificación de identidad.
              </span>
              <span>
                <h2 className="highlighter">Restricciones.</h2> <div></div>
                Como usuario usted no podrá:
                <ol>
                  <li>
                    retirar cualquier nota de derechos de autor, marca
                    registrada u otra nota de propiedad de cualquier parte de
                    los Servicios;
                  </li>
                  <li>
                    reproducir, modificar, preparar obras derivadas sobre los
                    Servicios, distribuir, licenciar, arrendar, revender,
                    transferir, exhibir públicamente, presentar públicamente,
                    transmitir, retransmitir o explotar de otra forma los
                    Servicios, excepto como se permita expresamente por TOC
                    EDUCATION;
                  </li>
                  <li>
                    descompilar, realizar ingeniería inversa o desmontar los
                    Servicios, excepto como se permita por la ley aplicable;{" "}
                  </li>
                  <li>
                    enlazar, reflejar o enmarcar cualquier parte de los
                    Servicios;{" "}
                  </li>
                  <li>
                    causar o lanzar cualquier programa o script con el objeto de
                    extraer, indexar, analizar o de otro modo realizar
                    prospección de datos de cualquier parte de los Servicios o
                    sobrecargar o bloquear indebidamente la operación y/o
                    funcionalidad de cualquier aspecto de los Servicios; o{" "}
                  </li>
                  <li>
                    intentar obtener un acceso no autorizado o dañar cualquier
                    aspecto de los Servicios o sus sistemas o redes
                    relacionados.
                  </li>
                </ol>
              </span>
              <span>
                <h2 className="highlighter">
                  Servicios y contenido de Terceros.
                </h2>{" "}
                <div></div>
                Los Servicios podrán ponerse a disposición o ser accesible en
                relación con servicios y contenido de terceros (incluida la
                publicidad) que TOC EDUCATION no controle. Usted reconoce que
                podrán ser de aplicación diferentes condiciones y políticas de
                privacidad al uso que haga de dichos servicios y contenido de
                terceros. TOC EDUCATION no respalda dichos servicios y contenido
                de terceros y en ningún caso TOC EDUCATION será responsable de
                cualquier producto o servicio de dichos terceros proveedores.
                Adicionalmente, Apple Inc., Google, Inc., Microsoft Corporation
                o BlackBerry Limited y/o sus correspondientes subsidiarias o
                afiliados internacionales serán terceros beneficiarios en este
                contrato si usted accede a los Servicios utilizando Aplicaciones
                desarrolladas para dispositivos móviles con sistema iOS,
                Android, Microsoft Windows, respectivamente. Estos terceros
                beneficiarios no son parte de este contrato y no son
                responsables de la prestación o apoyo de los Servicios de
                ninguna manera. Su acceso a los Servicios utilizando estos
                dispositivos se sujeta a las condiciones establecidas en las
                condiciones de servicio de terceros beneficiarios aplicables.
              </span>
              <span>
                <h2 className="highlighter">Titularidad.</h2> <div></div>
                Ninguna de estas Condiciones ni su uso de los Servicios le
                transfiere u otorgan ningún derecho:
                <ol>
                  <li>
                    sobre o en relación con los Servicios, excepto en cuanto a
                    la licencia limitada otorgada anteriormente; o bien{" "}
                  </li>
                  <li>
                    a utilizar o mencionar en cualquier modo a los nombres de
                    empresa, logotipos, nombres de producto y servicio, marcas
                    comerciales o marcas de servicio de TOC EDUCATION o de sus
                    licenciantes.{" "}
                  </li>
                </ol>
                Los Servicios y todos los derechos relativos a estos son y
                permanecerán de la propiedad de TOC EDUCATION o de sus
                licenciantes.
              </span>
              <span>
                <h2 className="highlighter">Acceso a la plataforma</h2>{" "}
                <div></div>
                Para ingresar a la Plataforma o de los servicios de contenido
                educativo se debe ingresar el correo electrónico y contraseña
                registradas por el Usuario, en caso de actualización de los
                presentes términos y condiciones el Usuario sólo podrá ingresar
                a la Plataforma cuando los haya leído y aceptado. TOC EDUCATION
                no puede hacerse responsable de los servicios proveídos por
                terceros que sean necesarios para el buen funcionamiento de la
                Plataforma o de los servicios de contenido educativo, tales como
                el servicio de internet, telefonía, datos móviles, servicios de
                ubicación en el sistema de posicionamiento global (GPS) y
                similares.
              </span>
              <span>
                <h2 className="highlighter">
                  Uso de la plataforma o de los servicios de contenido educativo
                </h2>{" "}
                <div></div>
                Una vez registrados, los Usuarios podrán usar la Plataforma o de
                los servicios de contenido educativo para ponerse en contacto y
                ejecutar los contratos diferentes a los acordados entre los
                usuarios y TOC EDUCATION. TOC EDUCATION podrá prestar su
                colaboración para ayudar a solucionar cualquier inconveniente o
                diferencia que surja entre los Usuarios, pero ello no significa
                que TOC EDUCATION sea responsable directo o solidario de las
                obligaciones que estos adquieran. El contenido de los mensajes
                de datos que se compartan a través de la Plataforma o de los
                servicios de contenido educativo, son responsabilidad exclusiva
                del Usuario emisor, para garantizar un adecuado uso de la
                Plataforma el Usuario se obliga a cumplir con el Manual de
                Calidad que forma parte integrante de estos términos y
                condiciones. TOC EDUCATION actuará exclusivamente en su rol de
                portal de contacto y prestador de servicios de comunicaciones
                para relacionar usuarios con usuarios participantes de concursos
                que se encuentren autorizados para ofrecer y prestar su
                propiedad intelectual para el uso de TOC EDUCATION.
              </span>
              <span>
                <h2 className="highlighter">Evaluación de los usuarios</h2>{" "}
                <div></div>
                Al finalizar el recorrido o curso, la Plataforma permite que los
                usuarios califiquen la experiencia con TOC EDUCATION, las
                calificaciones y comentarios que se hagan de cada uno de ellos
                podrán ser consultados de forma anónima por los demás Usuarios,
                a fin de incentivar el buen uso de la Plataforma. TOC EDUCATION
                no avala la idoneidad, la salud física o mental de los Usuarios
                registrados, la veracidad de los datos proporcionados por estos
                es de su exclusiva responsabilidad; por ello recomendamos a
                todos los Usuarios obrar con especial prudencia al ponerse en
                contacto con otros Usuarios, no compartir información
                confidencial o delicada. TOC EDUCATION se reserva el derecho de
                suspender o bloquear de manera permanente el acceso a la
                Plataforma de cualquier Usuario, además, TOC EDUCATION podrá
                iniciar acciones legales en contra de cualquier Usuario que
                utilice la Plataforma o de los servicios de contenido educativo
                para cometer u ocultar delitos. En todo caso, el Usuario
                renuncia a reclamar alguna indemnización o compensación por la
                cancelación o suspensión de su cuenta en la Plataforma.
              </span>
              <span>
                <h2 className="highlighter">Reversión de pagos</h2> <div></div>
                Cuando de conformidad con la Ley el Usuario tenga derecho de
                solicitar la reversión de un pago efectuado mediante una tarjeta
                de crédito, débito o cualquier otro instrumento de pago
                electrónico utilizado, TOC EDUCATION realizará sus mejores
                esfuerzos ante los Usuarios para facilitar el proceso de
                reversión de pago siempre y cuando se cumpla con las siguientes
                condiciones:
                <ol>
                  <li>
                    Que el Usuario haya sido objeto de fraude o que la
                    transacción corresponda a una operación no solicitada, o que
                    el servicio no haya sido prestado por TOC EDUCATION y si
                    haya sido cobrado a través de la Plataforma mediante un
                    instrumento de pago electrónico.
                  </li>
                  <li>
                    El Usuario presente reclamación a través del procedimiento
                    habilitado por la Plataforma o de los servicios de contenido
                    educativo.
                  </li>
                  <li>
                    El reclamo se presente ante el emisor del instrumento de
                    pago electrónico dentro de los cinco (5) días hábiles
                    siguientes a la fecha en que el Usuario tuvo noticia de la
                    operación fraudulenta o no solicitada
                  </li>
                </ol>
                TOC EDUCATION realizará sus mejores esfuerzos ante los Usuarios
                o ante el proveedor de pasarela de pagos para gestionar la
                devolución del dinero al Usuario que presenta la reclamación, el
                Usuario entiende y acepta que la devolución del dinero no
                depende de TOC EDUCATION, y que el proceso de devolución puede
                tardar hasta quince (15) días hábiles contados desde la fecha de
                presentación de la solicitud de reversión ante el emisor del
                instrumento de pago electrónico utilizado. En el evento en que
                hubiere alguna controversia derivada de la reclamación de
                reversión del pago y siempre que hubiere pronunciamiento de una
                autoridad jurisdiccional o administrativa en firme que determine
                que la misma no era procedente, el Usuario que presenta la
                reclamación será responsable por todos los costos en que se haya
                incurrido con ocasión de la solicitud de reversión. En este
                caso, el emisor del instrumento de pago, en conjunto con los
                demás participantes del proceso de pago, una vez notificada la
                decisión de la autoridad jurisdiccional o administrativa en
                firme, cargará definitivamente la transacción reclamada al
                Usuario reclamante y el dinero será puesto a disposición de TOC
                EDUCATION como Portal de Contacto quien lo transferirá al
                Usuario beneficiario del pago, siempre que en la cuenta ahorros,
                tarjeta de crédito o instrumento de pago utilizado para realizar
                la compra objetada, existan recursos para efectuarla. La entidad
                financiera verificará por una sola vez la existencia de recursos
                y el cargo puede ser parcial en el evento que estos no sean
                suficientes. En estos casos, el Usuario reclamante deberá
                reembolsar directamente a TOC EDUCATION como Portal de Contacto
                el valor de la transacción, o el monto faltante, y los demás
                costos incurridos con ocasión de la solicitud de reversión para
                que TOC EDUCATION proceda a transferir dichos recursos al
                Usuario que beneficiario del pago.
              </span>
              <span>
                <h2 className="highlighter">Evaluación de los usuarios</h2>{" "}
                <div></div>
                TOC EDUCATION podrá, a su sola discreción, crear códigos
                promocionales que podrán ser canjeados por crédito de Cuenta u
                otros elementos o beneficios relacionados con los Servicios y/o
                los servicios de un Tercero proveedor, con sujeción a cualquier
                condición adicional que TOC EDUCATION establezca sobre la base
                de cada código promocional “Códigos promocionales”. Usted como
                usuario acuerda que los Códigos promocionales:
                <ol>
                  <li>
                    Deben usarse para la audiencia y el propósito deseado, y de
                    manera lícita;{" "}
                  </li>
                  <li>
                    mo podrán duplicarse, venderse o transferirse de ninguna
                    manera, o ponerse a disposición del público general (tanto
                    si se publican en un foro público como de otra forma), a
                    menos que sea con el permiso de TOC EDUCATION;{" "}
                  </li>
                  <li>
                    podrán ser invalidados por TOC EDUCATION en cualquier
                    momento por cualquier motivo sin responsabilidad para TOC
                    EDUCATION;{" "}
                  </li>
                  <li>
                    podrán usarse solo conforme a las condiciones específicas
                    que TOC EDUCATION establezca para dicho Código promocional;{" "}
                  </li>
                  <li>no son válidos como efectivo; y </li>
                  <li>
                    podrán caducar antes de que usted los utilice. TOC EDUCATION
                    se reserva el derecho de retener o deducir el crédito u
                    otros elementos o beneficios obtenidos a través de la
                    utilización de los Códigos promocionales por usted o
                    cualquier otro usuario en el caso de que TOC EDUCATION
                    determine o crea que el uso o el canje de los Códigos
                    promocionales fue de modo erróneo, fraudulento, ilegal o
                    infringiendo las condiciones del Código promocional o las
                    presentes Condiciones.no son válidos como efectivo; y{" "}
                  </li>
                </ol>
              </span>
              <span>
                <h2 className="highlighter">
                  Protección y Tratamiento de Datos Personales
                </h2>{" "}
                <div></div>
                En cumplimiento de la ley estatutaria 1581 de 2012, el decreto
                único reglamentario 1074 de 2015 y el decreto 090 del 18 de
                enero de 2018, TOC EDUCATION ha adoptado un Manual Interno de
                Políticas y Procedimientos para Protección de Datos Personales
                que puede ser consultado en la Política de privacidad y
                tratamiento de datos personales contenida en
                https://cursostoc.com/terminos TOC EDUCATION, en condición de
                Responsable, efectúa el tratamiento de los datos personales
                suministrados por los usuarios únicamente dentro de las
                finalidades contempladas en su política. Al aceptar los
                presentes términos y condiciones, el Usuario también acepta el
                contenido del Política de Privacidad y del Manual de Políticas y
                Procedimientos para Protección y el tratamiento de Datos
                Personales adoptado por TOC EDUCATION conforme a la ley 1581 de
                2012. De acuerdo con los presentes términos y condiciones, el
                Usuario otorga su autorización expresa para el tratamiento de
                sus datos personales, incluida la autorización expresa de
                transferencia y transmisión internacional de sus datos
                personales incluyendo el nombre, imagen, edad, número de
                teléfono, correo electrónico, localización y dirección, dentro
                de las finalidades comunicadas en la Política de Privacidad y en
                el manual de políticas mencionado. Si hubiere lugar a una venta,
                fusión, escisión, consolidación, integración empresarial, cambio
                en el control societario, transferencia de activos sustancial o
                transferencia global de activos, reorganización o liquidación de
                TOC EDUCATION, entonces, la compañía, podrá discrecionalmente y
                bajo cualquier título, transferir, transmitir, vender o asignar
                los datos personales recabados, a cualquier tercero vinculado
                con algunas de las operaciones descritas o a una o más partes
                relevantes. Los USUARUOS que deseen vincularse a concurso deben
                autorizar expresamente a TOC EDUCATION para transferir y
                transmitir sus datos personales a terceros que lleven a cabo
                estudios de seguridad o de antecedentes personales. Con ocasión
                del uso de la Plataforma o de los servicios de contenido
                educativo, TOC EDUCATION podrá compartir con los usuarios los
                datos de contacto de éstos que sean necesarios para prestar
                adecuadamente los servicios para ofrecer herramientas para
                facilitación, educación, gestionamiento y formación de personas
                interesadas en el área de la salud y la medicina; lo cual
                incluye preguntas y respuestas, junto con material educativo
                para la ayuda educativa de nuestros clientes. Los datos que se
                podrán compartir entre los usuarios serán la dirección de
                solicitud del servicio, nombres, números de teléfono, etc. En
                virtud de los presentes términos y condiciones los Usuario se
                obligan a no usar o tratar los datos personales que reciban o
                compartan para propósitos distintos a solicitar o prestar un
                servicio para ofrecer herramientas para facilitación, educación,
                gestionamiento y formación de personas interesadas en el área de
                la salud y la medicina; lo cual incluye preguntas y respuestas,
                junto con material educativo para la ayuda educativa de nuestros
                clientes.
              </span>
              <span>
                <h2 className="highlighter">Licencia de uso</h2> <div></div>
                TOC EDUCATION brindará al Usuario una licencia limitada,
                personal, no exclusiva, intransferible, no comercial y
                totalmente revocable para utilizar la Plataforma o documentos
                compartidos (obras literarias), de conformidad con los términos
                contenidos en este documento. La licencia será vigente
                únicamente mientras se acceda a la Plataforma o de los servicios
                de contenido educativo y en caso que el acceso sea otorgado por
                TOC EDUCATION. TOC EDUCATION se reserva todos los derechos sobre
                la Plataforma o de los servicios de contenido educativo no
                expresamente concedidos aquí. Se prohíbe expresamente la
                distribución, reproducción, modificación o transformación,
                creación de obras derivadas, scrapping o extracción de
                información y comunicación pública de la Plataforma. TOC
                EDUCATION se reserva la facultad de no permitir el uso, o
                suspender o cancelar el uso de la Plataforma o de los servicios
                de contenido educativo a cualquier Usuario, sin aviso previo y
                sin lugar a indemnización alguna. El Usuario acepta que los
                logotipos, marcas, fotos, imágenes, descripciones, textos,
                plantillas, símbolos, señales distintivas, manual(es) y
                cualquier otro material o contenido relacionado con la
                Plataforma o de los servicios de contenido educativo,
                constituye, conforme al caso, derechos de propiedad intelectual,
                de negocio y/o derechos de propiedad de TOC EDUCATION.
              </span>
              <span>
                <h2 className="highlighter">Renuncias</h2> <div></div>
                Limitación de responsabilidad; Indemnidad.
              </span>
              <span>
                <h2 className="highlighter">Renuncia</h2> <div></div>
                los servicios se proporcionan “tal cual” y “como disponibles”.
                TOC EDUCATION renuncia a toda declaración y garantía, expresa,
                implícita o estatutaria, no expresamente establecida en estas
                condiciones, incluidas las garantías implícitas de
                comerciabilidad, idoneidad para un fin particular y no
                violación. además, TOC EDUCATION no hace declaración ni presta
                garantía alguna relativa a la fiabilidad, puntualidad, calidad,
                idoneidad o disponibilidad de los servicios o cualquiera de los
                servicios o bienes solicitados a través del uso de los
                servicios, o que los servicios no serán interrumpidos o estarán
                libres de errores. TOC EDUCATION no garantiza la calidad,
                idoneidad, seguridad o habilidad de los terceros proveedores.
                usted acuerda que todo riesgo derivado de su uso de los
                servicios y cualquier servicio o bien solicitado en relación con
                aquellos será únicamente suyo, en la máxima medida permitida por
                la ley aplicable.
              </span>
              <span>
                <h2 className="highlighter">Limitación de responsabilidad</h2>{" "}
                <div></div>
                TOC EDUCATION no será responsable de daños indirectos,
                incidentales, especiales, ejemplares, punitivos o emergentes,
                incluidos el lucro cesante, la pérdida de datos, la lesión
                personal o el daño a la propiedad, ni de perjuicios relativos, o
                en relación con, o de otro modo derivados de cualquier uso de
                los servicios, incluso aunque TOC EDUCATION haya sido advertido
                de la posibilidad de dichos daños. TOC EDUCATION no será
                responsable de cualquier daño, responsabilidad o pérdida que
                deriven de:
                <ol>
                  <li>
                    Su uso o dependencia de los servicios o su incapacidad para
                    acceder o utilizar los servicios; o{" "}
                  </li>
                  <li>
                    cualquier transacción o relación entre usted y cualquier
                    tercero proveedor, aunque TOC EDUCATION hubiera sido
                    advertido de la posibilidad de dichos daños. TOC EDUCATION
                    no será responsable del retraso o de la falta de ejecución
                    resultante de causas que vayan más allá del control
                    razonable de TOC EDUCATION. en ningún caso la
                    responsabilidad total de TOC EDUCATION hacia usted en
                    relación con los servicios por todos los daños, las pérdidas
                    y los juicios podrá exceder de dos salarios mínimos legales
                    mensuales vigentes en Colombia (2 SMLMV).
                  </li>
                </ol>
                Usted podrá utilizar los servicios de TOC EDUCATION para
                solicitar y planificar servicios para ofrecer herramientas para
                facilitación, educación, gestionamiento y formación de personas
                interesadas en el área de la salud y la medicina; lo cual
                incluye preguntas y respuestas, junto con material educativo
                para la ayuda educativa de nuestros clientes; se incluye que se
                podrá utilizar los bienes o logísticos de o con terceros
                proveedores, pero acepta que TOC EDUCATION no tiene
                responsabilidad alguna hacia usted en relación con cualquier
                servicios educativos, bienes o logístico prestado a usted por
                terceros proveedores que no sea como se ha establecido
                expresamente en estas condiciones. Las limitaciones y la
                renuncia en este apartado, no pretenden limitar la
                responsabilidad o alterar sus derechos como consumidor que no
                puedan excluirse según la ley aplicable.
              </span>
              <span>
                <h2 className="highlighter">Indemnidad</h2> <div></div>
                Usted acuerda mantener indemnes y responder frente a TOC
                EDUCATION y sus consejeros, directores, empleados y agentes por
                cualquier reclamación, demanda, pérdida, responsabilidad y gasto
                (incluidos los honorarios de abogados) que deriven de:
                <ol>
                  <li>
                    su uso de los Servicios o servicios o bienes obtenidos a
                    través de su uso de los Servicios;{" "}
                  </li>
                  <li>
                    su incumplimiento o violación de cualquiera de estas
                    Condiciones;{" "}
                  </li>
                  <li>
                    el uso por parte de TOC EDUCATION de su Contenido de
                    usuario; o{" "}
                  </li>
                  <li>
                    su infracción de los derechos de cualquier tercero,
                    incluidos Terceros proveedores.
                  </li>
                </ol>
              </span>
              <span>
                <h2 className="highlighter">Otras disposiciones</h2> <div></div>
                Reclamaciones por infracción de derechos de autor. Las
                reclamaciones por infracción de derechos de autor deberán
                enviarse al agente designado de TOC EDUCATION. Visite la página
                web de TOC EDUCATION en www.cursostoc.com para obtener las
                direcciones designadas e información adicional.
              </span>
              <span>
                <h2 className="highlighter">Cláusula Compromisoria</h2>{" "}
                <div></div>
                Toda diferencia o controversia relativa a los presentes términos
                y condiciones será resuelta por un Tribunal de Arbitramento cuyo
                domicilio será en la ciudad de Medellín, Departamento de
                Antioquia, el cual será integrado por un (1) árbitro designados
                conforme a la ley. Los arbitramentos que ocurrieren se regirán
                por lo dispuesto en el Estatuto Arbitral ley 1563 de 2012.
              </span>
              <span>
                <h2 className="highlighter">Comunicaciones y Notificaciones</h2>{" "}
                <div></div>
                Cualquier información que deba ser dada a conocer a los Usuarios
                podrá llevarse a cabo a través de la publicación de comunicados
                en la Plataforma, por medio de un mensaje de datos enviado al
                Usuario o por medio de correo electrónico a la dirección
                registrada por el Usuario, a elección de TOC EDUCATION. Las
                comunicaciones y notificaciones dirigidas a TOC EDUCATION deben
                enviarse a la Calle 15 #7A-85 torre 1 apartamento 505 Conjunto
                Teka, sector la Macarena, Dosquebradas Risaralda.
              </span>
              <span>
                <h2 className="highlighter">Tarifa aplicable según producto</h2>{" "}
                <div></div>
                La tarifa aplicable según producto, es el nombre que recibe la
                remuneración que los usuarios se comprometen a pagar a TOC
                EDUCATION por cada producto solicitado a través de la Plataforma
                o de los servicios de contenido educativo. En todo caso será
                posible aplicar la compensación o cruce de cuentas cuando este
                adeude sumas a TOC EDUCATION y posea en su cuenta saldo a favor
                derivado de recargas de saldo, o servicios pagados con tarjeta
                de crédito o por servicios corporativos o empresariales.
              </span>
              <span>
                <h2 className="highlighter">Valor Estimado</h2> <div></div>
                El valor estimado hace referencia a la suma aproximada a la que
                el usuario estará comprometido a pagar al solicitar un servicio
                a través de la plataforma o independiente del medio de
                captación; el cual estará supeditado a la marca, parámetros y
                fijación de precio del producto.
              </span>
              <span>
                <h2 className="highlighter">Pago</h2> <div></div>
                El usuario entiende que el uso de los Servicios puede derivar en
                cargos por los servicios o bienes que reciba de un Tercer
                proveedor (“Cargos”). Después de que haya recibido los servicios
                u obtenido los bienes mediante el uso de los Servicios, TOC
                EDUCATION facilitará su pago de los Cargos aplicables en nombre
                del Tercero proveedor como agente de cobro limitado del Tercero
                proveedor. El pago de los Cargos de dicha manera se considerará
                como el pago efectuado directamente por usted al Tercero
                proveedor. Los Cargos incluirán los impuestos aplicables cuando
                se requiera por ley. Los Cargos pagados por usted son
                definitivos y no reembolsables, a menos que TOC EDUCATION
                determine lo contrario. Los cargos pueden incluir otras cuotas,
                peajes y/o recargos aplicables, incluyendo cuotas por solicitud,
                cuotas o cargos municipales, estatales o nacionales, cargos por
                demoras, recargos aeroportuarios o tarifas de procesamiento por
                pagos fraccionados, entre otros que sean aplicables. Todos los
                Cargos son pagaderos inmediatamente y el pago se facilitará por
                TOC EDUCATION utilizando al método de pago preferido indicado en
                su Cuenta, y después de ello TOC EDUCATION le enviará un recibo
                por correo electrónico. Si se determina que el método de pago de
                su Cuenta principal ha caducado, es inválido o de otro modo no
                sirve para cobrarle, usted acepta que TOC EDUCATION, como agente
                de cobro limitado del Tercero proveedor, utilice un método de
                pago secundario en su Cuenta, si estuviera disponible; todo lo
                anterior se realiza de conformidad y concordancia con el numeral
                24.1 (tarifa establecida mediante tarifario de productos
                conforme disposiciones legales establecidas por los entes
                territoriales) de los presentes términos y condiciones.
              </span>
              <span>
                <h2 className="highlighter">
                  Autorización de prueba de cargo a tarjeta de crédito para
                  usuario.
                </h2>{" "}
                <div></div>
                Mediante la aceptación de los presentes Términos y Condiciones
                el usuario AUTORIZA expresamente a TOC EDUCATION para que en los
                casos en que los servicios educativos, que estos sean pagados
                con Tarjeta de Crédito TOC EDUCATION estará facultado para
                realizar una preautorización de verificación del cupo en la
                tarjeta de crédito en el momento en que el usuario solicita el
                servicio. Esta preautorización consistirá en debitar una suma,
                la cual una vez se ha validado que el usuario cuenta con crédito
                por este valor, el dinero automáticamente le será devuelto unos
                segundos después de haber hecho la validación. En ningún caso
                TOC EDUCATION realizará reembolsos de los saldos.
              </span>
              <span>
                <h2 className="highlighter">
                  Modificación a los términos y condiciones
                </h2>{" "}
                <div></div>
                Cualquier modificación total o parcial de los presentes términos
                y condiciones podrá ser comunicada, por cualquier medio público
                o privado, por TOC EDUCATION a los Usuarios. Cuando el Usuario
                accede y hace uso de la plataforma electrónica y/o del sitio
                web, entenderemos que el Usuario se obliga libremente al
                cumplimiento de estos Términos y Condiciones.
              </span>
              <span>
                <h2 className="highlighter">Disposiciones generales</h2>{" "}
                <div></div>
                No podrá ceder ni transferir estas Condiciones, en todo o en
                parte, sin el consentimiento previo por escrito de TOC
                EDUCATION. Usted da su aprobación a TOC EDUCATION para ceder o
                transferir estas Condiciones, en todo o en parte, incluido a:
                <ol>
                  <li>una subsidiaria o un afiliado; </li>
                  <li>
                    un adquirente del capital, del negocio o de los activos de
                    TOC EDUCATION; o{" "}
                  </li>
                  <li>
                    un sucesor por fusión. No existe entre usted, TOC EDUCATION
                    o cualquier Tercer proveedor una empresa conjunta o relación
                    de socios, empleo o agencia como resultado del contrato
                    entre usted y TOC EDUCATION o del uso de los Servicios.{" "}
                  </li>
                </ol>
                Si cualquier disposición de estas Condiciones se considerara
                ilegal, nula o inexigible, ya sea en su totalidad o en parte, de
                conformidad con cualquier legislación, dicha disposición o parte
                de esta se considerará que no forma parte de estas Condiciones,
                aunque la legalidad, validez y exigibilidad del resto de las
                disposiciones de estas Condiciones no se verá afectada. En ese
                caso, las partes deberán reemplazar dicha disposición ilegal,
                nula o inexigible, en todo o en parte por una disposición legal,
                válida y exigible que tenga, en la medida de lo posible, un
                efecto similar al que tenía la disposición ilegal, nula o
                inexigible, dados los contenidos y el propósito de estas
                Condiciones. Estas Condiciones constituyen el contrato íntegro y
                el entendimiento entre las partes en relación con el objeto y
                sustituye y reemplaza a todos los contratos o acuerdos
                anteriores o contemporáneos en relación con dicho objeto. En
                estas Condiciones, las palabras “incluido/a/os/as” e “incluye/n”
                significan “incluido, de forma meramente enunciativa”.
              </span>
              <span>
                <h2 className="highlighter">Alcance</h2> <div></div>
                Los presentes Términos y Condiciones serán aplicables a todo
                acto o contrato que el Usuario realice en la Plataforma y
                permanecerán vigentes mientras dichos actos o contratos
                produzcan efectos o generen obligaciones. Así mismo serán
                aplicables cada vez que el Usuario utilice la Plataforma o de
                los servicios de contenido educativo. El acuerdo que resulte de
                la aceptación de los presentes términos y condiciones sustituye
                todos los acuerdos, representaciones, declaraciones de garantía
                pactadas entre las partes y sustituye expresamente los términos
                de cualquier oferta mercantil que se haya comunicado.
              </span>
              <span>
                <h2 className="highlighter">Ley aplicable</h2> <div></div>
                Para todos los efectos los presentes Términos y Condiciones se
                regirán e interpretarán de conformidad con las leyes de la
                República de Colombia.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsConditions;
