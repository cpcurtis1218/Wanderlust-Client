#!/bin/bash

curl "http://localhost:4741/destinations" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \

echo
