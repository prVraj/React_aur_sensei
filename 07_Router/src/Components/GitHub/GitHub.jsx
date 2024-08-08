import { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  
  const data = useLoaderData()
  
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/prVraj')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="p-4 m-4 text-3xl text-center text-white bg-gray-600">
      GitHub Followers: - {data.followers}
      <img src={data.avatar_url} width={300}/>
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/prVraj')
  return response.json()
}