# Angular applications with NgRx and Nx

The **Angular-Reduxr** project will walk through a thorough introduction into using NgRx, an RxJS powered state management library for Angular applications, inspired by Redux. We will use Nx CLI and Nrwl Plugins, an open source toolkit for enterprise applications. Nx was designed to help you create and build enterprise-grade Angular applications with proven project structure and patterns.

- Angular mono repo architecture with the CLI and nx workspaces
- Building shared nx libraries with NgRx
- Redux and NgRx principles
- Angular fundamentals including components, routing, services and forms

<br><br>

## Nx Commands

- npx create-nx-workspace@latest (new nx workspace)
- nx generate @nrwl/angular:app customer-portal --routing (new customer-portal app)
- nx generate @nrwl/angular:lib auth --routing (new lib called auth)
- nx generate @nrwl/angular:component containers/login --project=auth (new container component to the auth lib)
  <br><br>

## Run individual project

```
nx serve <project-name>

Example: nx serve customer-portal
```

## Remove an application from the Nx Monorepo

```
npx nx generate @nrwl/workspace:remove --projectName=name
```

# Angular Redux

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
