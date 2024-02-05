function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function calcRemainingPledges(total, amountMade) {
	if (total == null) {
		return;
	}
	return total - amountMade;
}

export { numberWithCommas, calcRemainingPledges };
