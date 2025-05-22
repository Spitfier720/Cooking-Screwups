# Cooking-Screwups

A personal log that stores the mistakes one might make while cooking, and improvements they would like to work on.

# Startup

## Local
1. Using two terminal windows, have one terminal at the frontend folder, and the other one on the backend folder.
2. For the backend folder, run `node server.js`. It should say that it is running on localhost:5000.
3. For the frontend folder, run `npm run dev`. It should run on localhost:5173.
**NOTE:** Be sure to run the backend folder first. The frontend folder relies on the backend folder for some information, and running the frontend first can cause the information to not load due to a non-running server.

## Docker
1. Ensure that you have Docker installed. If you don't, you can install [here](https://docs.docker.com/engine/install/)
2. Run `docker-compose build`. This will take a few minutes if it's the first time you run this command for this project.
3. Run `docker-compose up -d`. After that, both frontend and backend should be up and running properly, which you can access via Docker Desktop. You can also now run it from Docker Desktop as well.

<details>
<summary> <b> React + Vite Information </summary>

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
</details>