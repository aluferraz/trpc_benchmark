Run the project:

```docker compose build && docker compose up```

##
tRPC 10k Rows - 432ms 🏆
http://localhost:3000/ 

Python graphene 10k rows - 2.86s
http://localhost:3000/graphene 

Python Apollo Flask 10k rows - 3.99s
http://localhost:3000/flask-graphql

**GraphQL is ~650% _slower_ in Python implementations.**
##

So, maybe is because of Python, let's compare node.js with node.js, using the same database driver:

tRPC 10k Rows - 432ms 🏆
http://localhost:3000/ 

Node.js Apollo Server 10k rows - 699ms
http://localhost:3000/apollo

**GraphQL is ~50% _slower_ in Node.js comparison.**
##

Scaling Test:

tRPC 100k Rows - 4.42s 🏆 - **Results rendered due to tRPC binary serialization**
http://localhost:3000/100k-trpc

Node.js Apollo Server 100k rows - 7.92s - **Results not rendered, browser hangs while parsing large strings to JSON**
http://localhost:3000/100k-apollo

##
🏆 **tRPC consistently outperforms GraphQL.**
##

* The Postgres database logs all SELECT statements, ensuring identical queries across tests.

* Both Apollo Server and tRPC use the same database driver and library.

* Tests employed standalone Node.js servers and Nginx.

##
U.S. Geodata: https://catalog.data.gov/dataset/walkability-index1/resource/13d0b9eb-f2eb-490a-8f05-352c2602da1b

Graphene ref: https://github.com/graphql-python/graphene-django.git

Apollo Python Ref: https://www.apollographql.com/blog/complete-api-guide

Apollo Node.js Ref: https://www.apollographql.com/docs/apollo-server/

tRPC Ref: https://trpc.io/docs/example-apps
