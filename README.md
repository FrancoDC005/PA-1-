# PA1 - Plataforma de Gestión de Solicitudes Académicas

## PROGRAMACION WEB AVANZAZDA

**RNC:** 4060-202620
**Evaluación:** PA1 - Proceso de Aprendizaje 1  
**Periodo académico:** 202620  

---

# 1. Integrante

| Nombre | Rol | Participación |
PARTICIPACION COMPLETA 100%
| [FRANCO ANDRES DIAZ CARREAL] | Desarrollo frontend, TypeScript, Angular, documentación y pruebas | Desarrollo integral del proyecto |

---

# 2. Descripción del proyecto

La **Plataforma de Gestión de Solicitudes Académicas** es una aplicación web
desarrollada utilizando Angular 16 y TypeScript.

El proyecto tiene como finalidad representar una plataforma donde los
estudiantes pueden registrar solicitudes académicas y consultar la
información registrada.

La aplicación incorpora diferentes funcionalidades relacionadas con el
desarrollo frontend moderno, incluyendo:

- Programación con TypeScript.
- Definición de interfaces y tipos.
- Organización modular del proyecto.
- Componentes Angular.
- Data binding.
- Directivas.
- Servicios.
- Inyección de dependencias.
- Formularios reactivos.
- Validaciones.
- Navegación mediante Angular Router.
- Consumo de una API REST mediante `HttpClient`.

La solución fue desarrollada como una aplicación frontend. La gestión de
las solicitudes se realiza mediante un servicio Angular durante la
ejecución de la aplicación, mientras que la integración con una API REST
permite demostrar el intercambio de información entre el frontend y un
servicio externo.

---

# 3. Problema identificado

Una institución educativa puede recibir diferentes tipos de solicitudes
por parte de sus estudiantes, como solicitudes de constancias, retiro de
cursos, reincorporaciones o convalidaciones.

Cuando estas solicitudes no cuentan con una interfaz organizada para su
registro y consulta, puede resultar más difícil estructurar la información
y validar que los datos proporcionados sean correctos.

Por este motivo se plantea una aplicación web que permita centralizar el
registro y visualización de solicitudes mediante una interfaz desarrollada
con tecnologías modernas de frontend.

---

# 4. Objetivo general

Desarrollar una aplicación web utilizando Angular 16 y TypeScript que
permita registrar y consultar solicitudes académicas, aplicando conceptos
de programación moderna, componentes, servicios, formularios reactivos,
validaciones, navegación y consumo de servicios REST.

---

# 5. Objetivos específicos

- Aplicar TypeScript mediante interfaces, tipos y tipado estático.
- Utilizar características modernas de JavaScript y TypeScript.
- Organizar el proyecto mediante componentes, modelos, servicios y
  utilidades.
- Implementar componentes Angular para representar las diferentes vistas.
- Aplicar interpolación y directivas de Angular.
- Implementar un servicio utilizando inyección de dependencias.
- Crear un formulario reactivo para registrar solicitudes.
- Implementar validaciones para los datos ingresados.
- Configurar navegación mediante Angular Router.
- Consumir una API REST utilizando `HttpClient`.
- Mostrar en la interfaz los datos obtenidos desde el servicio REST.
- Documentar el desarrollo mediante GitHub y un archivo README.

---

# 6. Tecnologías utilizadas

## Frontend

- Angular 16
- TypeScript
- JavaScript ES6+
- HTML5
- CSS3

## Herramientas y librerías

- Angular Router
- Reactive Forms
- HttpClient
- RxJS
- Node.js
- npm
- Angular CLI
- Git
- GitHub

---

# 7. Arquitectura y organización del proyecto

El proyecto utiliza una organización basada en componentes, modelos,
servicios y utilidades.

La estructura principal es:

```text
src/app/
│
├── components/
│   ├── inicio/
│   ├── lista-solicitudes/
│   ├── solicitud-form/
│   └── solicitudes-remotas/
│
├── models/
│   └── solicitud.model.ts
│
├── services/
│   ├── solicitud.service.ts
│   └── api.service.ts
│
├── utils/
│   └── helpers.ts
│
├── app.component.ts
├── app.component.html
├── app.module.ts
└── app-routing.module.ts


LINK DE LA EXPOSICION 

https://youtu.be/QpFh0WWCBLI

//* Profesor buenas noches, le escribo esto a las 19:20hrs del dia 22/09/26, para serle sincero, no pude ingresar a las clases previas por motivos de trabajo, problemas de la casa, asi mismo no pude conseguir un grupo para realizar la PA1, quisiera pedirle de favor si me podria considerar por esta ocacion la actividad, hace un par de horas se me cerro el acceso para poder subir la actividad por no pertenecer a ningun grupo. Asi mismo se lo envio mediante su correo. 

de antemano le agradesco si llega a leer esto. 

Saludos cordiales //*