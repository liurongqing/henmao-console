module.exports = {
  apps: [
    {
      name: 'henmao-console',
      script: 'npm start',
      watch: false,
      ignore_watch: ['node_modules', 'log'],
    },
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: '182.254.138.39',
      ref: 'origin/main',
      repo: 'git@github.com:liurongqing/henmao-console.git',
      path: '/home/ubuntu/console',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
