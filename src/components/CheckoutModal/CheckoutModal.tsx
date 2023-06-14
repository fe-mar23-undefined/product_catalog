import "./CheckoutModal.scss";

export const CheckoutModal: React.FC = () => {
  return (
    <div className="modal">
      <div className="modal__background"></div>
      <div className="modal__box">
        <div className="modal__content">
          <div
            className="modal__content-item modal__content-item--flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" className="modal__content-item--green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill="#27ae60" /></svg>
            {/* TODO: swap fill to currentColor and MAKE IT WORK SOMEHOW */}
            <h1
              className="heading--h4 modal__content-item-text modal__content-item-text--right modal__content-item--green"
            >
              Your payment was successful!
            </h1>
          </div>
          <p
            className="text--regular modal__content-item modal__content-item-text--center"
          >
            Thank you for shopping at Nice&nbsp;Gadgets! Your order number is:
          </p>
          <p
            className="heading--h2 modal__content-item modal__content-item-text--center"
          >
            #2137
          </p>
        </div>
      </div>
    </div>
  )
}