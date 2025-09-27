import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.curso.create({
    data: {
      nombre: "NestJS con Prisma",
      descripcion: "Curso para aprender a usar NestJS con Prisma y PostgreSQL",
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
                  respuestaCorrecta:
                    "Un framework de Node.js para construir aplicaciones escalables",
                },
                {
                  enunciado: "¿NestJS está basado en qué lenguaje?",
                  opciones: ["TypeScript", "Python", "Java"],
                  respuestaCorrecta: "TypeScript",
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
                  opciones: [
                    "npx prisma init",
                    "npm install prisma",
                    "prisma generate",
                  ],
                  respuestaCorrecta: "npx prisma init",
                },
              ],
            },
          },
        ],
      },
    },
  })
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
