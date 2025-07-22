import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import {  Loader } from "lucide-react";
import Property_Gallary from "../Components/Property-View/Gallery";

export default function PropertyView() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await api.get(`/properties/${id}`);
        if (res.data.success) {
          setProperty(res.data.data);
        }
      } catch (error) {
        console.error("Error loading property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <div className="text-center py-20"><Loader className="animate-spin w-6 h-6 mx-auto" />Loading...</div>;

  if (!property) return <div className="text-center py-20">Property not found</div>;

  return (
    <div className="bg-[#0E1C41] min-h-screen">      
       <Property_Gallary />
      </div>   
  );
}
