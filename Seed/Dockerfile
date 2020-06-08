FROM mongo

COPY seed.json /seed.json
CMD mongoimport --host db --db ong --collection users --type json --file /seed.json --jsonArray --mode=upsert --upsertFields=login