-- CreateTable
CREATE TABLE "public"."Curso" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Leccion" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "cursoId" INTEGER NOT NULL,

    CONSTRAINT "Leccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pregunta" (
    "id" SERIAL NOT NULL,
    "enunciado" TEXT NOT NULL,
    "opciones" TEXT[],
    "respuestaCorrecta" VARCHAR(100) NOT NULL,
    "leccionId" INTEGER NOT NULL,

    CONSTRAINT "Pregunta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Leccion" ADD CONSTRAINT "Leccion_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "public"."Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pregunta" ADD CONSTRAINT "Pregunta_leccionId_fkey" FOREIGN KEY ("leccionId") REFERENCES "public"."Leccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
