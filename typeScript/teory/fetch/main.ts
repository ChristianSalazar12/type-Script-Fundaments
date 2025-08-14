const fetchData = async ( ) => {
    const API_URL = 'http://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
let btn:HTMLButtonElement = document.getElementById('btnInfo') as HTMLButtonElement;
let info:HTMLParagraphElement = document.querySelector('.info') as HTMLParagraphElement;

btn.addEventListener('click', async () => {
    const data = await fetchData();
    info.innerText = JSON.stringify(data);
});