# Cheers-frontend

2021 Fall CS473 Project: Watching Sports Service

## Members

Dain Kim

Chigon Ryu

Subin Kim

Huikyeong An

<br />

## How to run
`npm install`

You don't have to install each modules. Just `npm install` ! Then, if there is no module you want, npm install that 

`npm start`

<br />

## Tips

- You can use absolute path like '@/images/logos/Cheers_logo.svg'

  - '@' points "src"

- Use 'styled-components' ('styled-components' is already installed)

- Try to match EsLint and Prettier

  - `npx eslint . --fix` : Formatting all files by EsLint and Prettier.

  - If you don't follow formatting, don't worry. When you commit some files, they would be formatted automatically by husky.

- Don't change version of existing modules.

  - It is to prevent conflicts between different versions.

<br />

## File Form
```
.
└── Components(Page)_Name [Folder]
    ├── Components_Name.js // main contents
    ├── index.js // helper for export default
    └── styled.js // 
```

<br />

## Commit Message Convention
`Add`: Add new components or functions.

`Refactor`: Modify components or functions.

`Fix`: Fix bugs and mistakes.
