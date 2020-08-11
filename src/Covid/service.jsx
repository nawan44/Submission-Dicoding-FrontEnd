const apiUrl = 'https://api.covid19api.com'

export const apiService = {
    summary: () => {
        const result = fetch(apiUrl + "/summary")
            .then(response => response.json());

        return result
    }
}

export default apiService