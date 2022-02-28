FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY . .

RUN npm i 

CMD ["npm", "test", "--", "--quiet"]