Cristina Martín Rey - UO255479

NOTA : Quiero destacar que desde la presentación oral he seguido trabajando en el módulo de HTML + CSS
y he conseguido reducir el uso de selectores de clase y de bloques anónimos.


ESTRUCTURA DEL SITIO WEB
La estructura del sitio web se divide en los siguientes directorios:
* Directorio raíz: En él se encuentran todas las páginas HTML del sitio.
* css: En este directorio se encuentran las hojas de estilo utilizadas por el sitio web.
* media: Todo el contenido multimedia.


CONTENIDO
En lo referente al contenido de los documentos, se tienen las siguientes páginas:
* index.html: Página inicial del sitio web donde se muestran mis datos personales.
              Hay un pequeño vídeo introductorio, una descripción y datos de contacto al final del documento.
* curriculum.html: En este documento se incluyen varias secciones que unidas conforman mi CV.
                   Al final del documento también se incluye un footer con mis datos de contacto y algunas referencias
                   a otros perfiles en redes sociales.
* aficiones.html: En la página de aficiones muestro 2 secciones conteniendo 2 de mis mayores aficiones.
                  Cada una de ellas contiene una sección con su título, contenido y una fotografía.
* electro-music.html: En esta página se explica el origen de la música electrónica así como su evolución a lo largo
                      de los años. Al final del documento se tienen 2 ejemplos de canciones de música electrónica
                      bastante actuales.


MÓDULOS CSS
El sitio web dispone de una hoja de estilos principal denominada main.css en la que se aplica el estilo principal.
Además, también se han añadido algunos módulos referentes a estilos específicos que no tienen todas páginas. En cada
una de estas otras hojas de estilo se explica en un comentario al principio la funcionalidad del mismo.


VALIDACIONES

1.- VALIDACIÓN HTML
Se han validado los 4 documentos HTML utilizando el validador web de la W3C. (https://validator.w3.org/)


2.- VALIDACIÓN CSS
Se ha validado cada una de las hojas de estilo del sitio web utilizando el validados web de la W3C. (https://jigsaw.w3.org/css-validator/)


3.- VALIDACIÓN DE CONTRASTE ENTRE TEXTO Y FONDO
Se ha procedido a validar si el texto tiene suficiente contraste con el fondo como para ser claramente legible.
Para el procedimiento se ha utilizado el siguiente validador: https://webaim.org/resources/contrastchecker/

Elementos validados:
    - Header:
        + Texto en negro
        + Texto en azul
    - Contenido:
        + Texto párrafo
        + Texto blockquote
    - Imágenes:
        + Texto figcaption
        + Texto enlaces de figcaption
    - Footer:
        + Texto enlace email


4.- VALIDACIÓN DE ACCESIBILIDAD
Se utiliza el validador Wave (https://wave.webaim.org) pero descargando la extensión ya que aunque se publique la página
en la máquina virtual remota, Wave no tendrá acceso a la misma.

Se solucionan todas las alertas a excepción de las siguientes:
    - Alerta por transcripción del vídeo: Aunque sea posible transcribir un vídeo en el que no hable ninguna persona,
            he optado por introducir un párrafo antes del vídeo que incluye un resumen del mismo.
    - Alerta por transcripción de audio: Ocurre lo mismo en la última página del sitio donde se ponen dos ejemplos de
            canciones. En este caso se ha optado por poner un poco más de información en el elemento de la lista.

5.- VALIDACIÓN DE ADAPTABILIDAD
Para la validación de adaptabilidad se han utilizado las herramientas de desarrollador de un cliente para poder
adaptar la pantalla y comprobar que todo se visualiza correctamente.

Se ha introducido la siguiente etiqueta de metadatos en la cabecera de cada página.
        <meta name="viewport" content="width=device-width, initial-scale=1" />
