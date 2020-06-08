FROM node:lts-alpine AS builder
COPY . ./medicos-de-rua
WORKDIR /medicos-de-rua
RUN npm i
RUN $(npm bin)/ng build

FROM nginx:1.15.8-alpine
COPY --from=builder /medicos-de-rua/dist/MedicosDeRua/ /usr/share/nginx/html