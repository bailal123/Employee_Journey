


    $(document).ready(function () {
	/*Step 1 Func*/
        $('.ex-next-loan').click(function () {		
            // Animate the div element. A duration is set to 500 milliseconds.
            //$(".ex-ind-02").animate({}, 500);
            $('.ex-ind-02').show(500);			
			$('.ex-step-02').show(500); 
			$('.ex-ind-02').show(500); 
        });
	/*End Step 1*/
     /*Step2 Func*/
	 $('.ex-next-02').click(function () {		         
            $('.ex-ind-03').show(500);         		
			$('.ex-step-03').show(500); 
			$('.ex-ind-03').show(500); 
        });
	 /*End Step 2*/	 
	  /*Step3 Func*/
	 $('.ex-next-03-init-ok').click(function () {		         
            $('.ex-step-04-loan').show(500);         					
			$('.ex-ind-04').show(500); 
			$('.ex-step-line-04').show(500); 
        });
	 /*End Step 3*/
	  /*Step4 Func*/
	 $('.ex-next-readyHouseL').click(function () {		         
            $('.ex-step-05-readyhouseL').show(500);         					
			$('.ex-ind-05').show(500); 
			$('.ex-ind-05').show(500); 
        });
	 /*End Step 4*/
	   /*Step5 Func*/
	 $('.ex-next-05-approved').click(function () {		         
            $('.ex-step-06-loan').show(500);         					
			$('.ex-ind-06').show(500); 
			$('.ex-ind-06').show(500); 
        });
	 /*End Step 5*/
    });

