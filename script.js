function unit_converter() {

	// HTML-linker
	const user_input = document.querySelector("#user_input_ID").value;
	console.log(user_input);

	const from_unit = document.querySelector("#from_unit_ID").value;
	console.log(from_unit);

	const to_unit = document.querySelector("#to_unit_ID").value;
	console.log(to_unit);

	const display_value = document.querySelector("#display_value_ID");
	console.log(display_value);

	// Lengde-verdi
	let result;

	// Variabler
	// Millimeter
    if (from_unit === "mm" && to_unit === "mm") {
		result = user_input;
	} else if (from_unit === "mm" && to_unit === "cm") {
        result = user_input / 100;
    } else if (from_unit === "mm" && to_unit === "m") {
        result = user_input / 100000;
    } else if (from_unit === "mm" && to_unit === "km") {
        result = user_input / 10000000;
    } else if (from_unit === "mm" && to_unit === "mil") {
        result = user_input / 1609344000;
    }
    
	// Centimeter
    else if (from_unit === "cm" && to_unit === "mm") {
        result = user_input * 100;
    } else if (from_unit === "cm" && to_unit === "cm") {
		result = user_input;
	} else if (from_unit === "cm" && to_unit === "m") {
		result = user_input / 100;
	} else if (from_unit === "cm" && to_unit === "km") {
		result = user_input / 100000;
	} else if (from_unit === "cm" && to_unit === "mil") {
        result = user_input / 1609344;
    }
     
	// Meter
    else if (from_unit === "m" && to_unit === "mm") {
        result = user_input * 100000;
    } else if (from_unit === "m" && to_unit === "cm") {
		result = user_input * 100;
	} else if (from_unit === "m" && to_unit === "m") {
		result = user_input;
	} else if (from_unit === "m" && to_unit === "km") {
		result = user_input / 1000;
	} else if (from_unit === "m" && to_unit === "mil") {
		result = user_input / 1609.344;
	}
    
	// Kilometer
    else if (from_unit === "km" && to_unit === "mm") {
		result = user_input * 100000000;
	} else if (from_unit === "km" && to_unit === "cm") {
		result = user_input * 100000;
	} else if (from_unit === "km" && to_unit === "m") {
		result = user_input * 1000;
	} else if (from_unit === "km" && to_unit === "km") {
		result = user_input;
	} else if (from_unit === "km" && to_unit === "mil") {
		result = user_input / 1.609344;
	}

	// Mil
	else if (from_unit === "mil" && to_unit === "mm") {
		result = user_input * 1609344000;
	} else if (from_unit === "mil" && to_unit === "cm") {
		result = user_input * 1609344;
	} else if (from_unit === "mil" && to_unit === "m") {
		result = user_input * 1609.344;
	} else if (from_unit === "mil" && to_unit === "km") {
		result = user_input * 1.609344;
	} else if (from_unit === "mil" && to_unit === "mil") {
		result = user_input;
	}

	//
	display_value.textContent = result.toFixed(3);
}