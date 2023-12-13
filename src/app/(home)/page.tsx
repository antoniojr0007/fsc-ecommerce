"use client"

import { useSession } from "next-auth/react";

export default function Home() {

  const { data } = useSession();

  return (
    <>
      <div className="mx-auto w=[1920]">
       <div>{data?.user?.name}</div>
       <div>{data?.user?.email}</div> 
      </div>
    </>
  )
}
