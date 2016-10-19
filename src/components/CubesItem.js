import React from 'react';

const CubesItem = (props) => {
	console.log(props.price % 1);
	return (
		<div>
			{props.name + ' '} — 
			{' ' + (+props.price) % 1 > 0 ? (+props.price).toFixed(2) : (+props.price) }$
		</div>
	)
}

export default CubesItem;