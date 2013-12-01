function initialize() {
	var query = document.getElementById('address_address');
	var options = {componentRestrictions: {country: 'us'}};

	autocomplete = new google.maps.places.Autocomplete(query, options);
	google.maps.event.addListener(autocomplete, 'place_changed', function(){
		place = autocomplete.getPlace();

		for (var i = 0; i < place.address_components.length; i++){
			if (place.address_components[i].types.indexOf('street_number') > -1){
				street_num = place.address_components[i]['long_name'];
			};

			if (place.address_components[i].types.indexOf('route') > -1){
				street_name = place.address_components[i]['long_name'];
			};

			if (place.address_components[i].types.indexOf('locality') > -1){
				document.getElementById('address_city').value = place.address_components[i]['long_name'];
			};

			if (place.address_components[i].types.indexOf('administrative_area_level_1') > -1){
				document.getElementById('address_state').value = place.address_components[i]['long_name'];
			};
		};
		window.setTimeout(function(){
			document.getElementById('address_address').value = street_num + " " + street_name;
		});
	});
}

window.onload = function(){
	initialize();
}
