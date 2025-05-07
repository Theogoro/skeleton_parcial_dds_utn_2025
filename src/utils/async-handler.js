/**
 * Wrapper para manejar errores en funciones asíncronas.
 * @param {Function} fn - Función asíncrona que será envuelta.
 * @returns {Function} Middleware que maneja errores automáticamente.
 */
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default asyncHandler;