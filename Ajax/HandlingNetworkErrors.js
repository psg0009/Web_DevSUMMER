async function fetchWithNetworkHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        if (error.message === 'Failed to fetch') {
            console.error('Network error: Please check your internet connection.');
        } else {
            console.error('Fetch error:', error);
        }
    }
}

// Example usage
fetchWithNetworkHandling('https://12333.example.com/data');