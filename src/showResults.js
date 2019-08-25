
export default (async function showResults(values) {
  window.console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
