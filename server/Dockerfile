# https://github.com/nodejs/docker-node/blob/main/20/alpine3.19/Dockerfile 

# Install dependencies only when needed
FROM node:20-alpine3.19 AS dependencies
RUN apk add --no-cache libstdc++
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Build the app with cache dependencies
FROM node:20-alpine3.19 AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM node:20-alpine3.19 AS runner
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY --from=builder /app/dist ./dist
RUN npm install --prod

CMD [ "node", "dist/main" ]
