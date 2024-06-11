import { NextResponse } from 'next/server';
const BASE_URL='https://api.mapbox.com/autofill/v1/suggest/'
export async function GET(request:any) {
    const {searchParams} = new URL(request.url);
    const searchText = searchParams.get('q');
    const res= await fetch(BASE_URL + searchText + '?streets=true&language=en&limit=4&country=us&session_token=0e4d5549-e85f-4591-88f5-11822aa0aaba' + '&access_token=' + process.env.MAPBOX_ACCESS_TOKEN + '&proximity=ip', {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    const searchResult = await res.json();
    return NextResponse.json({searchResult})
}