document.addEventListener('DOMContentLoaded', function() {
    // sidebar initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmm, yyyy",
      i18n: {done:"Select"}
    });

    // select initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});