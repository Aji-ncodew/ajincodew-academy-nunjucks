const chokidar = require('chokidar');
const { exec } = require('child_process');
const kill = require('tree-kill');

let devProcess = null;

// Function to start the dev process
function startDevProcess() {
  if (devProcess) {
    // If process exists, kill it and restart
    kill(devProcess.pid, 'SIGTERM', () => {
      console.log('Restarting npm run dev...');
      devProcess = exec('npm run dev');
    });
  } else {
    // If process doesn't exist, start it
    console.log('Starting npm run dev...');
    devProcess = exec('npm run dev');
  }
}

// Watch for file changes in your project directory
const watcher = chokidar.watch('./src', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

// On any change, restart the dev process
watcher.on('change', path => {
  console.log(`File ${path} has been changed`);
  startDevProcess();
});

// Start the initial process
startDevProcess();
