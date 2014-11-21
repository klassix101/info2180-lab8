window.onload = function()
{
 getData();
};

 function getData()
{
 
    $("lookup").observe('click',function()
	{
		
		
	
	      	var click = $("all");
        var term = $("term").getValue();
        var selected = click.checked === true;
        var notSelected = click.checked === false;
        
	
	if (selected)
        {
           term = null;
           new Ajax.Request("world.php",
         		{method:'get', 
         		parameters:{lookup:term},
         		onSuccess:function(transport)
         		{ 
         		 var response = transport.responseText || "no response text";
         			alert(response);
         			$('result').update(response);
			
	         	},onFailure: function(){alert('No response recieved');}
	
           });
           
        }
        
		      else if (selected && term)
        {
           term = null;
           new Ajax.Request("world.php",
         		{method:'get', 
         		parameters:{lookup:term},
         		onSuccess:function(transport)
         		{ 
         			var response = transport.responseText || "no response text";
         			alert(response);
         			$('result').update(response);
         			
         		},onFailure: function(){alert('Did not receive a response...');}
         	
           });
           
        }
        
        else if (selected && (term === null))
        {
            term = null;
            new Ajax.Request("world.php",
          		{method:'get', 
          		parameters:{lookup:term},
          		onSuccess:function(transport)
          		{ 
          			var response = transport.responseText || "no response text";
          			alert(response);
          			$('result').update(response);
          			
          		},onFailure: function(){alert('Did not receive a response...');}
          	
            });
            
         }
        
        else if (notSelected && term)
        {
            new Ajax.Request("world.php",
          		{method:'get', 
          		parameters:{lookup:term},
          		onSuccess:function(transport)
          		{ 
          			var response = transport.responseText || "no response text"; 
          			alert(response);
          			$('result').update(response);
          			
          		},onFailure: function(){alert('Did not receive a response...');}
          	
            });
           
        }
        
		else
		{
		 alert ("No country entered");
		 $('result').update("No country entered");
		}
		
		
		
	});


}
