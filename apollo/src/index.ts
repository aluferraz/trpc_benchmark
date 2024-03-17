import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import postgres from 'postgres'
const sql = postgres('postgresql://postgres:postgres@db:5432/postgres');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  schema {
    query: Query
}

type GeopraphicDataType {
  """"""
  objectid: BigInt!

  """"""
  geoid10: BigInt

  """"""
  geoid20: BigInt
  statefp: String
  countyfp: String
  tractce: String
  blkgrpce: String
  csa: String
  csaName: String
  cbsa: String
  cbsaName: String
  cbsaPop: Int
  cbsaEmp: Int
  cbsaWrk: Int
  acTotal: Float
  acWater: Float
  acLand: Float
  acUnpr: Float
  totpop: Int
  counthu: Int
  hh: Int
  pWrkage: Float
  autoown0: Int
  pctAo0: Float
  autoown1: Int
  pctAo1: Float
  autoown2p: Int
  pctAo2p: Float
  workers: Int
  rLowwagewk: Float
  rMedwagewk: Float
  rHiwagewk: Float
  rPctlowwage: Float
  totemp: Int
  e5Ret: String
  e5Off: String
  e5Ind: String
  e5Svc: String
  e5Ent: String
  e8Ret: String
  e8Off: String
  e8Ind: String
  e8Svc: String
  e8Ent: String
  e8Ed: String
  e8Hlth: String
  e8Pub: String
  eLowwagewk: Int
  eMedwagewk: Int
  eHiwagewk: Int
  ePctlowwage: Float
  d1a: String
  d1b: String
  d1c: String
  d1c5Ret: String
  d1c5Off: String
  d1c5Ind: String
  d1c5Svc: String
  d1c5Ent: String
  d1c8Ret: String
  d1c8Off: String
  d1c8Ind: String
  d1c8Svc: String
  d1c8Ent: String
  d1c8Ed: String
  d1c8Hlth: String
  d1c8Pub: String
  d1d: String
  d1Flag: String
  d2aJphh: Float
  d2bE5mix: Float
  d2bE5mixa: String
  d2bE8mix: Float
  d2bE8mixa: String
  d2aEphhm: Float
  d2cTrpmx1: String
  d2cTrpmx2: String
  d2cTripeq: String
  d2rJobpop: Float
  d2rWrkemp: Float
  d2aWrkemp: Float
  d2cWremlx: String
  d3a: Float
  d3aao: String
  d3amm: String
  d3apo: String
  d3b: Float
  d3bao: String
  d3bmm3: String
  d3bmm4: String
  d3bpo3: String
  d3bpo4: String
  d4a: String
  d4b025: String
  d4b050: String
  d4c: String
  d4d: String
  d4e: String
  d5ar: String
  d5ae: String
  d5br: String
  d5be: String
  d5cr: String
  d5cri: String
  d5ce: String
  d5cei: String
  d5dr: String
  d5dri: String
  d5de: String
  d5dei: String
  d2aRanked: Float
  d2bRanked: Float
  d3bRanked: Float
  d4aRanked: Float
  natwalkind: String
  shapeLength: Float
  shapeArea: Float
}

scalar BigInt


type Query {
    allGeodata:[GeopraphicDataType],
    allGeodataHungred:[GeopraphicDataType],
}


