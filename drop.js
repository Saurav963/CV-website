// For drop down menu

//the code executes when the menu icon is clicked ,and creates a smooth drop down menu

      $(document).ready(function() {
            $(".menu-icon").on("click", function() {          // if the following menu-icon is clicked, showing class is added
                  $("nav ul").toggleClass("showing");
            });
      });


     