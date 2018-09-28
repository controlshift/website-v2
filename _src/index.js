// CSS and SASS files
import 'bootstrap';
import jQuery from 'jquery';

jQuery.getJSON('https://cfyy3d57ng36.statuspage.io/api/v2/status.json', (data) => {
  jQuery(() => {
    jQuery('.status-description').text(data.status.description);
    jQuery('.status-indicator span').replaceWith(jQuery(`<i class="indicator ${data.status.indicator} fa fa-circle"></i>`));
  });
});

/* global zE */

jQuery(() => {
  jQuery('.lets-talk').on('click', () => {
    zE.activate();
  });
});
