'use strict';
$(() => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };
  $.ajax('./data/people.json', ajaxSettings)
    .then(data => {
      console.log(data.results);
    });
});
