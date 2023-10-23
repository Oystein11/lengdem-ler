// Lengdemåler
function length_converter() {

	// HTML-linker
	const user_length_input = document.querySelector("#user_length_input_ID").value;
	console.log(user_length_input);

	const from_length_unit = document.querySelector("#from_length_unit_ID").value;
	console.log(from_length_unit);

	const to_length_unit = document.querySelector("#to_length_unit_ID").value;
	console.log(to_length_unit);

	const display_length_value = document.querySelector("#display_length_value_ID");
	console.log(display_length_value);

	// Lengde-verdi
	let length_result;

	// Variabler
	// Millimeter
    if (from_length_unit === "mm" && to_length_unit === "mm") {
		length_result = alert ("Du har den samme lengden som det du vil konvertere. Velg en annen lengde og prøv igjen."),
		console.log("Du har den samme lengden som det du vil konvertere. Velg en annen lengde og prøv igjen.");
	} else if (from_length_unit === "mm" && to_length_unit === "cm") {
        length_result = user_length_input / 100;
    } else if (from_length_unit === "mm" && to_length_unit === "m") {
        length_result = user_length_input / 100000;
    } else if (from_length_unit === "mm" && to_length_unit === "km") {
        length_result = user_length_input / 10000000;
    } else if (from_length_unit === "mm" && to_length_unit === "mil") {
        length_result = user_length_input / 1609344000;
    }
    
	// Centimeter
    else if (from_length_unit === "cm" && to_length_unit === "mm") {
        length_result = user_length_input * 100;
    } else if (from_length_unit === "cm" && to_length_unit === "cm") {
		length_result = alert ("Du har den samme lengden som det du vil konvertere. Velg en annen lengde og prøv igjen."),
		console.log("Du har den samme lengden som det du vil konvertere. Velg en annen lengde og prøv igjen.");
	} else if (from_length_unit === "cm" && to_length_unit === "m") {
		length_result = user_length_input / 100;
	} else if (from_length_unit === "cm" && to_length_unit === "km") {
		length_result = user_length_input / 100000;
	} else if (from_length_unit === "cm" && to_length_unit === "mil") {
        length_result = user_length_input / 1609344;
    }
     
	// Meter
    else if (from_length_unit === "m" && to_length_unit === "mm") {
        length_result = user_length_input * 100000;
    } else if (from_length_unit === "m" && to_length_unit === "cm") {
		length_result = user_length_input * 100;
	} else if (from_length_unit === "m" && to_length_unit === "m") {
		length_result = alert ("Du har den samme lengden som det du vil konvertere. Velg en annen lengde og prøv igjen."),
		console.log("Du har den samme lengden som det du vil konvertere. Velg en annen lengde og prøv igjen.");
	} else if (from_length_unit === "m" && to_length_unit === "km") {
		length_result = user_length_input / 1000;
	} else if (from_length_unit === "m" && to_length_unit === "mil") {
		length_result = user_length_input / 1609.344;
	}
    
	// Kilometer
    else if (from_length_unit === "km" && to_length_unit === "mm") {
		length_result = user_length_input * 100000000;
	} else if (from_length_unit === "km" && to_length_unit === "cm") {
		length_result = user_length_input * 100000;
	} else if (from_length_unit === "km" && to_length_unit === "m") {
		length_result = user_length_input * 1000;
	} else if (from_length_unit === "km" && to_length_unit === "km") {
		length_result = alert ("Du har den samme lengden som det du vil konvertere. Velg en annen lengde og prøv igjen."),
		console.log("Du har den samme lengden som det du vil konvertere. Velg en annen lengde og prøv igjen.");
	} else if (from_length_unit === "km" && to_length_unit === "mil") {
		length_result = user_length_input / 1.609344;
	}

	// Mil
	else if (from_length_unit === "mil" && to_length_unit === "mm") {
		length_result = user_length_input * 1609344000;
	} else if (from_length_unit === "mil" && to_length_unit === "cm") {
		length_result = user_length_input * 1609344;
	} else if (from_length_unit === "mil" && to_length_unit === "m") {
		length_result = user_length_input * 1609.344;
	} else if (from_length_unit === "mil" && to_length_unit === "km") {
		length_result = user_length_input * 1.609344;
	} else if (from_length_unit === "mil" && to_length_unit === "mil") {
		length_result = alert ("Du har den samme lengden som det du vil konvertere. Velg en annen lengde og prøv igjen."),
		console.log("Du har den samme lengden som det du vil konvertere. Velg en annen lengde og prøv igjen.");
	}

	//
	display_length_value.textContent = length_result.toFixed(3);
}

function volume_converter() {

	// HTML-linker
	const user_volume_input = document.querySelector("#user_volume_input_ID").value;
	console.log(user_volume_input);

	const from_volume_unit = document.querySelector("#from_volume_unit_ID").value;
	console.log(from_volume_unit);

	const to_volume_unit = document.querySelector("#to_volume_unit_ID").value;
	console.log(to_volume_unit);

	const display_volume_value = document.querySelector("#display_volume_value_ID");
	console.log(display_volume_value);

	// volum-verdi
	let volume_result;

	// Variabler
	// Milliliter
    if (from_volume_unit === "ml" && to_volume_unit === "ml") {
		volume_result = alert ("Du har det samme volumet som det du vil konvertere. Velg en annen måleenhet og prøv igjen."),
		console.log("Du har det samme volumet som det du vil konvertere. Velg en annen måleenhet og prøv igjen.");
	} else if (from_volume_unit === "ml" && to_volume_unit === "cl") {
        volume_result = user_volume_input / 100;
    } else if (from_volume_unit === "ml" && to_volume_unit === "l") {
        volume_result = user_volume_input / 100000;
	}
    
	// Centiliter
    else if (from_volume_unit === "cl" && to_volume_unit === "ml") {
        volume_result = user_volume_input * 100;
    } else if (from_volume_unit === "cl" && to_volume_unit === "cl") {
		volume_result = alert ("Du har det samme volumet som det du vil konvertere. Velg en annen måleenhet og prøv igjen."),
		console.log("Du har det samme volumet som det du vil konvertere. Velg en annen måleenhet og prøv igjen.");
	} else if (from_volume_unit === "cl" && to_volume_unit === "l") {
		volume_result = user_volume_input / 100;
	}
     
	// Liter
    else if (from_volume_unit === "l" && to_volume_unit === "ml") {
        volume_result = user_volume_input * 100000;
    } else if (from_volume_unit === "l" && to_volume_unit === "cl") {
		volume_result = user_volume_input * 100;
	} else if (from_volume_unit === "l" && to_volume_unit === "") {
		volume_result = alert ("Du har det samme volumet som det du vil konvertere. Velg en annen måleenhet og prøv igjen."),
		console.log("Du har det samme volumet som det du vil konvertere. Velg en annen måleenhet og prøv igjen.");
	}

	//
	display_volume_value.textContent = volume_result.toFixed(3);
}