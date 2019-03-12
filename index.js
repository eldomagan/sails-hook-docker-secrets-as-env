const loadDockerSecretsAsEnv = require('docker-secrets-as-env')

module.exports = function loadDockerSecretsAsEnvHook () {
    return {
        configure: function (next) {
            loadDockerSecretsAsEnv()
            next()
        }
    }
}