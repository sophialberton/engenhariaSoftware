function log(msg) {
  console.log('[INFO]', msg);
}

function error(msg) {
  console.error('[ERRO]', msg);
}

module.exports = {
  log,
  error
};
