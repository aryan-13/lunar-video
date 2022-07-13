import './VerticalCard.css';

function VerticalCard() {
	return (
		<div class="card-container">
			<div class="img-box u-margin-bottom-small">
				<img
					src="https://i.ytimg.com/vi/gny4B5YOV0s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6IERwCJqSJb69kYwghqnjerKtHw"
					alt="video-thumbnail"
				/>
			</div>
			<div class="card-header u-margin-bottom-small">
				<div class="flex-row p-md bold-0 heading-box">
					Our Changing Planet
					<button href="" class="btn btn-tertiary-icon">
						<i class="fas fa-ellipsis-v"></i>
					</button>
				</div>
				<br />
				<h4 class="p-sm bold-0">
					By Aryan Chaudhary <br /> 24 lakh views | 7 days ago
				</h4>
			</div>
		</div>
	);
}

export default VerticalCard;
