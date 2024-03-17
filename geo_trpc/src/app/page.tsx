'use client'
import { unstable_noStore as noStore } from "next/cache";
// import Link from "next/link";
// import { CreatePost } from "~/app/_components/create-post";
// import { api } from "~/trpc/server";
import { api } from "~/trpc/react";


export default function Home() {
  noStore();
<<<<<<< HEAD
  const geoData = api.geo.tenk.useQuery(undefined, {
=======
  const geoData = api.geo.all.useQuery(undefined, {
>>>>>>> refs/remotes/origin/master
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  }).data
  return (
    <table >
      {
        geoData?.map((geo, idx) => (
          <tr key={idx} style={{border:'1px'}}>{JSON.stringify(geo)}</tr>
        ))
      }
    </table>
  );
}

