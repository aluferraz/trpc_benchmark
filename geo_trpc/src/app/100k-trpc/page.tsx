'use client'
import { unstable_noStore as noStore } from "next/cache";
// import Link from "next/link";
// import { CreatePost } from "~/app/_components/create-post";
// import { api } from "~/trpc/server";
import { api } from "~/trpc/react";


export default function Home() {
  noStore();
  const geoData = api.geo.hungredk.useQuery(undefined, {
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

