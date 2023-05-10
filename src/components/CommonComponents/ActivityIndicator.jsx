import React from "react";
import Loader from "react-loading";

const ActivityIndicator = ({ loading }) => {
  return (
    <div>
      {loading ? (
        <Loader type="spin" color="#ff4742" height={50} width={50} />
      ) : null}
    </div>
  );
};

export default ActivityIndicator;
