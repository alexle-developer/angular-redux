# Angular applications with NgRx and Nx

The **Angular-Redux** project will walk through a thorough introduction into using NgRx, an RxJS powered state management library for Angular applications, inspired by Redux. We will use Nx CLI and Nrwl Plugins, an open source toolkit for enterprise applications. Nx was designed to help you create and build enterprise-grade Angular applications with proven project structure and patterns.

- Angular mono repo architecture with the CLI and nx workspaces
- Building shared nx libraries with NgRx
- Redux and NgRx principles
- Angular fundamentals including components, routing, services and forms

<br>

# Nx

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `nx serve nx-integrated-repo` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
<br>
<br>

## Nx Commands

### We can also use the Nx Console UI to create these commands

- npx create-nx-workspace@latest (new nx workspace)
- nx generate @nrwl/angular:app customer-portal --routing (new customer-portal app)
- nx generate @nrwl/angular:lib auth --routing (new lib called auth)
- nx generate @nrwl/angular:component containers/login --project=auth (new container component to the auth lib)
- nx generate @nrwl/angular:component components/login-form --project=auth (new presentational component to the auth lib)
- nx generate @nrwl/angular:service services/auth/auth --project=auth (new service in the auth lib)
- nx generate @nrwl/angular:lib material (new Nx lib for angular material)
- nx generate @nrwl/angular:lib layout (new Layout lib)
- nx generate @nrwl/angular:component containers/layout --project=layout (add a layout container to project layout)
- nx generate @nrwl/angular:lib products --routing --lazy --parent=apps/customer-portal/src/app/app.module (add a lazy loaded lib with routing)
- nx g @nrwl/angular:component containers/products --project=products (add a products container component)
- nx g @nrwl/angular:guard guards/auth/auth --project=auth (add a route guard to protect products page)
- nx g @nrwl/angular:ngrx --parent=apps/customer-portal/src/app/app.module.ts --minimal true (add NgRx to Customer Portal App)
- nx g @nrwl/angular:ngrx --parent=libs/auth/src/lib/auth.module.ts --minimal false (add NgRx Auth lib making it a state)

<br><br>

## Run individual project

Example: nx serve customer-portal <project-name>

```
nx serve <project-name>
```

<br>

## Remove an application from the Nx Monorepo

```
npx nx generate @nrwl/workspace:remove --projectName=name
```

  <br>
  <br>

## JSON-SERVER Setup

1. install JSON-SERVER globablly (if you have not done it already)

```
npm install -g json-server
```

2. install JSON-SERVER in the root of your project

```
npm install json-server --save-dev
```

3. make a new folder called "server" in the root of your project (e.g. nx-angular\server)
4. add a file call db.json for mock data (you can view the content of this file in the project)
5. add this command **"json-server": "json-server server/db.json"** to the package.json under the script section

```json
  "scripts": {
      "start": "nx serve",
      "build": "nx build",
      "test": "nx test",
      "server": "node server/server.js"
    },
```

6. run JSON-SERVER locally using command line
   ```
   npm run server
   ```
7. Navigate to localhost:3000 in the browser

   You should see the messge below

   > JSON Server
   >
   > Congrats!
   >
   > You're successfully running JSON Server

8. Click on the endpoints and the results should match the content of db.json file

9. Resource: https://www.geeksforgeeks.org/json-server-setup-and-introduction/

  <br>
  <br>

## Install Angular Material

1. Install angular material, angular animations and angular flex layout

   > **Note:**
   > As of Angular v6 you no longer need to manually add Angular material
   > you can use the new "Add" CLI command. However this is not how you do it with Nx.
   >
   > Always use the same Major version of Material as your Angular CLI and packages.

   ```
   npm install @angular/material @angular/cdk @angular/flex-layout @angular/animations --save
   ```

## Source:

https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/
