import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
export const ServiceContext = createContext();

const initialServiceState = localStorage.getItem("servicios")
  ? JSON.parse(localStorage.getItem("servicios"))
  : [];

const ServiceProvider = ({ children }) => {
  const [servicios, setServicios] = useState(initialServiceState);

  const getServicios = async () => {
    const res = await fetch("publicaciones.json");
    const data = await res.json();
    setServicios(data);
  };

  useEffect(() => {
    if (servicios.length === 0) {
      getServicios();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("servicios", JSON.stringify(servicios));
  }, [servicios]);

  const createService = (servicio) => {
    setServicios([servicio, ...servicios])
    Swal.fire('Servicio guardado!')
  };

  const deleteService = (id) => {
    const newService = servicios.filter((servicio) => servicio.id !== id);
    setServicios(newService);
    Swal.fire('Servicio eliminado')
  };

  const updateService = newService => {
    const newServices = servicios.map(servicio => {
      if(servicio.id === newService.id){
        return newService
      }
      return servicio
    })

    setServicios(newServices)
  }

  return (
    <ServiceContext.Provider value={{ servicios, createService, deleteService, updateService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
