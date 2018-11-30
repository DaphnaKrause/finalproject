$(document).ready(function() {
  // Hide all answers
  $(".answer").hide();

  $("button").click(function() {
    switch($(this).attr("id"))
      {
        case "quiz1true":
          //  Same as quiz1true
          $("#p2").slideToggle("slow");
          $(".question1").attr("disabled", "disabled");
          break;
        case "quiz1false":
          // Make the text slide up
          $("#p3").slideToggle("slow");
          // Disable all Question 1 buttons to prevent odd behaviors
          $(".question1").attr("disabled", "disabled");
          break;
        default:
          // We shouldn't ever have this code run, but it's a good habit to use anyways
          console.log("This should never run");
      };
  });
	$("button").click(function() {
		switch($(this).attr("id"))
			{
				case "quiz2true":
				//  Same as quiz1true
					$("#p4").slideToggle("slow");
					$(".question2").attr("disabled", "disabled");
					break;
				case "quiz2false":
				// Make the text slide up
					$("#p5").slideToggle("slow");
					// Disable all Question 1 buttons to prevent odd behaviors
					$(".question2").attr("disabled", "disabled");
					break;
					default:
	          // We shouldn't ever have this code run, but it's a good habit to use anyways
	          console.log("This should never run");
	      };
	  });

	$("button").click(function() {
		switch($(this).attr("id"))
			{
	  	case "quiz3true":
			//  Same as quiz1true
				$("#p6").slideToggle("slow");
				$(".question3").attr("disabled", "disabled");
				break;
		  case "quiz3false":
			// Make the text slide up
				$("#p7").slideToggle("slow");
				// Disable all Question 1 buttons to prevent odd behaviors
				$(".question3").attr("disabled", "disabled");
				break;
				default:
          // We shouldn't ever have this code run, but it's a good habit to use anyways
          console.log("This should never run");
      };
  	});

	// MY CODE IS BREAKING SOMEWHERE
		// function to hide all divs
	  function hideAll() {
	    $(".video").hide();
	  };

	  // run that function right away
	  hideAll();

		$( "#I1" ).click(function() {
       hideAll();
			$( "#V1" ).show();
		});

		$( "#I2" ).click(function() {
       hideAll();
			$( "#V2" ).show();
		});

		$( "#I3" ).click(function() {
       hideAll();
			$( "#V3" ).show();
		});

    function hiderrr() {
      $(".rrr").hide();
    };

    // run that function right away
    hiderrr();

		$( "#reducep" ).click(function() {
      hiderrr();
			$( "#reducet" ).animate({height: "toggle"}, "slow");
		});

    $( "#reusep" ).click(function() {
      hiderrr();
			$( "#reuset" ).animate({height: "toggle"}, "slow");
		});

    $( "#recyclep" ).click(function() {
      hiderrr();
			$( "#recyclet" ).animate({height: "toggle"}, "slow");
		});

	});
