export const formatearNombre = (
  nombre: string
): string => {
  return nombre.trim().toUpperCase();
};

export const contarSolicitudes = <T>(
  solicitudes: T[]
): number => {
  return solicitudes.length;
};

export const filtrarPorEstado = <T extends { estado: string }>(
  solicitudes: T[],
  estado: string
): T[] => {
  return solicitudes.filter(
    solicitud => solicitud.estado === estado
  );
};