`;
const getGeodata = function(){
 return sql`SELECT "recipes_geographicdata"."objectid", "recipes_geographicdata"."geoid10", "recipes_geographicdata"."geoid20", "recipes_geographicdata"."statefp", "recipes_geographicdata"."countyfp", "recipes_geographicdata"."tractce", "recipes_geographicdata"."blkgrpce", "recipes_geographicdata"."csa", "recipes_geographicdata"."csa_name", "recipes_geographicdata"."cbsa", "recipes_geographicdata"."cbsa_name", "recipes_geographicdata"."cbsa_pop", "recipes_geographicdata"."cbsa_emp", "recipes_geographicdata"."cbsa_wrk", "recipes_geographicdata"."ac_total", "recipes_geographicdata"."ac_water", "recipes_geographicdata"."ac_land", "recipes_geographicdata"."ac_unpr", "recipes_geographicdata"."totpop", "recipes_geographicdata"."counthu", "recipes_geographicdata"."hh", "recipes_geographicdata"."p_wrkage", "recipes_geographicdata"."autoown0", "recipes_geographicdata"."pct_ao0", "recipes_geographicdata"."autoown1", "recipes_geographicdata"."pct_ao1", "recipes_geographicdata"."autoown2p", "recipes_geographicdata"."pct_ao2p", "recipes_geographicdata"."workers", "recipes_geographicdata"."r_lowwagewk", "recipes_geographicdata"."r_medwagewk", "recipes_geographicdata"."r_hiwagewk", "recipes_geographicdata"."r_pctlowwage", "recipes_geographicdata"."totemp", "recipes_geographicdata"."e5_ret", "recipes_geographicdata"."e5_off", "recipes_geographicdata"."e5_ind", "recipes_geographicdata"."e5_svc", "recipes_geographicdata"."e5_ent", "recipes_geographicdata"."e8_ret", "recipes_geographicdata"."e8_off", "recipes_geographicdata"."e8_ind", "recipes_geographicdata"."e8_svc", "recipes_geographicdata"."e8_ent", "recipes_geographicdata"."e8_ed", "recipes_geographicdata"."e8_hlth", "recipes_geographicdata"."e8_pub", "recipes_geographicdata"."e_lowwagewk", "recipes_geographicdata"."e_medwagewk", "recipes_geographicdata"."e_hiwagewk", "recipes_geographicdata"."e_pctlowwage", "recipes_geographicdata"."d1a", "recipes_geographicdata"."d1b", "recipes_geographicdata"."d1c", "recipes_geographicdata"."d1c5_ret", "recipes_geographicdata"."d1c5_off", "recipes_geographicdata"."d1c5_ind", "recipes_geographicdata"."d1c5_svc", "recipes_geographicdata"."d1c5_ent", "recipes_geographicdata"."d1c8_ret", "recipes_geographicdata"."d1c8_off", "recipes_geographicdata"."d1c8_ind", "recipes_geographicdata"."d1c8_svc", "recipes_geographicdata"."d1c8_ent", "recipes_geographicdata"."d1c8_ed", "recipes_geographicdata"."d1c8_hlth", "recipes_geographicdata"."d1c8_pub", "recipes_geographicdata"."d1d", "recipes_geographicdata"."d1_flag", "recipes_geographicdata"."d2a_jphh", "recipes_geographicdata"."d2b_e5mix", "recipes_geographicdata"."d2b_e5mixa", "recipes_geographicdata"."d2b_e8mix", "recipes_geographicdata"."d2b_e8mixa", "recipes_geographicdata"."d2a_ephhm", "recipes_geographicdata"."d2c_trpmx1", "recipes_geographicdata"."d2c_trpmx2", "recipes_geographicdata"."d2c_tripeq", "recipes_geographicdata"."d2r_jobpop", "recipes_geographicdata"."d2r_wrkemp", "recipes_geographicdata"."d2a_wrkemp", "recipes_geographicdata"."d2c_wremlx", "recipes_geographicdata"."d3a", "recipes_geographicdata"."d3aao", "recipes_geographicdata"."d3amm", "recipes_geographicdata"."d3apo", "recipes_geographicdata"."d3b", "recipes_geographicdata"."d3bao", "recipes_geographicdata"."d3bmm3", "recipes_geographicdata"."d3bmm4", "recipes_geographicdata"."d3bpo3", "recipes_geographicdata"."d3bpo4", "recipes_geographicdata"."d4a", "recipes_geographicdata"."d4b025", "recipes_geographicdata"."d4b050", "recipes_geographicdata"."d4c", "recipes_geographicdata"."d4d", "recipes_geographicdata"."d4e", "recipes_geographicdata"."d5ar", "recipes_geographicdata"."d5ae", "recipes_geographicdata"."d5br", "recipes_geographicdata"."d5be", "recipes_geographicdata"."d5cr", "recipes_geographicdata"."d5cri", "recipes_geographicdata"."d5ce", "recipes_geographicdata"."d5cei", "recipes_geographicdata"."d5dr", "recipes_geographicdata"."d5dri", "recipes_geographicdata"."d5de", "recipes_geographicdata"."d5dei", "recipes_geographicdata"."d2a_ranked", "recipes_geographicdata"."d2b_ranked", "recipes_geographicdata"."d3b_ranked", "recipes_geographicdata"."d4a_ranked", "recipes_geographicdata"."natwalkind", "recipes_geographicdata"."shape_length", "recipes_geographicdata"."shape_area" FROM "recipes_geographicdata" LIMIT 10000`;
}

const getGeodataHungred = function(){
  return sql`SELECT "recipes_geographicdata"."objectid", "recipes_geographicdata"."geoid10", "recipes_geographicdata"."geoid20", "recipes_geographicdata"."statefp", "recipes_geographicdata"."countyfp", "recipes_geographicdata"."tractce", "recipes_geographicdata"."blkgrpce", "recipes_geographicdata"."csa", "recipes_geographicdata"."csa_name", "recipes_geographicdata"."cbsa", "recipes_geographicdata"."cbsa_name", "recipes_geographicdata"."cbsa_pop", "recipes_geographicdata"."cbsa_emp", "recipes_geographicdata"."cbsa_wrk", "recipes_geographicdata"."ac_total", "recipes_geographicdata"."ac_water", "recipes_geographicdata"."ac_land", "recipes_geographicdata"."ac_unpr", "recipes_geographicdata"."totpop", "recipes_geographicdata"."counthu", "recipes_geographicdata"."hh", "recipes_geographicdata"."p_wrkage", "recipes_geographicdata"."autoown0", "recipes_geographicdata"."pct_ao0", "recipes_geographicdata"."autoown1", "recipes_geographicdata"."pct_ao1", "recipes_geographicdata"."autoown2p", "recipes_geographicdata"."pct_ao2p", "recipes_geographicdata"."workers", "recipes_geographicdata"."r_lowwagewk", "recipes_geographicdata"."r_medwagewk", "recipes_geographicdata"."r_hiwagewk", "recipes_geographicdata"."r_pctlowwage", "recipes_geographicdata"."totemp", "recipes_geographicdata"."e5_ret", "recipes_geographicdata"."e5_off", "recipes_geographicdata"."e5_ind", "recipes_geographicdata"."e5_svc", "recipes_geographicdata"."e5_ent", "recipes_geographicdata"."e8_ret", "recipes_geographicdata"."e8_off", "recipes_geographicdata"."e8_ind", "recipes_geographicdata"."e8_svc", "recipes_geographicdata"."e8_ent", "recipes_geographicdata"."e8_ed", "recipes_geographicdata"."e8_hlth", "recipes_geographicdata"."e8_pub", "recipes_geographicdata"."e_lowwagewk", "recipes_geographicdata"."e_medwagewk", "recipes_geographicdata"."e_hiwagewk", "recipes_geographicdata"."e_pctlowwage", "recipes_geographicdata"."d1a", "recipes_geographicdata"."d1b", "recipes_geographicdata"."d1c", "recipes_geographicdata"."d1c5_ret", "recipes_geographicdata"."d1c5_off", "recipes_geographicdata"."d1c5_ind", "recipes_geographicdata"."d1c5_svc", "recipes_geographicdata"."d1c5_ent", "recipes_geographicdata"."d1c8_ret", "recipes_geographicdata"."d1c8_off", "recipes_geographicdata"."d1c8_ind", "recipes_geographicdata"."d1c8_svc", "recipes_geographicdata"."d1c8_ent", "recipes_geographicdata"."d1c8_ed", "recipes_geographicdata"."d1c8_hlth", "recipes_geographicdata"."d1c8_pub", "recipes_geographicdata"."d1d", "recipes_geographicdata"."d1_flag", "recipes_geographicdata"."d2a_jphh", "recipes_geographicdata"."d2b_e5mix", "recipes_geographicdata"."d2b_e5mixa", "recipes_geographicdata"."d2b_e8mix", "recipes_geographicdata"."d2b_e8mixa", "recipes_geographicdata"."d2a_ephhm", "recipes_geographicdata"."d2c_trpmx1", "recipes_geographicdata"."d2c_trpmx2", "recipes_geographicdata"."d2c_tripeq", "recipes_geographicdata"."d2r_jobpop", "recipes_geographicdata"."d2r_wrkemp", "recipes_geographicdata"."d2a_wrkemp", "recipes_geographicdata"."d2c_wremlx", "recipes_geographicdata"."d3a", "recipes_geographicdata"."d3aao", "recipes_geographicdata"."d3amm", "recipes_geographicdata"."d3apo", "recipes_geographicdata"."d3b", "recipes_geographicdata"."d3bao", "recipes_geographicdata"."d3bmm3", "recipes_geographicdata"."d3bmm4", "recipes_geographicdata"."d3bpo3", "recipes_geographicdata"."d3bpo4", "recipes_geographicdata"."d4a", "recipes_geographicdata"."d4b025", "recipes_geographicdata"."d4b050", "recipes_geographicdata"."d4c", "recipes_geographicdata"."d4d", "recipes_geographicdata"."d4e", "recipes_geographicdata"."d5ar", "recipes_geographicdata"."d5ae", "recipes_geographicdata"."d5br", "recipes_geographicdata"."d5be", "recipes_geographicdata"."d5cr", "recipes_geographicdata"."d5cri", "recipes_geographicdata"."d5ce", "recipes_geographicdata"."d5cei", "recipes_geographicdata"."d5dr", "recipes_geographicdata"."d5dri", "recipes_geographicdata"."d5de", "recipes_geographicdata"."d5dei", "recipes_geographicdata"."d2a_ranked", "recipes_geographicdata"."d2b_ranked", "recipes_geographicdata"."d3b_ranked", "recipes_geographicdata"."d4a_ranked", "recipes_geographicdata"."natwalkind", "recipes_geographicdata"."shape_length", "recipes_geographicdata"."shape_area" FROM "recipes_geographicdata" LIMIT 100000`;
 }

const resolvers = {
    Query: {
        allGeodata: () => {
            return getGeodata()
        },
        allGeodataHungred: () => {
          return getGeodataHungred()
      },
    },
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);