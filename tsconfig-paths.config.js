const tsConfig = require('./tsconfig.server.json')
const tsConfigPaths = require('tsconfig-paths')

const { baseUrl, paths } = tsConfig.compilerOptions

// Replacing "src" by "dist" in typescript paths map
for (path in paths) {
  paths[path] = paths[path].map((path) => path.replace('src', 'dist'))
}

tsConfigPaths.register({ baseUrl, paths })