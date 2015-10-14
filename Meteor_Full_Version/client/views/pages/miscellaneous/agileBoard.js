Template.agileBoard.rendered = function(){

    // Initialize sortable
    $(".sortable-list").sortable({
        connectWith: ".connectList"
    }).disableSelection();
};