import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return <div className="text-center">User: {id}</div>;
}
