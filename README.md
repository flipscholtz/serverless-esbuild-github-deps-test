## serverless-esbuild: non-semver references excluded by yarn packager
This demonstrates an issue with the yarn packager in serverless-esbuild,
where github-referenced dependencies are not included in the packaged sls node_modules.

### Staps
1. Run `yarn install`
2. Note that `node_modules/@identity.com/package.json` imports a @metacask lib using a github reference:
```
 "@metacask/kyc-token-client": "git+ssh://git@github.com/mcask/kyc-token-client.git#0.3.2",
```
3. Run `yarn sls package`
4. Unzip the function `.serverless/test.zip`
5. Note that the packages node_modules has no `@metacask/kyc-token-client` dependency.


