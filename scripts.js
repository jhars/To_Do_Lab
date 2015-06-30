$(function(){

//--------------------- VARIABLES--------------//
var $newItem = $('#new-item');
// $newItem.submit(function(){
var $itemName = $('#item-name');
var $toDoList = $('ul');
var $listItems = $('li');

var $description = $('#item-description');
var $date = $('#date');




//----------------STRIKE-THRU------------------//

	$('ul').on('click','li',function(event){
		event.preventDefault();
		$(this).addClass("done");
		$(this).fadeOut('slow');
		});


//---------------- SUBMIT FORM BUTTON ---------------------//

$newItem.on('submit', function(event){
	event.preventDefault();
	console.log($itemName.val());

	$toDoList.append('<li>' + $itemName.val() + '<br> Description: <p>' + $description.val()
	 + '</p><p>Date: ' +$date.val() + '</p></li>');
	$('.form-control').clearForm();



	var start = new Date($date.val()),
	end   = new Date(),
	diff  = new Date(start-end),
	days  = diff/1000/60/60/24;
	
	if (days<4){
		$('li').last().addClass("urgent");
	};



	});

// if DUE-DATE - TODAY's DATE <= 3 Days 
//>> turn entire item RED




















// --------------------- CLEAR FORM -----------------------//
$.fn.clearForm = function() {
  return this.each(function() {
    var type = this.type, tag = this.tagName.toLowerCase();
    if (tag == 'form')
      return $(':input',this).clearForm();
    if (type == 'text' || type == 'password' || tag == 'textarea')
      this.value = '';
    else if (type == 'checkbox' || type == 'radio')
      this.checked = false;
    else if (tag == 'select')
      this.selectedIndex = -1;
  });
};






});