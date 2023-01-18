import { useState, useEffect } from 'react';

const GroupServiceRequest = (endpoint: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      setData(data.labels);
    }
    fetchData();
  }, [endpoint]);

  return data;
}

export default GroupServiceRequest;
