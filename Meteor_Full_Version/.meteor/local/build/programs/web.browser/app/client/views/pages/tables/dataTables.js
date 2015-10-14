(function(){Template.dataTables.rendered = function(){

    // Initialize dataTables
    $('.dataTables-example').dataTable({
        "dom": 'lTfigt',
        "tableTools": {
            "sSwfPath": "swf/copy_csv_xls_pdf.swf"
        }
    });

};

})();
