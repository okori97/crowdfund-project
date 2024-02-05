export default function calcDaysLeft(date) {
	const currentDate = new Date();
	const differenceInTime = date.getTime() - currentDate.getTime();
	const millisecondsPerDay = 1000 * 60 * 60 * 24;
	return differenceInTime / millisecondsPerDay;
}
