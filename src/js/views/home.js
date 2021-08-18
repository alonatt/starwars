import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<ul>
				{store.people.map((persona, posicion) => {
					return (
						<li key={posicion}>
							{" "}
							Usuario ID {persona.uid} de nombre {persona.name}
						</li>
					);
				})}
			</ul>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
