
export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const endpoint = url.searchParams.get('endpoint');
        
        if (!endpoint) {
            return new Response('Missing endpoint parameter', { status: 400 });
        }

        const apiUrl = `https://www.myfxbook.com${endpoint}`;

        try {
            const apiResponse = await fetch(apiUrl);
            const data = await apiResponse.text();
            return new Response(data, { headers: { 'Content-Type': 'application/json' } });
        } catch (error) {
            return new Response('Error fetching Myfxbook API', { status: 500 });
        }
    }
}
