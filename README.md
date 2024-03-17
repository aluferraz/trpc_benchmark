```docker compose build && docker compose up```

tRPC 10k Rows - 432ms
http://localhost:3000/ 
Python graphene 10k rows - 2.86s
http://localhost:3000/graphene 
Python Apollo Flask 10k rows - 3.99s
http://localhost:3000/flask-graphql


So, maybe is because of Python, let's compare node.js with node.js, using the same database driver:

tRPC 10k Rows - 432ms
http://localhost:3000/ 

Node.js Apollo Server 10k rows - 699ms
http://localhost:3000/apollo

tRPC beats all benchmarks already, but since it was a close match, let's benchhmark more rows:

tRPC 100k Rows - 4.42s
http://localhost:3000/100k-trpc

Node.js Apollo Server 100k rows - 7.92s - The result could not be rendered due to json parsing.
http://localhost:3000/100k-apollo


tRPC beats all benchmarks.

U.S. Geodata: https://catalog.data.gov/dataset/walkability-index1/resource/13d0b9eb-f2eb-490a-8f05-352c2602da1b

Graphene ref: https://github.com/graphql-python/graphene-django.git
Apollo Python Ref: https://www.apollographql.com/blog/complete-api-guide
Apollo Node.js Ref: https://www.apollographql.com/docs/apollo-server/
tRPC Ref: https://trpc.io/docs/example-apps


The postgres database displays all select statments in the console, so it is possible to verify that all tests used the exact same query.
The apollo server and trpc server used the same database driver and library, both used standalone nodejs servers and nginx.


