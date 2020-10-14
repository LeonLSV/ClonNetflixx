import React from "react";

import "./styles/ListFAQ.css";
import CardFAQ from "./CardFAQ";
import FormEmail from "../components/FormEmail";

class ListFAQ extends React.Component {
  render() {
    return (
      <div className="faq-card">
        <h2 className="faq-title">Preguntas frecuentes</h2>
        <ul className="faq-list">
          <li className="faq-list__item">
            <CardFAQ
              question="¿Qué es Netflix?"
              answer="Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
            Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"
            />
          </li>
          <li className="faq-list__item">
            <CardFAQ
              question="¿Cuánto cuesta Netflix?"
              answer="Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $139 hasta $266 al mes. Sin costos adicionales ni contratos."
            />
          </li>
          <li className="faq-list__item">
            <CardFAQ
              question="¿Dónde puedo ver Netflix?"
              answer="Ve donde quieras, cuando quieras y en todos los dispositivos que quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.
            Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea."
            />
          </li>
          <li className="faq-list__item">
            <CardFAQ
              question="¿Cómo cancelo?"
              answer="Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras."
            />
          </li>
          <li className="faq-list__item">
            <CardFAQ
              question="¿Qué puedo ver en Netflix?"
              answer="Netflix tiene una vasta biblioteca de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras. Disfruta 30 días gratis y ve todo lo que Netflix tiene para ofrecer."
            />
          </li>
          <li className="faq-list__item">
            <CardFAQ
              question="¿Cómo funciona la prueba gratis?"
              answer="¡Prueba 30 días gratis! Si estás disfrutando Netflix, no hagas nada y tu membresía continuará automáticamente hasta que tú lo decidas. Si la cancelas antes de que haya terminado la prueba, no se te cobrará. Sin contratos complicados, costos de cancelación ni compromisos. Cancela online cuando quieras, las 24 horas del día."
            />
          </li>
        </ul>
        <FormEmail />
      </div>
    );
  }
}

export default ListFAQ;
