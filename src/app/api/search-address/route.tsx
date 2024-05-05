import { NextResponse } from 'next/server';
const BASE_URL='https://api.mapbox.com/search/searchbox/v1/suggest'
export async function GET(request:any) {
    const {searchParams} = new URL(request.url);
    const searchText = searchParams.get('q');
    const res= await fetch(BASE_URL + '?q=' + searchText + '?language=en&limit=6&country=us&session_token=0ac9852a-2715-4011-88f4-58b714f01cc2' + '&access_token=' + process.env.MAPBOX_ACCESS_TOKEN, {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    const searchResult = await res.json();
    return NextResponse.json({searchResult})
}