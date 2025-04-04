# Introduction
Today we'll learn how to build a simple modular monolith with Fastify and typescript.

# Step 1
- npm init
- pnpm i
- pnpm add typescript
- pnpm add fastify
- pnpm add @fastify/autoload
- pnpm add fastify-plygin

# Step 2
- Add "dev" script in package.json
    ```
        "dev": "tsx watch src/index.ts"
    ```
- Add index.ts file with fastify initial configuration

# Step 3
- Add autoload plugin for fastify to scan modules folder
- Add a new module and start continue with the talk.
