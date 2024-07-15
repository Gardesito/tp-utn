import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <section>
        <h2>Productos Destacados</h2>

        <ul className="shop-pets">
          <li className="card-large card-light" id="sup-dog">
            <div className="card-image">
              <img src="https://res.cloudinary.com/dtmziqubb/image/upload/v1717706810/factura_w3ect6.png" />
            </div>
            <ul>
              Facturas
              <li>
                <a href="#">Coissant</a>
              </li>
              <li>
                <a href="#">Vigilante</a>
              </li>
              <li>
                <a href="#">Tortita Negra</a>
              </li>
              <li>
                <a href="#">Pan de Leche</a>
              </li>
              <li>
                <a href="#">Churros</a>
              </li>
              <Link to="/facturas">
                <a className="btn-all">
                  <button className="btn-outline-light">
                    Comprar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2.2"
                      stroke="currentColor"
                      class="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </button>
                </a>
              </Link>
            </ul>
          </li>

          <li className="card-large card-dark" id="sup-cat">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717793969/donas_b1zxqu.png"
                alt=""
              />
            </div>
            <ul>
              Donas
              <li>
                <a href="#">Donuts Glace</a>
              </li>
              <li>
                <a href="#">Donuts Nutella</a>
              </li>
              <li>
                <a href="#">Mini Donas</a>
              </li>
              <button className="btn-outline-dark">
                Comprar{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.2"
                  stroke="currentColor"
                  class="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
            </ul>
          </li>

          <li className="card-large card-dark" id="sup-bird">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717793968/torta_nrxsym.png"
                alt=""
              />{" "}
            </div>
            <ul>
              Tortas
              <li>
                <a href="#">Rogel</a>
              </li>
              <li>
                <a href="#">Selva negra</a>
              </li>
              <li>
                <a href="#">Chocotorta</a>
              </li>
              <button className="btn-outline-dark">
                Comprar{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.2"
                  stroke="currentColor"
                  class="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
            </ul>
          </li>
          <li className="card-large card-light" id="sup-fish">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717794197/galletas_flv4qs.png"
                alt=""
              />{" "}
            </div>
            <ul>
              Galletas
              <li>
                <a href="#">Cookie Doble Chocolate</a>
              </li>
              <li>
                <a href="#">Cookie de Naranja con Chocolate</a>
              </li>
              <li>
                <a href="#">Cookie Rellena con Dulce de Leche</a>
              </li>
              <button className="btn-outline-light">
                Comprar{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.2"
                  stroke="currentColor"
                  class="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>Nuestros Servicios</h2>

        <ul className="services">
          <li className="card-large card-dark card-wide" id="serv-groom">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717795433/panaderia_w5dlim.png"
                alt=""
              />{" "}
            </div>
            <ul>
              Panaderia <span class="subtitle">Servicios de Lunch </span>
              <li>
                <a href="#">Desayunos</a>
                <span>$70USD</span>
              </li>
              <li>
                <a href="#">Meriendas</a>
                <span>$50USD</span>
              </li>
              <li>
                <a href="#">Eventos</a>
                <span>$450USD</span>
              </li>
              <button className="btn-filled-dark">
                Detalles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </ul>
          </li>
          <li className="card-large card-dark card-wide" id="serv-board">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717795581/9023920_mtjyo5.png"
                alt=""
              />{" "}
            </div>
            <ul>
              Pasteleria <span class="subtitle">Para eventos </span>
              <li>
                <a href="#">Bodas</a>
                <span>$800USD</span>
              </li>
              <li>
                <a href="#">Cumpleaños</a>
                <span>$500USD</span>
              </li>
              <button className="btn-filled-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>{" "}
                Detalles{" "}
              </button>
            </ul>
          </li>
        </ul>
      </section>
      <section id="locate">
        <div>
          <h2>Lugares de nuestras sedes</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, dolor eveniet labore earum quaerat ipsa expedita maiores
            ducimus voluptate veniam!
          </p>
          <div className="btn-group">
            <button className="btn-filled-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              Agenda Semanal
            </button>

            <Link to="/contact">
              <button className="btn-outline-dark btn-hover-color">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                Contactanos
              </button>
            </Link>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Body;
