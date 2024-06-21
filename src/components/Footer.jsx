export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<p className="text-center">
							&copy; {new Date().getFullYear()} My Portfolio. All rights
							reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
