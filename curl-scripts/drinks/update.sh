API="http://localhost:4741"
URL_PATH="/drinks"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
 "workouts": {
      "name": "'"${NAME}"'",
      "base": "'"${BASE}"'",
      "build": "'"${BUILD}"'"
    }
  }'