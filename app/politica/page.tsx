export default function PoliticaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-black mb-6">Política de Privacidad y Términos</h1>

      <section id="privacy" className="mb-12">
        <h2 className="text-2xl font-bold mb-3">🛡️ POLÍTICA DE PRIVACIDAD Y COOKIES</h2>
        <p className="text-sm text-slate-600 mb-4">Última actualización: 14 de enero de 2026</p>

        <p>
          De conformidad con lo dispuesto en el Reglamento General (UE) sobre Protección de Datos (RGPD) y la
          Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD), mediante la aceptación
          de la presente Política de Privacidad se informa al usuario de lo siguiente:
        </p>

        <h3 className="font-bold mt-4">1. IDENTIDAD DEL RESPONSABLE</h3>
        <p>
          Responsable del tratamiento: <strong>Polyglot Labs LLC</strong>
          <br />Domicilio: 30 N Gould St, Ste N, Sheridan, WY 82801, Estados Unidos
          <br />Correo electrónico: <a href="mailto:hola@pedropoliglota.com">hola@pedropoliglota.com</a>
          <br />Dominio: <a href="https://pedropoliglota.com">https://pedropoliglota.com</a>
        </p>

        <p className="mt-2">La presente Política será válida únicamente para los datos personales obtenidos en este sitio web, no siendo aplicable a la información recabada por terceros a través de otros canales. Polyglot Labs LLC manifiesta su compromiso con la protección de los datos personales y garantiza la seguridad y confidencialidad de la información facilitada por los usuarios.</p>

        <h3 className="font-bold mt-4">2. DATOS PERSONALES RECOGIDOS Y FINALIDAD</h3>
        <h4 className="font-semibold mt-2">2.1 Tipos de datos recogidos</h4>
        <p>Datos identificativos: nombre, correo electrónico, país, edad e información relevante al servicio como el idioma de aprendizaje.</p>
        <p className="mt-2">Datos de facturación: nombre completo, dirección postal, datos fiscales y medio de pago (en compras o contrataciones).</p>
        <p className="mt-2">Datos de uso: dirección IP, navegador, sistema operativo, duración de la visita, páginas vistas y comportamiento en la web.</p>

        <h4 className="font-semibold mt-4">2.2 Finalidad del tratamiento</h4>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-slate-600">
          <li>Gestión de la lista de suscriptores y envío de newsletters.</li>
          <li>Venta de formación online, cursos, programas de coaching 1:1 y acceso a la comunidad.</li>
          <li>Programación de llamadas a través de TidyCal, Calendly, Cal.</li>
          <li>Envío de información comercial relacionada con los productos y servicios de Polyglot Labs LLC.</li>
          <li>Cumplimiento de obligaciones contables, fiscales y administrativas.</li>
          <li>Realización de estudios analíticos y de marketing.</li>
          <li>Grabación de sesiones, clases o testimonios (previo consentimiento) para la correcta aclaración de los conceptos y el posterior visionado de estos con fines educativos.</li>
        </ul>

        <p className="mt-4">En ningún caso se utilizarán los datos con un fin distinto al declarado, ni se cederán a terceros sin consentimiento expreso.</p>

        <h3 className="font-bold mt-6">3. LEGITIMACIÓN</h3>
        <p className="mt-2">El tratamiento de los datos se realiza sobre las siguientes bases jurídicas:</p>
        <ul className="list-disc pl-6 mt-2 text-slate-600">
          <li>Consentimiento expreso del usuario al suscribirse o registrarse.</li>
          <li>Ejecución de un contrato en caso de adquisición de servicios o productos.</li>
          <li>Cumplimiento de obligaciones legales en materia fiscal y contable.</li>
          <li>Interés legítimo en mantener la relación comercial y mejorar los servicios ofrecidos.</li>
        </ul>

        <h3 className="font-bold mt-6">4. PLAZO DE CONSERVACIÓN</h3>
        <p className="mt-2">Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y mientras el usuario no solicite su supresión. Los datos de facturación se conservarán el tiempo legalmente exigido. Las listas de suscriptores se revisarán periódicamente para eliminar registros inactivos.</p>

        <h3 className="font-bold mt-6">5. DERECHOS DEL USUARIO</h3>
        <p className="mt-2">Los usuarios podrán ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición dirigiendo un correo electrónico a <a href="mailto:hola@pedropoliglota.com">hola@pedropoliglota.com</a>, indicando “Protección de datos” en el asunto. Asimismo, podrán darse de baja de las comunicaciones comerciales desde cualquier correo recibido o solicitarlo expresamente por email.</p>

        <h3 className="font-bold mt-6">6. DESTINATARIOS Y ENCARGADOS DEL TRATAMIENTO</h3>
        <p className="mt-2">Polyglot Labs LLC utiliza los siguientes proveedores bajo sus respectivas políticas de privacidad:</p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Finalidad</th>
                <th className="pb-2">Proveedor</th>
                <th className="pb-2">País</th>
                <th className="pb-2">Política</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td>Hosting y plataforma de cursos</td>
                <td>Teachable Inc.</td>
                <td>EE. UU.</td>
                <td><a href="https://teachable.com/privacy" target="_blank" rel="noopener">https://teachable.com/privacy</a></td>
              </tr>
              <tr>
                <td>Email marketing</td>
                <td>MailerLite</td>
                <td>UE / EE. UU.</td>
                <td><a href="https://www.mailerlite.com/privacy-policy" target="_blank" rel="noopener">https://www.mailerlite.com/privacy-policy</a></td>
              </tr>
              <tr>
                <td>Pagos y facturación</td>
                <td>Stripe Inc.</td>
                <td>EE. UU.</td>
                <td><a href="https://stripe.com/privacy" target="_blank" rel="noopener">https://stripe.com/privacy</a></td>
              </tr>
              <tr>
                <td>Agenda y gestión de citas</td>
                <td>TidyCal (AppSumo LLC), Calendly</td>
                <td>EE. UU.</td>
                <td><a href="https://tidycal.com/privacy" target="_blank" rel="noopener">https://tidycal.com/privacy</a></td>
              </tr>
              <tr>
                <td>Reuniones y clases online</td>
                <td>Zoom Video Communications Inc., Google Meet</td>
                <td>EE. UU.</td>
                <td><a href="https://zoom.us/privacy" target="_blank" rel="noopener">https://zoom.us/privacy</a></td>
              </tr>
              <tr>
                <td>Analítica web</td>
                <td>Google Analytics (Google LLC)</td>
                <td>EE. UU.</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>Publicidad</td>
                <td>Meta Platforms (Facebook / Instagram)</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">Todos ellos cumplen con las garantías adecuadas de seguridad y tratamiento de datos conforme al RGPD y marcos internacionales de transferencia.</p>

        <h3 className="font-bold mt-6">7. SEGURIDAD DE LOS DATOS</h3>
        <p className="mt-2">Polyglot Labs LLC aplica las medidas técnicas y organizativas necesarias para garantizar la confidencialidad, integridad y disponibilidad de los datos personales, incluyendo cifrado SSL y control de accesos.</p>

        <h3 className="font-bold mt-6">8. POLÍTICA DE COOKIES</h3>
        <p className="mt-2">El sitio web utiliza cookies propias y de terceros para:</p>
        <ul className="list-disc pl-6 mt-2 text-slate-600">
          <li>Recordar preferencias del usuario.</li>
          <li>Analizar tráfico y comportamiento en el sitio.</li>
          <li>Personalizar contenidos y anuncios.</li>
        </ul>
        <p className="mt-2">El usuario puede aceptar, rechazar o configurar las cookies en cualquier momento mediante el banner de consentimiento o su navegador. Más información sobre su gestión se ofrece en esta misma política.</p>

        <h3 className="font-bold mt-6">9. ENLACES A TERCEROS</h3>
        <p className="mt-2">El sitio puede contener enlaces a páginas externas. Polyglot Labs LLC no se hace responsable de sus prácticas de privacidad. Se recomienda revisar sus políticas antes de proporcionar cualquier dato personal.</p>

        <h3 className="font-bold mt-6">10. MODIFICACIONES DE LA POLÍTICA</h3>
        <p className="mt-2">Polyglot Labs LLC se reserva el derecho de modificar la presente Política para adaptarla a cambios legislativos o mejoras del servicio. Las versiones actualizadas serán publicadas en esta misma página.</p>

        <h3 className="font-bold mt-6">11. ACEPTACIÓN Y CONSENTIMIENTO</h3>
        <p className="mt-2">El usuario declara haber sido informado de las condiciones sobre protección de datos y acepta voluntariamente el tratamiento de los mismos por parte de Polyglot Labs LLC en la forma y para las finalidades indicadas.</p>
      </section>

      <hr className="my-8" />

      <section id="terms">
        <h2 className="text-2xl font-bold mb-3">⚖️ TÉRMINOS Y CONDICIONES DE USO Y VENTA</h2>
        <p className="text-sm text-slate-600 mb-4">Última actualización: 12 de octubre de 2025</p>

        <h3 className="font-bold mt-4">1. INFORMACIÓN GENERAL</h3>
        <p className="mt-2">El presente aviso regula el uso del sitio web <a href="https://pedropoliglota.com" target="_blank" rel="noopener">https://pedropoliglota.com</a>, propiedad de Polyglot Labs LLC, con domicilio en 30 N Gould St, Ste N, Sheridan, WY 82801, Estados Unidos, y correo de contacto <a href="mailto:hola@pedropoliglota.com">hola@pedropoliglota.com</a>. El acceso al sitio implica la aceptación plena de los presentes Términos y Condiciones.</p>

        <h3 className="font-bold mt-4">2. OBJETO</h3>
        <p className="mt-2">Polyglot Labs LLC ofrece productos y servicios digitales relacionados con el aprendizaje de idiomas, incluyendo cursos online, programas de acompañamiento, coaching 1:1, comunidad privada, webinars, libros digitales y físicos y otros contenidos formativos.</p>

        <h3 className="font-bold mt-4">3. USO DEL SITIO</h3>
        <p className="mt-2">El usuario se compromete a utilizar el sitio y sus servicios conforme a la ley, la buena fe y los presentes términos, absteniéndose de cualquier actuación ilícita o que dañe los derechos de terceros.</p>

        <h3 className="font-bold mt-4">4. CONDICIONES DE COMPRA</h3>
        <p className="mt-2">Las contrataciones se realizan mediante plataformas seguras (Teachable, Stripe).</p>
        <p className="mt-2">Los precios se expresan en euros (EUR) o dólares estadounidenses (USD) e incluyen los impuestos aplicables según el país del comprador.</p>
        <p className="mt-2">El acceso a los cursos o programas se concede tras la confirmación del pago. Polyglot Labs LLC se reserva el derecho de actualizar precios o promociones en cualquier momento, así como de la admisión a los programas de formación.</p>

        <h3 className="font-bold mt-4">5. DEVOLUCIONES Y CANCELACIONES</h3>
        <p className="mt-2">El cliente dispone de 7 días naturales desde la compra para solicitar el reembolso. Una vez solicitado, se revoca el acceso al curso. Transcurrido el plazo de 7 días, no se admiten devoluciones salvo error técnico.</p>

        <h3 className="font-bold mt-4">6. PROPIEDAD INTELECTUAL</h3>
        <p className="mt-2">Todos los contenidos del sitio (textos, vídeos, materiales descargables, marcas, logos, etc.) son propiedad exclusiva de Polyglot Labs LLC o de sus licenciantes. Queda prohibida su reproducción, distribución o uso con fines comerciales sin autorización expresa.</p>

        <h3 className="font-bold mt-4">7. EXCLUSIÓN DE RESPONSABILIDAD</h3>
        <p className="mt-2">Polyglot Labs LLC no garantiza la disponibilidad continua del sitio ni se responsabiliza de daños derivados del uso de los contenidos. Los programas de aprendizaje ofrecidos tienen carácter formativo; el progreso y resultados dependen del compromiso del usuario.</p>

        <h3 className="font-bold mt-4">8. PROTECCIÓN DE DATOS</h3>
        <p className="mt-2">Los datos personales se tratarán conforme a la Política de Privacidad disponible en esta web.</p>

        <h3 className="font-bold mt-4">9. JURISDICCIÓN Y LEY APLICABLE</h3>
        <p className="mt-2">Las relaciones entre Polyglot Labs LLC y los usuarios se regirán por la normativa internacional de protección de datos y, en caso de conflicto, por la legislación de los Estados Unidos de América, siendo competentes los tribunales del Estado de Wyoming.</p>

        <h3 className="font-bold mt-4">10. CONTACTO</h3>
        <p className="mt-2">Para cualquier duda, consulta o reclamación relacionada con el uso del sitio o la compra de productos, el usuario puede contactar en: <a href="mailto:hola@pedropoliglota.com">hola@pedropoliglota.com</a></p>
      </section>
    </main>
  );
}
