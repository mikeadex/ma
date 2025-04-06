export default function ContactForm() {
  return (
    <form>
      <input type="text" required placeholder="Your Name" />
      <input type="email" required placeholder="Your Email" />
      <textarea required placeholder="Your Message"></textarea>
      <button type="submit" className="z-btn">
        Send Message
      </button>
    </form>
  );
}
