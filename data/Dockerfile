FROM postgres
WORKDIR /app
COPY ./init.sh /docker-entrypoint-initdb.d
RUN chmod +x /docker-entrypoint-initdb.d
COPY ./dump.sql.part* ./scripts/db/
COPY ./uncompress.sh ./scripts/db/
RUN chmod +x ./scripts/db/uncompress.sh
RUN cd ./scripts/db && bash -x uncompress.sh dump.sql
RUN ls -lha
# COPY ./dump.sql ./scripts/db/dump.sql
RUN chown postgres:postgres ./scripts/db/dump.sql
COPY ./my-postgres.conf /etc/postgresql.conf
RUN chown postgres:postgres /etc/postgresql.conf
