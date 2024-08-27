![img.png](cypress%2Ffixtures%2Fimg.png)
# Proyecto: Automatización de Compra en una Tienda en Línea

Este proyecto utiliza Cypress, Allure, JavaScript y el patrón de diseño Page Object Model (POM) para automatizar el proceso de compra en una tienda en línea, incluyendo acciones como autenticación, navegación por el catálogo, registro de usuarios, y finalización de la compra.

## Estructura del Proyecto

````
├── .idea
├── cypress
│   ├── e2e
│   │   ├── pages
│   │   │   ├── cart
│   │   │   │   ├── cart.elements.js
│   │   │   │   └── cart.methods.js
│   │   │   ├── common-page
│   │   │   │   ├── common-page.data.js
│   │   │   │   ├── common-page.elements.js
│   │   │   │   └── common-page.methods.js
│   │   │   ├── home
│   │   │   │   ├── home.data.js
│   │   │   │   ├── home.elements.js
│   │   │   │   └── home.methods.js
│   │   │   ├── login
│   │   │   │   ├── login.data.js
│   │   │   │   ├── login.elements.js
│   │   │   │   └── login.methods.js
│   │   │   ├── place-order
│   │   │   │   ├── place-order.data.js
│   │   │   │   ├── place-order.elements.js
│   │   │   │   └── place-order.methods.js
│   │   │   ├── product-details
│   │   │   │   ├── product-details.elements.js
│   │   │   │   └── product-details.methods.js
│   │   │   ├── signup
│   │   │   │   ├── signup.data.js
│   │   │   │   ├── signup.elements.js
│   │   │   │   └── signup.methods.js
│   │   │   ├── thank-you-for-your-purchase
│   │   │       ├── thank-you-for-your-purchase.elements.js
│   │   │       └── thank-you-for-your-purchase.methods.js
│   │   ├── tests
│   │   │   ├── autenticacion.cy.js
│   │   │   ├── catalogo-y-compras.cy.js
│   │   │   └── registro.cy.js
│   │   ├── util
│   │   │   └── logger.js
│   ├── fixtures
│   │   └── example.json
│   ├── support
│   │   ├── commands.js
│   │   └── e2e.js
├── node_modules
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
````
## Comandos para Ejecutar en Consola

1. Abre Cypress en modo interactivo:
   npm run cypress:open

2. Ejecuta las pruebas en modo headless:
   npm run cypress:run

3. Limpia los reportes anteriores, ejecuta las pruebas y genera un nuevo reporte:
   npm run test

## Scripts en package.json

Cada uno de estos scripts está diseñado para automatizar y optimizar el proceso de pruebas, permitiéndote ejecutar, limpiar y generar reportes con facilidad desde la consola.
```json
 {
  "limpiar-reporte": "rimraf ./allure-report && rimraf ./allure-results",
  "ejecutar-pruebas": "cypress run --env allure=true",
  "generar-reporte": "allure generate allure-results -o allure-report --clean",
  "abrir-report": "allure open",
  "test": "npm run limpiar-reporte && npm run ejecutar-pruebas; npm run generar-reporte && npm run abrir-report",
  "cy:parallel": "npm run limpiar-reporte && cypress-parallel -s ejecutar-pruebas -t 2 -d ./cypress/e2e/tests; npm run generar-reporte"
}
```
#  📫 Contacto
Para más información o consultas, puedes contactarme a través de mi correo electrónico: [osoriocruzjairo@gmail.com](mailto:osoriocruzjairo@gmail.com) o LinkedIn: [Jairo Osorio Cruz](https://www.linkedin.com/in/jairo-osorio-c-8461061b3/).

[![Email](https://img.shields.io/badge/-Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:osoriocruzjairo@gmail.com)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jairo-osorio-c-8461061b3/)