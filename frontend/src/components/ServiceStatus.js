import React, { useState, useEffect } from "react";


function ServiceStatus({count, average_count, apiURL, location}) {
	const [status, setStatus] = useState();

  var message;
  var percent_diff = (count - average_count)/average_count

  if (Math.abs(percent_diff) <= 0.05){
    message = "いつものように忙しい。"
  }
  else if (percent_diff > 0.05 && percent_diff <= 0.50) {
    message = "いつもより忙しい。"
  }
  else if (percent_diff > 0.50) {
    message = "いつもよりずっと忙しい。"
  }
  else if (percent_diff < -0.05 && percent_diff >= -0.50){
    message = "いつもより忙しくない。"
  }
  else if (percent_diff < -0.50) {
    message = "いつもよりずっと忙しくない。"
  } else {
    message = " "
  }

  return message
}; 
 
export default ServiceStatus;
