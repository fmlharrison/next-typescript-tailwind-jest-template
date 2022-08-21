# Next.js with Typescript, Tailwind, Jest and React Testing Library template

This is a really simple project template that can be used to setup a project using Next.js with TypeScript, TailwindCSS, Jest and React Testing Library.

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/fmlharrison/next-typescript-tailwind-jest-template.git <YOUR_APP_NAME>
```

```bash
yarn create next-app --example https://github.com/fmlharrison/next-typescript-tailwind-jest-template.git <YOUR_APP_NAME>
```

```bash
pnpm create next-app --example https://github.com/fmlharrison/next-typescript-tailwind-jest-template.git <YOUR_APP_NAME>
```

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
