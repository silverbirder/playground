const translate = require("deepl");

translate({
    text: 'I am a text',
    target_lang: 'FR',
    auth_key: 'authkey',
    // All optional parameters available in the official documentation can be defined here as well.
  })
  .then(result => {
      console.log(result.data);
  })
  .catch(error => {
      console.error(error)
  });