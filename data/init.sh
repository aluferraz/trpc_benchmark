#!/bin/bash

psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f /app/scripts/db/dump.sql
echo "SELECT 'Seed complete';" > /app/scripts/db/dump.sql
# mv -f /etc/postgresql.conf /var/lib/postgresql/data/postgresql.conf
# chown postgres:postgres /var/lib/postgresql/data/postgresql.conf
