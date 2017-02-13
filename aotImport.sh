cp node_modules/primeng/resources/primeng.min.css aot
cp node_modules/core-js/client/shim.min.js aot
cp node_modules/reflect-metadata/Reflect.js aot
cp node_modules/systemjs/dist/system.src.js aot
cp node_modules/zone.js/dist/zone.js aot
rm -r aot/resources
cp -r src/resources aot
mkdir -p aot/node_modules/primeng/resources/themes/omega/fonts
cp node_modules/primeng/resources/themes/omega/fonts/* aot/node_modules/primeng/resources/themes/omega/fonts
cp node_modules/primeng/resources/themes/omega/theme.css aot/node_modules/primeng/resources/themes/omega
