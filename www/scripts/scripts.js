// use when testing phone gap as will not get fired in browser
document.addEventListener("deviceready", function () {
    console.log('device ready');
    getlonglat();
    setup();
});

// use when  in browser
$(document).ready(function () {
    console.log('ready');
    getlonglat();
    setup();

});

function setup() {

	$('#buttonstart').click(function(){
		$(':mobile-pagecontainer').pagecontainer('change', '#p1', {
			transition: 'slidedown',
			changeHash: false
		}, 5000);

		$.ajax({ 
			type: "GET",
			crossDomain:true,
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + localStorage.lat + "," + localStorage.lng + "&rankby=distance&type=cafe&key=AIzaSyCxMinfyqXxHfaqDnADTHbNet8KI4ZweHA",
			success: function(info){
				localStorage.setItem("placeInfo", JSON.stringify(info));
				console.log(JSON.parse(localStorage.placeInfo));
				populate_place_list();
			}
		})
	});

	$('#buttonHome').click(function(){
		$(':mobile-pagecontainer').pagecontainer('change', '#p1', {
			transition: 'slidedown',
			changeHash: false
		}, 5000);

		$.ajax({ 
			type: "GET",
			crossDomain:true,
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + localStorage.lat + "," + localStorage.lng + "&rankby=distance&type=cafe&key=AIzaSyCxMinfyqXxHfaqDnADTHbNet8KI4ZweHA",
			success: function(info){
				localStorage.setItem("placeInfo", JSON.stringify(info));
				console.log(JSON.parse(localStorage.placeInfo));
				populate_place_list();
			}
		});

		// var myLatLng = {lat: data.results[7].geometry.location.lat, lng: data.results[7].geometry.location.lng};

		// var marker = new google.maps.Marker({
		// 	position: myLatLng,
		// 	animation: google.maps.Animation.DROP,
		// 	map: map
		// });

		// marker.setMap(map);
	});

	$('#buttoncafe').click(function(){
		$(':mobile-pagecontainer').pagecontainer('change', '#p2', {
			transition: 'slidedown',
			changeHash: false
		}, 5000);

		$.ajax({ 
			type: "GET",
			crossDomain:true,
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + localStorage.lat + "," + localStorage.lng + "&rankby=distance&type=cafe&key=AIzaSyCxMinfyqXxHfaqDnADTHbNet8KI4ZweHA",
			success: function(info){
				localStorage.setItem("placeInfo", JSON.stringify(info));
				console.log(JSON.parse(localStorage.placeInfo));
				populate_place_list();
			}
		});

		cafeMap = new google.maps.Map(document.getElementById('cafeMap'), {
			center: {lat: 0, lng: 0},
			zoom: 5
		});
	});

	$('#buttonactivity').click(function(){
		$(':mobile-pagecontainer').pagecontainer('change', '#p3', {
			transition: 'slidedown',
			changeHash: false
		}, 5000);

		$.ajax({ 
			type: "GET",
			crossDomain:true,
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + localStorage.lat + "," + localStorage.lng + "&rankby=distance&type=cafe&key=AIzaSyCxMinfyqXxHfaqDnADTHbNet8KI4ZweHA",
			success: function(info){
				localStorage.setItem("placeInfo", JSON.stringify(info));
				console.log(JSON.parse(localStorage.placeInfo));
				populate_place_list();
			}
		});
	});

	$('#buttoneat').click(function(){
		$(':mobile-pagecontainer').pagecontainer('change', '#p4', {
			transition: 'slidedown',
			changeHash: false
		}, 5000);

		$.ajax({ 
			type: "GET",
			crossDomain:true,
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + localStorage.lat + "," + localStorage.lng + "&rankby=distance&type=cafe&key=AIzaSyCxMinfyqXxHfaqDnADTHbNet8KI4ZweHA",
			success: function(info){
				localStorage.setItem("placeInfo", JSON.stringify(info));
				console.log(JSON.parse(localStorage.placeInfo));
				populate_place_list();
			}
		});

	});

	$('#buttondrink').click(function(){
		$(':mobile-pagecontainer').pagecontainer('change', '#p5', {
			transition: 'slidedown',
			changeHash: false
		}, 5000);

		$.ajax({ 
			type: "GET",
			crossDomain:true,
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + localStorage.lat + "," + localStorage.lng + "&rankby=distance&type=cafe&key=AIzaSyCxMinfyqXxHfaqDnADTHbNet8KI4ZweHA",
			success: function(info){
				localStorage.setItem("placeInfo", JSON.stringify(info));
				console.log(JSON.parse(localStorage.placeInfo));
				populate_place_list();
			}
		});

	});
	$('#buttonHome').click(function(){
		$(':mobile-pagecontainer').pagecontainer('change', '#p1', {
			transition: 'slidedown',
			changeHash: false
		}, 5000);

		$.ajax({ 
			type: "GET",
			crossDomain:true,
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + localStorage.lat + "," + localStorage.lng + "&rankby=distance&type=cafe&key=AIzaSyCxMinfyqXxHfaqDnADTHbNet8KI4ZweHA",
			success: function(info){
				localStorage.setItem("placeInfo", JSON.stringify(info));
				console.log(JSON.parse(localStorage.placeInfo));
				populate_place_list();
			}
		});
	});

	$('#p2').children().click(function(){
		console.log("HEY");
		$(':mobile-pagecontainer').pagecontainer('change', '#p3', {
			transition: 'slidedown',
			changeHash: false
		}, 5000);

	    $.ajax({ 
			type: "GET",
			crossDomain:true,
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + localStorage.lat + "," + localStorage.lng + "&rankby=distance&type=museum|art_gallery|shopping_mall|zoo&key=AIzaSyCxMinfyqXxHfaqDnADTHbNet8KI4ZweHA",
			success: function(info){
				console.log(info);
				localStorage.setItem("placeInfo", JSON.stringify(info));
				console.log(JSON.parse(localStorage.placeInfo));
				populate_place_list();
			}
		});

	});

	$('#p3').children('#places').children('.place').click(function(){
		$(':mobile-pagecontainer').pagecontainer('change', '#p4', {
			transition: 'slidedown',
			changeHash: false
		}, 5000);

        $.ajax({ 
			type: "GET",
			crossDomain:true,
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + localStorage.lat + "," + localStorage.lng + "&rankby=distance&type=restaurant&key=AIzaSyCxMinfyqXxHfaqDnADTHbNet8KI4ZweHA",
			success: function(info){
				console.log(info);
				localStorage.setItem("placeInfo", JSON.stringify(info));
				console.log(JSON.parse(localStorage.placeInfo));
				populate_place_list();
			}
		});
	});

	$('#p4').children('#places').children('.place').click(function(){
		$(':mobile-pagecontainer').pagecontainer('change', '#p5', {
			transition: 'slidedown',
			changeHash: false
		}, 5000);

        $.ajax({ 
			type: "GET",
			crossDomain:true,
			dataType: "json",
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + localStorage.lat + "," + localStorage.lng + "&rankby=distance&type=bar&key=AIzaSyCxMinfyqXxHfaqDnADTHbNet8KI4ZweHA",
			success: function(info){
				console.log(info);
				localStorage.setItem("placeInfo", JSON.stringify(info));
				console.log(JSON.parse(localStorage.placeInfo));
				populate_place_list();
			}
		});

	});

}

function getlonglat(){

	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos) {
		var crd = pos.coords;

		localStorage.setItem("lat", crd.latitude);
		localStorage.setItem("lng", crd.longitude);

		$('#lat').text(crd.latitude);
		$('#lng').text(crd.longitude);
		
	};

	function error(err) {
	  console.warn(`ERROR(${err.code}): ${err.message}`);
	};

	navigator.geolocation.getCurrentPosition(success, error, options);
}

function populate_place_list() {


	placesList = JSON.parse(localStorage.placeInfo); 

	console.log(placesList);

	$('.place1').text(placesList.results[0].name);
	$('.place2').text(placesList.results[1].name);
	$('.place3').text(placesList.results[2].name);
}



