export default function Contact() {
  return (
    <section className="contact f-center" id="contact">
      <div className="contact__content container f-center">
        <h1 className="contact__content-title">Contact Us.</h1>
        <div className="contact__content-info f-center">
          <h2 className="contact__content-info_title">
            For any content suggestions or recommendations, feel free to send us
            a message below.
          </h2>
          <div className="contact__content-info_forms">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583090278!2d-74.1197637963364!3d40.697663748629545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sdz!4v1676546024592!5m2!1sen!2sdz"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <form className="contact__content-info_forms-form f-center">
              <div className="contact__content-info_forms-form_fields f-center">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" rows="7"></textarea>
              </div>
              <div className="contact__content-info_forms-form_fields-submit">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
