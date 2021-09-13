import React from "react";
import { BiBorderNone } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

function Header() {
	return (
		<div className="hero is-small is-primary">
			<div className="hero-body">
				<div className="is-flex is-justify-content-space-between is-align-items-center">
					<div>
						<BiBorderNone fontSize="30px" />
					</div>
					<div className="has-text-centered">
						<h1 className="is-size-4 has-text-weight-semibold">Raven Tasks</h1>
					</div>
					<div>
						<BiUser fontSize="30px" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
