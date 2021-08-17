## Simple Graphql Apollo Mock Data API

---

### running locally

1. clone this repository
>git clone https://github.com/shimpeif/mock-data-api

2. install all npm modules in the cloned directory
>npm install

3. run the dev server
>npm run dev

4. Enter **localhost:5050/graphql** into the address bar on the browser

### running inside Docker container

1. same as above

2. build image from Dockerfile
>docker build -t mock-data-api .

3. run a container from the image
>docker run -d -p 5050:5050 mock-data-api

4. Enter **localhost:5050/graphql** into the address bar on the browser



