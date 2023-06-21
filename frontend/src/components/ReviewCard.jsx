import React from 'react'
import "./ReviewCard.css";

export default function ReviewCard(props) {
  return (
    <div>
    <div class="l-card">
	<section class="l-card__text">
		<p>
			{props.content}
		</p>
	</section>
	<section class="l-card__user">	
		<div class="l-card__userInfo">
			<span>{props.name}</span>
			<span>{props.year}</span>
		</div>
	</section>
</div>
</div>

  )
}
