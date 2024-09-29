import { API_AUTH_LOGIN } from "../constants.js";
import * as storage from "../../storage/index.js";

export async function login(profile) {
    const body = JSON.stringify(profile);

    const response = await fetch(API_AUTH_LOGIN, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body,
    })

    const { accessToken, ...user } = await response.json()


    storage.save("token", accessToken)

    storage.save("profile", user)

    alert("You are now logged in")
}


