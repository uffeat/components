# Install
npm init
npm install parcel --save-dev
npm install @swc/helpers --save-dev

# Add source etc. to package.json (e.g., below the "name" line)
"source": "components.js",
"main": "dist/main.js",
"module": "dist/components.js",

# Add scripts to package.json
"scripts": {
    "watch": "parcel watch",
    "build": "parcel build"
  },

# Add browserslist to package.json
 "browserslist": "> 5%, last 2 years, not dead"

# Update .gitignore
node_modules

# Build for production (builds to dist/index.html)
npm run build
