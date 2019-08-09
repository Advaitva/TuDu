
$('ul').on("click","li",function(){

	// if($(this).css("color")==="rgb(128, 128, 128)")
	// 	$(this).css({
	// 		color:"black",
	// 		textDecoration:"none",
	// 		fontWeight:"normal"
	// 	})
	// else
	// 	$(this).css({
	// 		color:"gray",
	// 		textDecoration:"line-through",
	// 		fontWeight:"bold"
	// 		});	
	$(this).toggleClass("todoCompleted");
	//Above one is More Efficient.a
});

$('ul').on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){   //for fading out 
		$(this).remove();						// for removing the element
	});//V V Important - Parent
	event.stopPropogation();//Imp for stopping event bubbling
});

$("input[type='text']").keypress(function(event){
	if(event.which===13)
	{
		addTodo=$(this).val();
		$(this).val("");
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> "+addTodo+"</li>");
	}
});

$('.fa-pencil-square-o').on("click",function(event){
	$('#inputHide').toggleClass("inputHide");
})
