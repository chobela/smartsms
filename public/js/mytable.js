$(function() {
    $("#myexample").DataTable({
        dom: 'Bfrtip',
        bDestroy: true,
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    });
  });