function initialize() {
	query = document.getElementById('gmaps_address');
	options = {componentRestrictions: {country: 'us'}, types: ['geocode']};
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
		var address_value = "";
		if (street_num) {
			address_value += street_num + " ";
		};
		if (street_name) {
			address_value += street_name
		};
		document.getElementById('address_address').value = address_value;
	});
};

window.onload = function(){
	initialize();
}
