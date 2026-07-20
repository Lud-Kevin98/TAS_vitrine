# Vitrine TAS (React + Vite) — build statique servi par nginx.
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
# `npm install` (pas `npm ci`) + suppression du lock : installe le binaire natif
# rollup de la plateforme du conteneur (évite le bug npm optional deps #4828).
RUN rm -f package-lock.json && npm install --no-audit --no-fund
COPY . .
# URL du backend TAS injectée au build (le formulaire de contact poste dessus).
ARG VITE_API_BASE=https://app.tas-platform.com
ENV VITE_API_BASE=$VITE_API_BASE
RUN npm run build

FROM nginx:alpine
# Conf SPA (fallback react-router) + perf/sécurité.
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
