// import ClientDemo from "./ClientDemo";

export default async function RSCDemo() {
  console.log('RSCDemo rendered');
  return (
    <div className='rsc'>
      <h2>A React Server Component</h2>
      <p>
        Will <strong>ONLY</strong> be rendered on the server or at build time.
      </p>
      <p>
        <strong>NEVER</strong> on the client-side!
      </p>
      {/* as you can see server component can inlcude client component, but wise versa is not possible except it is included through children */}
      {/* <ClientDemo /> */}
    </div>
  );
}