function initialize() {
	query = document.getElementById('address_address');
	options = {componentRestrictions: {country: 'us'}};
	autocomplete = new google.maps.places.Autocomplete(query, options);

	google.maps.event.addListener(autocomplete, 'place_changed', function(){
		var place = autocomplete.getPlace();

		// find desired values from returned object
		for (var i = 0; i < place.address_components.length; i++){
			if (place.address_components[i].types.indexOf('street_number') > -1){
				var street_num = place.address_components[i]['long_name'];
			};

			if (place.address_components[i].types.indexOf('route') > -1){
				var street_name = place.address_components[i]['long_name'];
			};

			if (place.address_components[i].types.indexOf('locality') > -1){
				document.getElementById('address_city').value = place.address_components[i]['long_name'];
			};

			if (place.address_components[i].types.indexOf('administrative_area_level_1') > -1){
				document.getElementById('address_state').value = place.address_components[i]['long_name'];
			};
		};
		// Autocomplete will set the field value itself
		// need to delay and set field to just street name and number
		window.setTimeout(function(){
		if (street_num && street_name){
				document.getElementById('address_address').value = street_num + " " + street_name;
			}
		else {
			document.getElementById('address_address').value = ""
		}}, 10);
	});
}

window.onload = function(){
	initialize();
}
