import React from "react";
import { Link } from "react-router-dom";

import Hero from "../partials/hero";
import Head from "../partials/head";
import Footer from "../partials/footer";

/*  */
const modal = document.querySelectorAll(".modal"),
  cardBtn = document.querySelectorAll(".card__product"),
  modalClose = document.querySelectorAll(".modal__close"),
  modalCard = document.querySelectorAll(".modal__card");

let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

/*  */

cardBtn.forEach((cardBtn, i) => {
  cardBtn.addEventListener("click", () => {
    activeModal(i);
  });
});

/*  */

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove("active-modal");
    });
  });
});
/*  */
modal.forEach((modal) => {
  modal.addEventListener("click", () => {
    modal.classList.remove("active-modal");
  });
});
/*  */
modalCard.forEach((modalCard) => {
  modalCard.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

const Products = () => {
  return (
    <>
      <Head />

      <section className="container-productos">
        <h2 className="container__title">Productos</h2>

        <div className="card__container">
          <article>
            {/*  <!-- CARD PRODUCT --> */}
            <div className="card__product">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1720819309/facr_pv0hgm.png"
                alt="image"
                className="card__img"
              />

              <div>
                <h3 className="card__name">Factura</h3>
                <span className="card__price">$20</span>
              </div>
            </div>

            {/* <!-- POPUP MODAL --> */}
            <div className="modal">
              <div className="modal__card">
                <i className="ri-close-large-line modal__close"></i>

                <img
                  src="https://res.cloudinary.com/doo4zye2n/image/upload/v1720819309/facr_pv0hgm.png"
                  alt="image"
                  className="modal__img"
                />

                <div>
                  <h3 className="modal__name">Factura</h3>
                  <p className="modal__info">
                    Computer product in the best brand and of good quality at a
                    good price.
                  </p>
                  <span className="modal__price">$20</span>
                </div>

                <div className="modal__buttons">
                  <button className="modal__button modal__button-ghost">
                    Comprar
                  </button>
                  <button className="modal__button">Add to Cart</button>
                </div>
              </div>
            </div>
          </article>

          <article>
            {/*           <!-- CARD PRODUCT -->
             */}{" "}
            <div class="card__product">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717793968/torta_nrxsym.png"
                alt="image"
                className="card__img"
              />

              <div>
                <h3 className="card__name">Torta</h3>
                <span className="card__price">$10</span>
              </div>
            </div>
            {/*           <!-- POPUP MODAL -->
             */}{" "}
            <div className="modal">
              <div className="modal__card">
                <i className="ri-close-large-line modal__close"></i>

                <img
                  src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717793968/torta_nrxsym.png"
                  alt="image"
                  className="modal__img"
                />

                <div>
                  <h3 className="modal__name">Torta</h3>
                  <p className="modal__info">
                    Computer product in the best brand and of good quality at a
                    good price.
                  </p>
                  <span className="modal__price">$10</span>
                </div>

                <div className="modal__buttons">
                  <button className="modal__button modal__button-ghost">
                    Comprar
                  </button>
                  <button className="modal__button">Add to Cart</button>
                </div>
              </div>
            </div>
          </article>

          <article>
            {/*           <!-- CARD PRODUCT -->
             */}{" "}
            <div className="card__product">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717793969/donas_b1zxqu.png"
                alt="image"
                className="card__img"
              />

              <div>
                <h3 className="card__name">Cooling Fan</h3>
                <span className="card__price">$59</span>
              </div>
            </div>
            {/*           <!-- POPUP MODAL -->
             */}{" "}
            <div className="modal">
              <div className="modal__card">
                <i className="ri-close-large-line modal__close"></i>

                <img
                  src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717793969/donas_b1zxqu.png"
                  alt="image"
                  className="modal__img"
                />

                <div>
                  <h3 className="modal__name">Cooling Fan</h3>
                  <p className="modal__info">
                    Computer product in the best brand and of good quality at a
                    good price.
                  </p>
                  <span className="modal__price">$59</span>
                </div>

                <div className="modal__buttons">
                  <button className="modal__button modal__button-ghost">
                    Comprar
                  </button>
                  <button className="modal__button">Add to Cart</button>
                </div>
              </div>
            </div>
          </article>

          <article>
            {/*           <!-- CARD PRODUCT -->
             */}{" "}
            <div className="card__product">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717794197/galletas_flv4qs.png"
                alt="image"
                className="card__img"
              />

              <div>
                <h3 className="card__name">Keyboard</h3>
                <span className="card__price">$39</span>
              </div>
            </div>
            {/*           <!-- POPUP MODAL -->
             */}{" "}
            <div className="modal">
              <div className="modal__card">
                <i className="ri-close-large-line modal__close"></i>

                <img
                  src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717794197/galletas_flv4qs.png"
                  alt="image"
                  className="modal__img"
                />

                <div>
                  <h3 className="modal__name">Keyboard</h3>
                  <p className="modal__info">
                    Computer product in the best brand and of good quality at a
                    good price.
                  </p>
                  <span className="modal__price">$39</span>
                </div>

                <div className="modal__buttons">
                  <button className="modal__button modal__button-ghost">
                    Comprar
                  </button>
                  <button className="modal__button">Add to Cart</button>
                </div>
              </div>
            </div>
          </article>

          <article>
            {/*           <!-- CARD PRODUCT -->
             */}{" "}
            <div className="card__product">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1720819154/9822259_cr5y3l.png"
                alt="image"
                className="card__img"
              />

              <div>
                <h3 className="card__name">GPU Graphics</h3>
                <span className="card__price">$799</span>
              </div>
            </div>
            {/*           <!-- POPUP MODAL -->
             */}{" "}
            <div className="modal">
              <div className="modal__card">
                <i className="ri-close-large-line modal__close"></i>

                <img
                  src="https://res.cloudinary.com/doo4zye2n/image/upload/v1720819154/9822259_cr5y3l.png"
                  alt="image"
                  className="modal__img"
                />

                <div>
                  <h3 class="modal__name">GPU Graphics</h3>
                  <p class="modal__info">
                    Computer product in the best brand and of good quality at a
                    good price.
                  </p>
                  <span className="modal__price">$799</span>
                </div>

                <div class="modal__buttons">
                  <button className="modal__button modal__button-ghost">
                    Comprar
                  </button>
                  <button className="modal__button">Carrito</button>
                </div>
              </div>
            </div>
          </article>

          <article>
            {/*           <!-- CARD PRODUCT -->
             */}{" "}
            <div className="card__product">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1720819266/10947570_ujpcp8.png"
                alt="image"
                className="card__img"
              />

              <div>
                <h3 className="card__name">Connection USB</h3>
                <span className="card__price">$19</span>
              </div>
            </div>
            {/*           <!-- POPUP MODAL -->
             */}{" "}
            <div className="modal">
              <div className="modal__card">
                <i className="ri-close-large-line modal__close"></i>

                <img
                  src="https://res.cloudinary.com/doo4zye2n/image/upload/v1720819266/10947570_ujpcp8.png"
                  alt="image"
                  className="modal__img"
                />

                <div>
                  <h3 className="modal__name">Connection USB</h3>
                  <p className="modal__info">
                    Computer product in the best brand and of good quality at a
                    good price.
                  </p>
                  <span className="modal__price">$19</span>
                </div>

                <div className="modal__buttons">
                  <button className="modal__button modal__button-ghost">
                    Comprar
                  </button>
                  <button className="modal__button">Add to Cart</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
