import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null


                user = {
                    email: "hari@gmail.com",
                    password: '123#'
                }

                if (!user) {

                    throw new Error("Invalid credentials.")
                }


                return user
            },
        }),
    ],
})