import Link from "next/link";

export default function NotFound(){
  return (
    <>
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href='/'>Go back to home page</Link>
    </>
  );
}