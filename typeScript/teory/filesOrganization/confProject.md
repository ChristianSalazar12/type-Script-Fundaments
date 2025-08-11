To set up a web project with TypeScript, follow these steps:

1. **Create a folder structure**, for example:
   - `public` (for HTML and JS files)
   - `src` (for TypeScript files)

2. In the terminal, navigate to your project folder and run:

   ```bash
   tsc --init
   ```

3. Update your `tsconfig.json` file to specify the output directory for the compiled JavaScript files. Modify the `compilerOptions` section like so:

   ```json
   {
     "compilerOptions": {
       "outDir": "./public/scripts",
       // Other necessary configurations
     }
   }
   ```
   ## Example
   Your can copy the next config
   ```json
   {
     "compilerOptions": {
       "outDir": "./public/scripts",
       "target": "ES6",//Js version to copilate
       "module": "CommonJS",
       "strict":true
     }
   }
   ```

4. In your HTML file, reference the compiled JavaScript file:

   ```html
   <script src="scripts/main.js"></script>
   ```
## Visual Version
![alt text](/typeScript/assets/image.png)

