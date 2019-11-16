FROM postgres
ENV POSTGRES_DB census
COPY psql_dump.sql /docker-entrypoint-initdb.d/
