/**
 * Created by joaopedreira on 19/06/2017.
 */

function handleMenus(menuSelector,legendaSelector) {
    $(document).ready(function () {
        document.getElementById("menu").addEventListener("click", function(){
            document.getElementById(menuSelector).style.display = 'block';
            document.getElementById(legendaSelector).style.display = 'none';
        });

        document.getElementById("close").addEventListener("click", function(){
            document.getElementById(menuSelector).style.display = 'none';
        });

        document.getElementById("seta-footer").addEventListener("click", function(){
            document.getElementById(legendaSelector).style.display = 'block';
            document.getElementById(menuSelector).style.display = 'none';
        });

        document.getElementById("seta-baixo").addEventListener("click", function(){
            document.getElementById(legendaSelector).style.display = 'none';
        });
    })
}
