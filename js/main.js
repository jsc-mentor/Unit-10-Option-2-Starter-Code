// var selector = '.nav li';

// $(selector).on('click', function(){
//     $(selector).removeClass('active');
//     $(this).addClass('active');
// });


var myVehicleSelection = {
	choice: '',
	price: 0
};

var myColorSelection = {
	choice: '',
	price: 0
};

var myPackageSelection = {
	choice: '',
	price: 0
};
var vehicleOptions = [
	{ choice: 'cadenza', price: 35000 },
	{ choice: 'forte', price: 20000 },
	{ choice: 'optima', price: 29050 },
	{ choice: 'sedona', price: 38650 },
	{ choice: 'soul', price: 42200}
];

var colorOptions = [
	{ choice: 'black', price: 50 },
	{ choice: 'white', price: 100 },
	{ choice: 'silver', price: 250 }
];

var packageOptions = [
	{ choice: 'Rear Camera', price: 150 },
	{ choice: 'LED positioning Light', price: 150 },
	{ choice: 'Rear Camera and LED Positioning Light', price: 200 }
];

var carSelection = {
	vehicle: { choice: "Not Selected", price: 0},
	color: { choice: "Not Selected", price: 0},
	package: { choice: "Not Selected", price: 0}
}

$('.navigation').on('click', 'li', function() {
	$('.navigation li').removeClass('active');
	$(this).addClass('active');
	//$("li[data-tab]").attr();
    // $(this).attr('data-tab');

});



$('li').on('click', function() {
  var name = $(this).data('tab');
  //var yourChoice;
  
  
  
  switch(name) {
    case 'vehicle':
      displayVehicleOptions();
      console.log(displayVehicleOptions);
      break;
    case 'color':
      displayColorOptions();
      //console.log(yourChoice;
      break;
    case 'package':
      displayPackageOptions();
      break;
    case 'summary':
      displaySummary();
    default:
      yourChoice = [];
      console.log(yourChoice);
  }
});

function displayColorOptions() {
	var source = $('#color-options-template').html();
	console.log(source);
	var template = Handlebars.compile(source);

	var newListItemHTML = '';
	for(var i = 0; i < colorOptions.length; i++) {
		var currentColor = colorOptions[i];
		var currentColorData = {
			feature: currentColor.choice,
			price: currentColor.price
		};
		var currentColorHTML = template(currentColorData);
		newListItemHTML += currentColorHTML;
	}
	$('#options-display').html(newListItemHTML);
}


//app.use(express.static(path.join(__dirname + '/assets')));