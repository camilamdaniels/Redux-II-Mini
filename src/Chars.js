import React from 'react';

const Chars = props => {
	return (
		<ul>
			{props.chars.map(char => {
				return <li key={char.name}>{char.name}</li>;
			})}
		</ul>
	);
};

export default Chars;