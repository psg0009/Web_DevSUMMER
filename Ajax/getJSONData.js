async function getJSONData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

// Example usage
getJSONData('https://d2d89134c227750dead1a355b4ef3f6d.com/data');