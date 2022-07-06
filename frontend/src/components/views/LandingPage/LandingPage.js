import React, { useEffect } from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/test")
      .then((res) => console.log(res.data));
  });
  return <div>LandingPage</div>;
}

export default LandingPage;
