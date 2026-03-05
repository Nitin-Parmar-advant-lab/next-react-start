'use client'

// this error.js is also researved name and it used for showing errors
// it is used for handing error, and it show error only if currunt compnent failed or child component
// and this is client component

export default function Error() {
    return <main className="error">
        <h1>An error occured!</h1>
        <p>Failed to create meal.</p>
    </main>
}