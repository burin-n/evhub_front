FROM node:7
RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app
ENV PORT=8080
EXPOSE 8080 
RUN npm update
CMD ["npm","start"]

