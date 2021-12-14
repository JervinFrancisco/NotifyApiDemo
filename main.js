var myHeaders = new Headers();
myHeaders.append("Content-type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "http://127.0.0.1:5500/");
myHeaders.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
myHeaders.append("Access-Control-Allow-Credentials", "true");
myHeaders.append("Authorization", "ApiKey-v1 b459dc53-08e5-4923-8c68-ec0a5a344978");

var raw = JSON.stringify({
  "phone_number": "+16133234221",
  "template_id": "de77bf1b-771a-410c-8080-3eda89d336a3"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


async function exampleFetch() {
  await fetch("https://api.notification.canada.ca/v2/notifications/sms", requestOptions)
  .then(response => response.headers.add("Access-Control-Allow-Origin", "*"))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

exampleFetch()