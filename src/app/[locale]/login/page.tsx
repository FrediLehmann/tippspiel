export default function Login({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // use redirectUrl to redirect user back to the page they were on before logging in
  const redirectUrl = searchParams?.redirect;

  return <main>Login</main>;
}
