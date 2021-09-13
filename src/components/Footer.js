import React from "react";
import { BiGitBranch, BiGlobe } from "react-icons/bi";

function Footer() {
	return (
		<footer className="footer has-background-dark has-text-grey">
			<div className="content has-text-centered">
				<p>
					2021. Raven Tasks. No rights reserved
					<br />
					Developed by Erik Espinosa.
				</p>
				<p className="has-text-white">
					<a
						href="https://erikespinosar.com"
						title="Author website"
						target="_blank"
						rel="noreferrer"
						className="mx-2"
					>
						<BiGlobe fontSize="26" color="gray" />
					</a>
					<a
						href="https://github.com/ErikEspinosa"
						title="Github"
						target="_blank"
						rel="noreferrer"
						className="mx-2"
					>
						<BiGitBranch fontSize="26" color="gray" />
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
