async function fetchText(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.error('Error fetching text:', error);
    }
}

// Example usage
fetchText('https://api.example.com/text');
