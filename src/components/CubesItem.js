import React from 'react';

const CubesItem = (props) => {
	return (
		<div>
			{props.name + ' '} — 
			{' ' + props.price}$
		</div>
	)
}

export default CubesItem;