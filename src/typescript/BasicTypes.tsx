export const BasicTypes = () => {
  const nombre: string = 'Carlos';
  const edad: number = 37;
  const estaActivo: boolean = true;

  const poderes: string[] = ['Velocidad', 'Respirar', 'Volar'];

  return (
    <>
      <h3>BasicTypes</h3>
      {nombre}, {edad}, {estaActivo ? 'Activo' : 'No Activo'}
      <br />
      {poderes.join(', ')}
    </>
  );
};
