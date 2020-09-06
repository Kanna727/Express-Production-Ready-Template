module.exports = {
    apps: [{
        name: 'Express-production-ready-template', // PM2 App name
        script: 'scripts.js', // script to execute
        instances: "max", // max instances of our app
        exec_mode: 'cluster', // runs our app with multiple instances
        env: {
            NODE_ENV: "development", // sets runtime environment
            args: 'dev', // arguments to the script
            watch: true // reloads when app changes
        },
        env_test: {
            NODE_ENV: "production",
            args: 'test',
        },
        env_production: {
            NODE_ENV: "production",
            args: 'prod',
        },
    }]
};