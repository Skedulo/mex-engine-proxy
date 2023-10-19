import fs = require('fs');

function run() {
    let proxyPackageJson = JSON.parse(fs.readFileSync('./node_modules/@skedulo/mex-engine-proxy/package.json', 'utf-8'))

    let proxyDependencies = proxyPackageJson.dependencies

    let targetPackageJsonPath = './package.json'

    let targetPackageJson = JSON.parse(fs.readFileSync(targetPackageJsonPath, 'utf-8'))
    let targetPackageJsonDependencies = targetPackageJson.dependencies

    for(let key in proxyDependencies) {
        console.log(`Updating ${key} to version ${proxyDependencies[key]}`)

        targetPackageJsonDependencies[key] = proxyDependencies[key]
    }

    fs.writeFileSync(targetPackageJsonPath, JSON.stringify(targetPackageJson, null, 2));

    console.log("Done aligning versions")
}

run();
