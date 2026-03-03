// this not-found.js is also researved name and it used for showing errors
// it is used for handing error, and it show error only if currunt compnent failed or child component

export default function NotFound(){
    return <main className="not-found">
        <h1>Not found</h1>
        <p>We could not find the requested page or resourse.</p>
    </main>
}