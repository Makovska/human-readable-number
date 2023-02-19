module.exports = function toReadable (number) {
	let unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
		ten = ['zero', 'one', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
		readStr = '';
	if (number.toString().split('').length == 3) {
		readStr += `${unit[+number.toString().slice(-3, -2)]} hundred `;
	};
	if (+number.toString().slice(-2) !== 00) {
		if (+number.toString().slice(-2) <= 19) {
		readStr += `${unit[+number.toString().slice(-2)]}`
		} else {
			readStr += `${ten[+number.toString().slice(-2, -1)]} `;
			if (+number.toString().slice(-1) !== 0) {
				readStr += `${unit[+number.toString().slice(-1)]}`
			}
		}
	};
	if (number == 0) {
		readStr += 'zero'
	} return readStr.trim()
}