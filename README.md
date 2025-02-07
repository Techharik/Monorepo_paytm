# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## setting taiwlind css - 

For Easy setup use dograded version no 4.0 latest;

Follow the steup guide in frameworks gudie in tailwind css Nextjs and in tailwind config add the packages folder also;

```
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory: for mono repo
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

## Adding Prisma;

create a db folder in inside the package

```
npm init -y

```

create a ts

```
npx tsc --init

```
Add a src index.ts file

```
npx prisma init
```

Add the database url and update the schema 

```
npx prisma migrate dev --name nameformigaret
npx prisma generate
```
Inside the index.ts file add the 

export * from prisma/client;

Move to the packages.json and add a exort 

```
"export":{
    './client' :"./src/index/js"
}
```

Mpve the file director of the application user-apps

In package.json add the @repo/db : "*"

npm install 

and use the prisma from the 

```
import of "@repo/db/client"

```
