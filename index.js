/**
 * Export `uid`
 */

module.exports = uid;

/**
 * Create a `uid`
 */

function uid(len) {
  len = len || 7;
  return Math.random().toString(36).substr(2, len);
}
