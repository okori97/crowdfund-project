export default function calcProgressPercentage(total, raised) {
	let percentage = Math.floor((raised / total) * 100);
	return percentage;
}
