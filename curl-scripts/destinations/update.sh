#!/bin/bash

curl "http://localhost:4741/destinations/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "destination": {
      "note": "'"${NOTE}"'",
      "contact": "'"${CONTACT}"'"
    }
  }'

echo
