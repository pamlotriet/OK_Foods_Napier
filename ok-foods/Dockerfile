
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .
RUN npm run build
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/package.json ./
RUN npm i --only=production
COPY --from=build /app/dist/ /app/dist/
EXPOSE 80
CMD ["npm", "run", "serve:ssr"]