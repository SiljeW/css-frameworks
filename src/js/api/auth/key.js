import { API_AUTH_KEY } from "../constants";
import { headers } from "../headers";

export async function getKey(name) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch {
        return null
    }
}
