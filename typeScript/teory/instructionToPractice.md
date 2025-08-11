# 🛠️ How to Compile and Run TypeScript Files

## 1️⃣ Compile TypeScript to JavaScript

Use the TypeScript compiler (`tsc`) to convert your `.ts` file into a `.js` file:

```bash
tsc "namefile.ts"
```
- #### 📝 What happens?
    This command takes your TypeScript code and generates a JavaScript file with the same name (e.g., namefile.js).

## 2️⃣ Run the JavaScript File with Node.js
After compiling, run the generated JavaScript file using Node.js:

```bash
node "namefile.js"
```


- #### 🚀 Why do we do this?
    Bowsers and Node.js cannot execute TypeScript files directly.
    TypeScript must be compiled to JavaScript, which is the language that browsers and Node.js understand and can execute.

## 3️⃣ Watch Mode for Automatic Compilation
You can use the `--watch` flag to automatically recompile your TypeScript file whenever you save changes:
```bash
tsc "nameFile.ts" --watch
```


- #### 👀 What does `--watch` do?
    The compiler stays running and monitors your file.
    Every time you save changes to your .ts file, it will automatically recompile to .js without needing to run the command again.

## 💡 Summary
- ✨ Write your code in `.ts` files.
- 🔄 Compile with `tsc` to generate .js files.
- ⚡ Run the JavaScript with `Node.js` or in the browser.
- 👷 Use `--watch` for a smoother development experience!