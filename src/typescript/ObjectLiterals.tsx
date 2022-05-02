interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjectLiterals = () => {
  const persona: Persona = {
    nombreCompleto: 'Carlos',
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
