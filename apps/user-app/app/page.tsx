import { signIn } from "@/auth"
function Home() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  )
}

export default Home