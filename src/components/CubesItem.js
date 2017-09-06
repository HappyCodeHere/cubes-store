import React from 'react';

const CubesItem = (props) => {
	const { name, price } = props;
	const newPrice = +(price);
	return (
		<div className="cubes-item">
			{ newPrice === 0 ? <span>{name} — <span className="free">Бесплатно</span> </span> :
			`${name} — ${newPrice}$ / ${(newPrice * 2)} руб.`
		}
		</div>
	)
}

export default CubesItem;
