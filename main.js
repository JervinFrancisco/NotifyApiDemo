var data = JSON.stringify({
    "phone_number": "+16133234221",
    "template_id": "de77bf1b-771a-410c-8080-3eda89d336a3"
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.notification.canada.ca/v2/notifications/sms");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("Authorization", "ApiKey-v1 b459dc53-08e5-4923-8c68-ec0a5a344978");
  
  xhr.send(data);