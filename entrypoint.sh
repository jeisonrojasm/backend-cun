#!/bin/sh

# Esperar a que Postgres esté listo
until nc -z local-db 5432; do
  echo "Esperando a Postgres..."
  sleep 1
done

echo "Postgres está listo 🚀"

# Crear y aplicar migraciones automáticamente
npx prisma migrate dev --name init --skip-generate

# Generar cliente de Prisma
npx prisma generate

# Ejecutar el script de seed
npm run seed

# Arrancar la app NestJS
npm run start:dev
