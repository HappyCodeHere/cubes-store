import React from 'react';

const CubesItem = (props) => {
	const { name, price } = props;
	let newPrice = +(price);
	if (newPrice % 1 > 0) {
		newPrice = newPrice.toFixed(2);
	}
	return (
		<div className="cubes-item">
			{`${name} — ${newPrice}$ / ${newPrice * 19000} руб.`}
		</div>
	)
}

export default CubesItem;