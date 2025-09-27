import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.curso.create({
    data: {
      nombre: "NestJS con Prisma",
      descripcion: "Curso completo para aprender a usar NestJS con Prisma y PostgreSQL",
      lecciones: {
        create: [
          {
            nombre: "Introducción a NestJS",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué es NestJS?",
                  opciones: [
                    "Un ORM",
                    "Un framework de Node.js para construir aplicaciones escalables",
                    "Un sistema de bases de datos",
                  ],
                  respuestaCorrecta: "Un framework de Node.js para construir aplicaciones escalables",
                },
                {
                  enunciado: "¿NestJS está basado en qué lenguaje?",
                  opciones: ["TypeScript", "Python", "Java"],
                  respuestaCorrecta: "TypeScript",
                },
                {
                  enunciado: "NestJS sigue qué arquitectura?",
                  opciones: ["MVC", "Monolítica", "Modular"],
                  respuestaCorrecta: "Modular",
                },
              ],
            },
          },
          {
            nombre: "Configuración con Prisma",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué comando inicializa Prisma?",
                  opciones: ["npx prisma init", "npm install prisma", "prisma generate"],
                  respuestaCorrecta: "npx prisma init",
                },
                {
                  enunciado: "¿Qué archivo crea Prisma para la configuración de la base de datos?",
                  opciones: ["prisma.config.js", "schema.prisma", "database.json"],
                  respuestaCorrecta: "schema.prisma",
                },
                {
                  enunciado: "¿Qué comando genera el cliente de Prisma?",
                  opciones: ["prisma build", "prisma generate", "npm run prisma"],
                  respuestaCorrecta: "prisma generate",
                },
              ],
            },
          },
          {
            nombre: "Módulos y Controladores",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué decorador se usa para definir un controlador en NestJS?",
                  opciones: ["@Controller", "@Module", "@Injectable"],
                  respuestaCorrecta: "@Controller",
                },
                {
                  enunciado: "¿Cuál es la función de un módulo en NestJS?",
                  opciones: [
                    "Definir rutas HTTP",
                    "Agrupar servicios, controladores y proveedores relacionados",
                    "Configurar la base de datos",
                  ],
                  respuestaCorrecta: "Agrupar servicios, controladores y proveedores relacionados",
                },
              ],
            },
          },
          {
            nombre: "Servicios y Dependencias",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué decorador se usa para inyectar dependencias en un servicio?",
                  opciones: ["@Injectable", "@Controller", "@Service"],
                  respuestaCorrecta: "@Injectable",
                },
                {
                  enunciado: "¿Cómo se inyecta un servicio en un controlador?",
                  opciones: [
                    "Usando 'new Service()'",
                    "A través del constructor",
                    "Con require()",
                  ],
                  respuestaCorrecta: "A través del constructor",
                },
              ],
            },
          },
          {
            nombre: "Validación y Pipes",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué pipe se usa para transformar y validar automáticamente los datos en un DTO?",
                  opciones: ["ParseIntPipe", "ValidationPipe", "TransformPipe"],
                  respuestaCorrecta: "ValidationPipe",
                },
                {
                  enunciado: "¿Qué opción del ValidationPipe elimina propiedades extra que no están en el DTO?",
                  opciones: ["transform", "whitelist", "forbidNonWhitelisted"],
                  respuestaCorrecta: "whitelist",
                },
              ],
            },
          },
          {
            nombre: "Autenticación y JWT",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué librería se usa comúnmente para manejar JWT en NestJS?",
                  opciones: ["@nestjs/jwt", "jsonwebtoken", "bcrypt"],
                  respuestaCorrecta: "@nestjs/jwt",
                },
                {
                  enunciado: "¿Qué decorador se usa para proteger rutas con guardias?",
                  opciones: ["@UseGuards", "@Auth", "@Protect"],
                  respuestaCorrecta: "@UseGuards",
                },
              ],
            },
          },
          {
            nombre: "Bases de Datos y Relaciones",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué tipo de relación representa Prisma con 'create' dentro de otra entidad?",
                  opciones: ["Relación uno a muchos", "Relación muchos a muchos", "Relación uno a uno"],
                  respuestaCorrecta: "Relación uno a muchos",
                },
                {
                  enunciado: "¿Qué comando de Prisma aplica los cambios del schema a la base de datos?",
                  opciones: ["prisma migrate dev", "prisma apply", "prisma deploy"],
                  respuestaCorrecta: "prisma migrate dev",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "ReactJS desde cero",
      descripcion: "Aprende a construir interfaces interactivas con ReactJS",
      lecciones: {
        create: [
          {
            nombre: "Introducción a React",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué es ReactJS?",
                  opciones: [
                    "Un framework de backend",
                    "Una librería para construir interfaces de usuario",
                    "Un sistema de base de datos",
                  ],
                  respuestaCorrecta: "Una librería para construir interfaces de usuario",
                },
                {
                  enunciado: "React se basa principalmente en qué concepto?",
                  opciones: ["Componentes", "Servicios", "Controllers"],
                  respuestaCorrecta: "Componentes",
                },
              ],
            },
          },
          {
            nombre: "JSX y Renderizado",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué es JSX?",
                  opciones: [
                    "Un lenguaje de bases de datos",
                    "Una sintaxis que mezcla HTML y JavaScript",
                    "Un framework de estilos",
                  ],
                  respuestaCorrecta: "Una sintaxis que mezcla HTML y JavaScript",
                },
                {
                  enunciado: "¿Qué método se usa para renderizar un componente en el DOM?",
                  opciones: ["ReactDOM.render", "document.createElement", "React.renderDOM"],
                  respuestaCorrecta: "ReactDOM.render",
                },
              ],
            },
          },
          {
            nombre: "Estado y Props",
            preguntas: {
              create: [
                {
                  enunciado: "¿Cómo se pasa información de un componente padre a un hijo?",
                  opciones: ["state", "props", "context"],
                  respuestaCorrecta: "props",
                },
                {
                  enunciado: "¿Qué hook se usa para manejar estado en componentes funcionales?",
                  opciones: ["useState", "useEffect", "useContext"],
                  respuestaCorrecta: "useState",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "AWS para desarrolladores",
      descripcion: "Aprende a desplegar y administrar aplicaciones en la nube con AWS",
      lecciones: {
        create: [
          {
            nombre: "Introducción a AWS",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué es AWS?",
                  opciones: [
                    "Un lenguaje de programación",
                    "Un proveedor de servicios en la nube",
                    "Un framework de backend",
                  ],
                  respuestaCorrecta: "Un proveedor de servicios en la nube",
                },
                {
                  enunciado: "¿Cuál de estos servicios es de AWS?",
                  opciones: ["S3", "MySQL", "ReactJS"],
                  respuestaCorrecta: "S3",
                },
              ],
            },
          },
          {
            nombre: "EC2 y despliegue de servidores",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué es EC2 en AWS?",
                  opciones: [
                    "Un servicio de almacenamiento",
                    "Un servicio de instancias de servidor virtual",
                    "Un servicio de base de datos",
                  ],
                  respuestaCorrecta: "Un servicio de instancias de servidor virtual",
                },
                {
                  enunciado: "¿Cuál es el sistema operativo más común para EC2?",
                  opciones: ["Linux", "Windows Phone", "Android"],
                  respuestaCorrecta: "Linux",
                },
              ],
            },
          },
          {
            nombre: "S3 y almacenamiento",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué tipo de almacenamiento ofrece S3?",
                  opciones: ["Bloques", "Objetos", "Relacional"],
                  respuestaCorrecta: "Objetos",
                },
                {
                  enunciado: "¿S3 puede servir archivos directamente a internet?",
                  opciones: ["Sí", "No"],
                  respuestaCorrecta: "Sí",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "TypeScript básico",
      descripcion: "Aprende los conceptos básicos de TypeScript",
      lecciones: {
        create: [
          {
            nombre: "Tipos de datos",
            preguntas: {
              create: [
                {
                  enunciado: "¿Cuál es el tipo de dato para números en TypeScript?",
                  opciones: ["int", "number", "float"],
                  respuestaCorrecta: "number",
                },
                {
                  enunciado: "¿Cómo se declara un array de strings?",
                  opciones: ["string[]", "array<string>", "List<string>"],
                  respuestaCorrecta: "string[]",
                },
              ],
            },
          },
          {
            nombre: "Interfaces y tipos",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué palabra clave define una interface?",
                  opciones: ["type", "interface", "class"],
                  respuestaCorrecta: "interface",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "Git y control de versiones",
      descripcion: "Aprende a usar Git para gestionar proyectos",
      lecciones: {
        create: [
          {
            nombre: "Comandos básicos",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué comando crea un repositorio git?",
                  opciones: ["git init", "git start", "git create"],
                  respuestaCorrecta: "git init",
                },
                {
                  enunciado: "¿Qué comando sube los cambios al repositorio remoto?",
                  opciones: ["git push", "git commit", "git pull"],
                  respuestaCorrecta: "git push",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "HTML y CSS",
      descripcion: "Aprende a construir páginas web estáticas",
      lecciones: {
        create: [
          {
            nombre: "Estructura básica",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué etiqueta define un párrafo en HTML?",
                  opciones: ["<p>", "<div>", "<span>"],
                  respuestaCorrecta: "<p>",
                },
              ],
            },
          },
          {
            nombre: "Estilos con CSS",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué propiedad cambia el color de fondo?",
                  opciones: ["color", "background-color", "font-color"],
                  respuestaCorrecta: "background-color",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "Node.js básico",
      descripcion: "Introducción a Node.js y desarrollo backend",
      lecciones: {
        create: [
          {
            nombre: "Instalación y conceptos",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué comando verifica la versión de Node.js?",
                  opciones: ["node --version", "npm --version", "node version"],
                  respuestaCorrecta: "node --version",
                },
              ],
            },
          },
          {
            nombre: "Módulos y require",
            preguntas: {
              create: [
                {
                  enunciado: "¿Cómo se importa un módulo en Node.js?",
                  opciones: ["import", "require", "include"],
                  respuestaCorrecta: "require",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "Bases de datos relacionales",
      descripcion: "Aprende SQL y diseño de bases de datos",
      lecciones: {
        create: [
          {
            nombre: "SQL básico",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué comando se usa para seleccionar datos?",
                  opciones: ["SELECT", "GET", "FIND"],
                  respuestaCorrecta: "SELECT",
                },
              ],
            },
          },
          {
            nombre: "Relaciones entre tablas",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué tipo de relación conecta muchas filas de una tabla con una fila de otra?",
                  opciones: ["Uno a uno", "Uno a muchos", "Muchos a muchos"],
                  respuestaCorrecta: "Uno a muchos",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "Testing en JavaScript",
      descripcion: "Aprende a escribir pruebas unitarias y de integración",
      lecciones: {
        create: [
          {
            nombre: "Introducción a pruebas",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué librería se usa comúnmente para testing en JS?",
                  opciones: ["Jest", "Mocha", "Todas las anteriores"],
                  respuestaCorrecta: "Todas las anteriores",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "Docker básico",
      descripcion: "Aprende a contenerizar aplicaciones",
      lecciones: {
        create: [
          {
            nombre: "Conceptos y contenedores",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué comando inicia un contenedor?",
                  opciones: ["docker run", "docker start", "docker create"],
                  respuestaCorrecta: "docker run",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "Python para principiantes",
      descripcion: "Aprende Python desde cero",
      lecciones: {
        create: [
          {
            nombre: "Sintaxis básica",
            preguntas: {
              create: [
                {
                  enunciado: "¿Cómo se imprime un texto en Python?",
                  opciones: ["print()", "console.log()", "echo"],
                  respuestaCorrecta: "print()",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "Scrum y metodologías ágiles",
      descripcion: "Aprende a trabajar con Scrum y gestión ágil de proyectos",
      lecciones: {
        create: [
          {
            nombre: "Roles y ceremonias",
            preguntas: {
              create: [
                {
                  enunciado: "¿Quién lidera el equipo en Scrum?",
                  opciones: ["Scrum Master", "Product Owner", "Developer"],
                  respuestaCorrecta: "Scrum Master",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.curso.create({
    data: {
      nombre: "Seguridad web básica",
      descripcion: "Aprende fundamentos de seguridad en aplicaciones web",
      lecciones: {
        create: [
          {
            nombre: "Conceptos de seguridad",
            preguntas: {
              create: [
                {
                  enunciado: "¿Qué es XSS?",
                  opciones: [
                    "Cross-Site Scripting",
                    "Una base de datos",
                    "Un tipo de framework",
                  ],
                  respuestaCorrecta: "Cross-Site Scripting",
                },
              ],
            },
          },
        ],
      },
    },
  });
}

async function runSeed() {
  try {
    await main()
    console.log("Seed ejecutado correctamente")
  } catch (e) {
    console.error("Error ejecutando el seed:", e)
  } finally {
    await prisma.$disconnect()
  }
}

runSeed()
