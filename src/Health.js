import React, { useEffect } from "react";
import alexaStatus from "alexa-stats";

const Health = ({ domainName }) => {
  useEffect(() => {
    const getRank = async () => {
      let res = await alexaStatus(domainName);
      console.log(res);
    };

    getRank();
  }, []);
  return (
    <div>
      {/* api call for sentiment analysis */}
      alexa rank less than 100000 thousand
    </div>
  );
};

export default Health;
