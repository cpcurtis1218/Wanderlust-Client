curl "http://localhost:4741/destinations" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "destination": {
      "location": "'"${LOCATION}"'",
      "note": "'"${NOTE}"'",
      "contact": "'"${CONTACT}"'"
    }
  }'

echo
