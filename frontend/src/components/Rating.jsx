import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
	const ratings = [1, 2, 3, 4, 5];

	const stars = ratings.map((num, idx) => (
		<span key={idx}>
			<i
				style={{ color }}
				className={
					value >= num
						? "fas fa-star"
						: value >= num - 0.5
						? "fas fa-star-half-alt"
						: "far fa-star"
				}
			></i>
		</span>
	));
	return (
		<div className="rating">
			{stars}
			{/*
         <span>
				<i
					className={
						value >= 1
							? "fas fa-star"
							: value >= 0.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				></i>
			</span>
			<span>
				<i
					className={
						value >= 2
							? "fas fa-star"
							: value >= 1.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				></i>
			</span>
			<span>
				<i
					className={
						value >= 3
							? "fas fa-star"
							: value >= 2.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				></i>
			</span>
			<span>
				<i
					className={
						value >= 4
							? "fas fa-star"
							: value >= 3.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				></i>
			</span>
			<span>
				<i
					className={
						value >= 5
							? "fas fa-star"
							: value >= 4.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				></i>
			</span>
            <span>{text && text}</span> */}
		</div>
	);
};

Rating.defaultProps = {
	color: "#f8e825",
};

Rating.propTypes = {
	value: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
};

export default Rating;
