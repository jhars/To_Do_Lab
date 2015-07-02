$(function(){

//--------------------- VARIABLES--------------//
// var $toDoList = $('ul');
// var $listItems = $('li');
var $itemName = $('#item-name');
var $description = $('#item-info');
var $date = $('#item-date');

//---------------------------------------------//


var $toDoList = $('#to-do-list');
var $newItem = $('#new-item');


var myTasks = [
{task:"Dr. Appointment",taskInfo:"new doctor 3838 California",date:"07/07/2015"},
{task:"Homework",taskInfo:"General Assembly Lab",date:"07/04/2015"},
{task:"Dinner",taskInfo:"with Maddie",date:"07/08/2015"}
];

var toDoTemplate = _.template($('#to-do-template').html());

_.each(myTasks, function (myTasks, index){
	var $myTasks = $(toDoTemplate(myTasks));
	$toDoList.append($myTasks);
});





//---------------- SUBMIT FORM BUTTON ---------------------//

$newItem.on('submit', function(event){
	event.preventDefault();
	var newTask = $('#item-name').val();
	var newTaskInfo = $('#item-info').val();
	var newTask_Date = $('#item-date').val();

	var newTaskData = {task: newTask,taskInfo: newTaskInfo,date: newTask_Date};

	myTasks.push(newTaskData);
	console.log(myTasks);

	var index = myTasks.indexOf(newTaskData);
	var $todo = $(toDoTemplate(newTaskData));
	$toDoList.append($todo);


// ------------------reset the form-----------//

  //   $newToDo[0].reset();
  //   $('#todo-name').focus()

	$('.form-control').clearForm();

//----------------STRIKE-THRU------------------//

	$('ul').on('click','li',function(event){
		event.preventDefault();
		$(this).addClass("done");
		$(this).fadeOut('slow');
		});

//--------------------Date = RED---------------//

	var start = new Date($date.val()),
	end   = new Date(),
	diff  = new Date(start-end),
	days  = diff/1000/60/60/24;
	
	if (days<4){
		$('li').last().addClass("urgent");
	};


	});




















// --------------------- CLEAR FORM -----------------------//

// reset--------------//

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