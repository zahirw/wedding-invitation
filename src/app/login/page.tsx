import { signIn, signOut } from "../../../auth";
import { auth } from "../../../auth";
import Image from "next/image";

export default async function Signin() {
  const session = await auth();
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>{" "}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
      {session ? (
        <div>
          <h1>Welcome {session.user?.name}</h1>
          <p>Email: {session.user?.email}</p>
          <Image
            src={session.user?.image || ""}
            alt="User Image"
            width={100}
            height={100}
          />
        </div>
      ) : (
        <div>
          <h1>Please sign in</h1>
        </div>
      )}
    </>
  );
}
