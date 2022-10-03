
const apiUrl = "http://interview.wptdev.com/api/killfeed";

export async function fetchData() {
    return await fetch(apiUrl)
        .then(response => response.json())
        .then(({ status, payload }) => {
            if (status === "successful") return payload;
            return "error";
        })
}