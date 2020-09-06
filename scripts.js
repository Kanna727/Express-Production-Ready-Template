var cmd = require('node-cmd');

switch (process.argv.slice(2)[0]) {
    case 'dev':
        cmd.run('npm run-script start:dev');
        break;
    case 'test':
        cmd.run('npm run-script start:test');
        break;
    case 'prod':
        cmd.run('npm run-script start:prod');
        break;
    default:
        console.log('Invalid env argument');
        process.exit(1);
}