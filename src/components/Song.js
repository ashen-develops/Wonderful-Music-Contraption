import React from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import config from "../config";

class Song extends React.Component {
	static defaultProps = {
		onDeleteSong: () => {},
	};
	static contextType = ApiContext;

	handleClickDelete = (e) => {
		e.preventDefault();
		const songId = this.props.id;
		console.log(songId);
		fetch(`${config.API_ENDPOINT}/music/${songId}`, {
			method: "DELETE",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => {
				if (!res.ok) return res.json().then((e) => Promise.reject(e));

				return res;
			})
			.then(() => {
				this.context.deleteSong(songId);
				// allow parent to perform extra behaviour
				this.props.onDeleteSong(songId);
			})
			.catch((error) => {
				console.error({ error });
			});
	};

	render() {
		const { name, id, modified } = this.props;
		return (
			<div className="Song">
				<h2 className="Song-title">
					<Link to={`/loops/${id}`}>{name}</Link>
				</h2>
				<button
					className="Song-delete"
					type="button"
					onClick={this.handleClickDelete}
				>
				    remove
				</button>
				<div className="Song-dates">
					<div className="Note__dates-modified">
						Modified{" "}
						{/* <span className="Date">{format(modified, "Do MMM YYYY")}</span> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Song;