"use client";

export function FooterLinks() {
  return (
    <>
      <a
        className="small"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert("Sustituye este enlace por tu Política de Privacidad");
        }}
      >
        Política de Privacidad
      </a>
      <br />
      <a
        className="small"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert("Sustituye este enlace por tus Términos y Condiciones");
        }}
      >
        Términos y Condiciones
      </a>
    </>
  );
}
