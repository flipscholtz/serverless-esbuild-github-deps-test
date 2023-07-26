const { getLocalExecutor } = require('@identity.com/casper-gatekeeper-lib');

exports.handler = async function (event, context) {
    // Make sure the github-referenced sub-package is included in the AST by using a function that exercises it here:
    console.log('local executor', getLocalExecutor());
    return context.logStreamName;
};