import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { redirect } from "next/navigation"

export default async function ServerPage() {
    const session = await getServerSession(options)

    console.log(session)

 

    return (
        <section className="flex flex-col gap-6">
            {session?.user?.role}
           
        </section>
    )

}