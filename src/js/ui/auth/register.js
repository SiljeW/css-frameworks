import { register } from "../../api/auth/register";

export async function onRegister(event) {
    event.preventDefault();
    const form = document.querySelector("#registerForm");

    form.addEventListener("submit", (event) => {
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    })

    register(profile);
}
