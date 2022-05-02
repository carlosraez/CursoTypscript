export const ObjectLiterals = () => {
  const persona = {
    nombre: 'Carlos',
    edad: 37,
    direccion: {
      pais: 'España',
      casaNo: 615,
    },
  };

  return (
    <>
      <h3>ObjectLiterals</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
