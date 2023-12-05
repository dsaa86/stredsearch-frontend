export default function TitleAndData({ title, data, isDate = false }) {
	let lastActivityDate;
	let month;
	let day;
	let year;

	if (isDate) {
		lastActivityDate = new Date(data);
		month = lastActivityDate.getMonth() + 1;
		day = lastActivityDate.getDate();
		year = lastActivityDate.getFullYear();

		data = `${day}/${month}/${year}`;
	}

	return (
		<>
			<div className="row">
				<div className="col-4">{title}</div>
				<div className="col-8">{data}</div>
			</div>
		</>
	);
}
