'use client'
import { unstable_noStore as noStore } from "next/cache";
// import Link from "next/link";
// import { CreatePost } from "~/app/_components/create-post";
// import { api } from "~/trpc/server";

import {  useEffect, useState } from "react";

const queryGph = {
  query : `{
    allGeodata {
      objectid
      geoid10
      geoid20
      statefp
      countyfp
      tractce
      blkgrpce
      csa
      csaName
      cbsa
      cbsaName
      cbsaPop
      cbsaEmp
      cbsaWrk
      acTotal
      acWater
      acLand
      acUnpr
      totpop
      counthu
      pWrkage
      autoown0
      pctAo0
      autoown1
      pctAo1
      autoown2p
      pctAo2p
      workers
      rLowwagewk
      rMedwagewk
      rHiwagewk
      rPctlowwage
      totemp
      e5Ret
      e5Off
      e5Ind
      e5Svc
      e5Ent
      e8Ret
      e8Off
      e8Ind
      e8Svc
      e8Ent
      e8Ed
      e8Hlth
      e8Pub
      eLowwagewk
      eMedwagewk
      eHiwagewk
      ePctlowwage
      d1a
      d1b
      d1c
      d1c5Ret
      d1c5Off
      d1c5Ind
      d1c5Svc
      d1c5Ent
      d1c8Ret
      d1c8Off
      d1c8Ind
      d1c8Svc
      d1c8Ent
      d1c8Ed
      d1c8Hlth
      d1c8Pub
      d1d
      d1Flag
      d2aJphh
      d2bE5mix
      d2bE5mixa
      d2bE8mix
      d2bE8mixa
      d2aEphhm
      d2cTrpmx1
      d2cTrpmx2
      d2cTripeq
      d2rJobpop
      d2rWrkemp
      d2aWrkemp
      d2cWremlx
      d3a
      d3aao
      d3amm
      d3apo
      d3b
      d3bao
      d3bmm3
      d3bmm4
      d3bpo3
      d3bpo4
      d4a
      d4b025
      d4b050
      d4c
      d4d
      d4e
      d5ar
      d5ae
      d5br
      d5be
      d5cr
      d5cri
      d5ce
      d5cei
      d5dr
      d5dri
      d5de
      d5dei
      d2aRanked
      d2bRanked
      d3bRanked
      d4aRanked
      natwalkind
      shapeLength
      shapeArea
    }
  }`
}
export default function Home() {
  // const latestPost = await api.post.getLatest.query();
  noStore();
  const [geoData, setGeoData] = useState([])
  useEffect(() => {
   fetch(
    "http://localhost:8000/graphql/",
    {
      method: "POST",
      body: JSON.stringify(queryGph),
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 }
    }
  ).then((res) => {
    res.json().then((data)=>{
      setGeoData(data.data.allGeodata as [])
    })
  })},[]);
  
  return (
    <table>
      {
        geoData?.map((geo, idx) => (
          <tr key={idx} style={{border:'1px'}}>{JSON.stringify(geo)}</tr>
        ))
      }
    </table>
  );
}

