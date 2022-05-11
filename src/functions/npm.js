import fetch from "node-fetch";
import { exit } from "../utils.js";
import "core-js/stable";
import "regenerator-runtime/runtime";
/**
 * @function
 * @async
 * @param {String} pkg Package to return data from
 * @returns Statistics & Info of package
*/
export const npm = async function npm(pkg) {
	try {
		if(!pkg) return exit("[Statisfy] ERROR: Package not provided.");
		const response = await fetch("https://api.npms.io/v2/search?q=" + pkg).then(
			(res) => res.json(),
		);
		if(!response) return console.log("[Statisfy] ERROR: Failed to find package from npm. ");
		return response.results[0].package;
	}
	catch(err) {
		console.log(`[Statisfy] ERROR: ${err}`);
	}
};