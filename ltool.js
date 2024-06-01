document.getElementById('form-submit-btn').addEventListener('click', get_happenings)

function get_happenings() {
    var url = "https://www.nationstates.net/cgi-bin/api.cgi?q=happenings;view=region.the_north_pacific;filter=founding+move;limit=200";
    var foundingRegex = /@@([a-zA-Z0-9_]+)@@ was founded in %%the_north_pacific%%/;
    var relocatedRegex = /@@([a-zA-Z0-9_]+)@@ relocated from %%(the_[a-zA-Z0-9_]+)%% to %%the_north_pacific%%/;

    fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': 'https://www.nationstates.net/nation=united_states_of_dictators'
        }
    })
    .then(response => {
        return response.text();
    })
    .then(xmlString => {
        const parser = new DOMParser();
        const xmlDocument = parser.parseFromString(xmlString, 'text/xml');
    
        const events = xmlDocument.querySelectorAll('EVENT');
    
        events.forEach(event => {
            const text = event.querySelector('TEXT').textContent;
            foundingMatch = text.match(foundingRegex);
            relocatedMatch = text.match(relocatedRegex);

            if (foundingMatch) {
                console.log(`Matched name: ${foundingMatch[1]}`); 
            } else {
                console.log('No match found');
            }

            if (relocatedMatch) {
                console.log(`Matched name: ${relocatedMatch[1]}, Region Relocated from: ${relocatedMatch[2]}`);
            } else {
                console.log('No match found');
            }

        });
    })
    .catch(error => {
        console.error('Error fetching or parsing XML:', error);
    });
}