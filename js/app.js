// La funcionalidad de tu proyecto
window.addEventListener('load', function(event) {
    
    var buttonDropdown = document.getElementById('button-dropdown');
    var content = document.getElementsByTagName('main')[0];
    
    buttonDropdown.addEventListener('click', function(event) {
        if (content.classList.contains('increse-height')) {
          content.classList.add('decrease-height');
          content.classList.remove('increse-height');
        } else {
            content.classList.add('increse-height');
            content.classList.remove('decrease-height');
        }
    })
    
    //MAP
    $(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});
})
