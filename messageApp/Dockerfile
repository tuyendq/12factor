FROM node:8.2.1-alpine
ENV LAST_UPDATED 20200626T185600

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Expose API port to outsite
ENV PORT 80
EXPOSE 80

# Launch application
CMD ["npm", "start"]