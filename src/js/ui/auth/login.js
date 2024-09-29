import { login } from "../../api/auth/login";

export async function onLogin(event) {
    event.preventDefault();
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", (event) => {
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    })

    login(profile);
}
