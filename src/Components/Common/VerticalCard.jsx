import './VerticalCard.css';

function VerticalCard() {
	return (
		<div class="card-container">
			<div class="img-box u-margin-bottom-small">
				<img
					src="https://i.ytimg.com/an_webp/7jaMJGtAV9M/mqdefault_6s.webp?du=3000&sqp=CP3WpZMG&rs=AOn4CLAgii4tSixi1pdbfHWD2_jra2WWlQ"
					alt=""
				/>
			</div>
			<div class="card-header u-margin-bottom-small">
				<div class="flex-row p-md bold-0 heading-box">
					Our Changing Planet
					<a href="" class="btn btn-tertiary-icon">
						<i class="fas fa-ellipsis-v"></i>
					</a>
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
