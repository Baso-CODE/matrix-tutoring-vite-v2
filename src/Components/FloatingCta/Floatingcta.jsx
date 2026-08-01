import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";
import "./Floatingcta.css";

const Floatingcta = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <span className="label-cta" aria-hidden="true">
          Chat With Us
        </span>

        <a
          className="parent-btn-wa"
          href={contactData?.link_cta}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat dengan kami via WhatsApp">
          <span className="btn-float-wa" role="presentation">
            <span className="parent-icon-wa">
              <img
                src="/images/icon-wa.svg"
                alt=""
                aria-hidden="true"
                className="icon-wa"
                loading="lazy"
              />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Floatingcta;
