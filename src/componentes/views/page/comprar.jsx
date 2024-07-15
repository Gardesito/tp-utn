import React from "react";

const Comprar = () => {
  return (
    <>
      <Head />
      <div className="products">
        <div>
          <div class="container-title">Galletas</div>

          <main>
            <div class="container-img">
              <img
                src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717794197/galletas_flv4qs.png"
                alt="imagen-producto"
                className="img-products"
              />
            </div>
            <div class="container-info-product">
              <div class="container-price">
                <span>$95.00</span>
                <i class="fa-solid fa-angle-right"></i>
              </div>

              <div class="container-details-product">
                <div class="form-group">
                  <label for="colour">Tipo</label>
                  <select name="colour" id="colour">
                    <option disabled selected value="">
                      Escoge una opción
                    </option>
                    <option value="rojo">Cokie Doble Chocolate</option>
                    <option value="blanco">Naranja con Chocolate</option>
                    <option value="beige">Cookie Rellena</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="size">Extra</label>
                  <select name="size" id="size">
                    <option disabled selected value="">
                      Escoge una opción
                    </option>
                    <option value="Nutella">Nutella</option>
                    <option value="Dulce de Leche">Dulce de Leche</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Ninguno">Ninguno</option>
                  </select>
                </div>
                <button class="btn-clean">Limpiar</button>
              </div>

              <div class="container-add-cart">
                <div class="container-quantity">
                  <input
                    type="number"
                    placeholder="1"
                    value="1"
                    min="1"
                    class="input-quantity"
                  />
                  <div class="btn-increment-decrement">
                    <i class="fa-solid fa-chevron-up" id="increment"></i>
                    <i class="fa-solid fa-chevron-down" id="decrement"></i>
                  </div>
                </div>
                <button class="btn-add-to-cart">
                  <i class="fa-solid fa-plus"></i>
                  Añadir al carrito
                </button>
              </div>

              <div class="container-description">
                <div class="title-description">
                  <h4>Descripción</h4>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="text-description">
                  <p>
                    ¡Descubre el placer irresistible de nuestras galletas de
                    chocolate! Cada bocado es una explosión de sabor, combinando
                    el dulzor perfecto con la textura crujiente por fuera y
                    suave por dentro. Hechas con el mejor cacao y trozos de
                    chocolate fundido, estas galletas son el capricho ideal para
                    cualquier momento del día. Ya sea para acompañar tu café
                    matutino, disfrutar de una merienda deliciosa, o compartir
                    con amigos y familiares, nuestras galletas de chocolate te
                    ofrecerán una experiencia gourmet inolvidable. ¡Ven y prueba
                    la felicidad en cada mordisco!
                  </p>
                </div>
              </div>

              <div class="container-additional-information">
                <div class="title-additional-information">
                  <h4>Información adicional</h4>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="text-additional-information hidden">
                  <p>-----------</p>
                </div>
              </div>

              <div class="container-reviews">
                <div class="title-reviews">
                  <h4>Reseñas</h4>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="text-reviews hidden">
                  <p>-----------</p>
                </div>
              </div>

              <div class="container-social">
                <span>Compartir</span>
                <div class="container-buttons-social">
                  <a href="#">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </main>

          <section class="container-related-products">
            <h2>Productos Relacionados</h2>
            <div class="card-list-products">
              <div class="card">
                <div class="card-img">
                  <img
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1717706810/factura_w3ect6.png"
                    alt="producto-1"
                  />
                </div>
                <div class="info-card">
                  <div class="text-product">
                    <h3>Nike - Roshe Run</h3>
                    <p class="category">Footwear, Sneakers</p>
                  </div>
                  <div class="price">$85.00</div>
                </div>
              </div>
              <div class="card">
                <div class="card-img">
                  <img
                    src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717793969/donas_b1zxqu.png"
                    alt="producto-2"
                  />
                </div>
                <div class="info-card">
                  <div class="text-product">
                    <h3>Common Projects Achilles</h3>
                    <p class="category">Footwear, Sneakers</p>
                  </div>
                  <div class="price">$255.00</div>
                </div>
              </div>
              <div class="card">
                <div class="card-img">
                  <img
                    src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717793968/torta_nrxsym.png"
                    alt="producto-3"
                  />
                </div>
                <div class="info-card">
                  <div class="text-product">
                    <h3>Adidas - Boston Super OG</h3>
                    <p class="category">Footwear, Sneakers</p>
                  </div>
                  <div class="price">$105.00</div>
                </div>
              </div>
              <div class="card">
                <div class="card-img">
                  <img
                    src="https://res.cloudinary.com/doo4zye2n/image/upload/v1717794197/galletas_flv4qs.png"
                    alt="producto-4"
                  />
                </div>
                <div class="info-card">
                  <div class="text-product">
                    <h3>Common Projects Achilles</h3>
                    <p class="category">Footwear, Sneakers</p>
                  </div>
                  <div class="price">$250.00</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Comprar };
