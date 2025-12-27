export async function getCountriesByRegion(region) {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const json = await res.json();
    return json;
}

export function loadFromStorage(STORAGE_KEY) {
    let data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }
    return [];
}

export function saveToStorage(STORAGE_KEY, array) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
}
