import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <header>
        <div class="banner">Delivery GRATIS a partir de los $5000 🤑</div>
        <nav>
          <div id="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon"
            >
              <path
                fill-rule="evenodd"
                d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            <Link to="/">
              {" "}
              EliasDev <br />
              Panecito
            </Link>
          </div>
          <ul class="navigation-menu">
            <li>
              <Link to="/products">Productos</Link>
              <ul class="subnav">
                <li class="card-med" id="sup-dog">
                  <div class="card-image">
                    <img src="https://res.cloudinary.com/dtmziqubb/image/upload/v1717706810/factura_w3ect6.png" />
                  </div>
                  <a href="#">
                    <span>Facturas</span>
                    <span>
                      Comprar{" "}
                      <span class="material-symbols-outlined">
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
                      </span>
                    </span>
                  </a>
                </li>
                <li class="card-med" id="sup-cat">
                  <div class="card-image">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717793969/donas_b1zxqu.png"
                      alt=""
                    />{" "}
                  </div>
                  <a href="#">
                    <span>Donas</span>
                    <span>
                      Comprar{" "}
                      <span class="material-symbols-outlined">
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
                      </span>
                    </span>
                  </a>
                </li>
                <li class="card-med" id="sup-bird">
                  <div class="card-image">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717793968/torta_nrxsym.png"
                      alt=""
                    />{" "}
                  </div>
                  <a href="#">
                    <span>Tortas</span>
                    <span>
                      Comprar{" "}
                      <span class="material-symbols-outlined">
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
                      </span>
                    </span>
                  </a>
                </li>
                <li class="card-med" id="sup-fish">
                  <div class="card-image">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717794197/galletas_flv4qs.png"
                      alt=""
                    />{" "}
                  </div>
                  <a href="#">
                    <span>Galletas</span>
                    <span>
                      Comprar{" "}
                      <span class="material-symbols-outlined">
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Servicios</a>
              <ul class="subnav">
                <li class="card-med" id="serv-groom">
                  <div class="card-image">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717795433/panaderia_w5dlim.png"
                      alt=""
                    />{" "}
                  </div>
                  <a href="#">
                    <span>Panaderia</span>
                    <span>
                      Mas informacion{" "}
                      <span class="material-symbols-outlined">
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
                      </span>
                    </span>
                  </a>
                </li>
                <li class="card-med" id="serv-board">
                  <div class="card-image">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717795581/9023920_mtjyo5.png"
                      alt=""
                    />{" "}
                  </div>
                  <a href="#">
                    <span>Pasteleria</span>
                    <span>
                      Mas informacion{" "}
                      <span class="material-symbols-outlined">
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#locate">Lugar &amp; Hora</a>
            </li>
            <li>
              <Link to="/about">Sobre Nosotros</Link>
            </li>
          </ul>
          <div id="utility">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 28"
              stroke-width="4.2"
              stroke="currentColor"
              className="icon"
            >
              <path
                stroke-linecap="black"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>{" "}
            <Link to="/carrito">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.2"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Head;
