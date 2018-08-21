// CSS and SASS files
import 'bootstrap';
import $ from 'jquery';
import './index.scss';

$.getJSON('https://cfyy3d57ng36.statuspage.io/api/v2/status.json', (data) => {
  $(() => {
    $('.status-description').text(data.status.description);
    $('.status-indicator span').replaceWith($(`<i class="indicator ${data.status.indicator} fa fa-circle"></i>`));
  });
});

console.log('frist');
