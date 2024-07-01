export default function Contact() {
  return (
    <>
      <ul className="contact">
        <li>
          <h3>
            <i style={{ color: "#0866ff" }} class="fa-brands fa-facebook"></i>
            <a
            style={{background:"#0866ff",borderRadius:"10px",padding:"5px"}}
              href="https://www.facebook.com/profile.php?id=61561009612936"
              target="_blank"
            >
              Facebook
            </a>
          </h3>
          <p></p>
        </li>

        <li>
          <h3>
            <i
              style={{ color: "#0dc143",fontSize:"45px" }}
              class="fa-brands fa-square-whatsapp"
            ></i>
            <a style={{background:"#0dc143",borderRadius:"10px",padding:"5px"}} href="https://wa.link/maaozs" target="_blank">
              +201017953052
            </a>
          </h3>
        </li>

        <li>
          <h3>
            <i style={{ color: "#ca2320" }} class="fa-solid fa-envelope"></i>
            <a style={{background:"#ca2320",borderRadius:"10px",padding:"5px"}} href="mailto:mohamedashraf7106@gmail.com">
              mohamedashraf7106@gmail.com
            </a>
          </h3>
        </li>

        <li>
          <h3>
            <i style={{ color: "#0668c3" }} class="fa-brands fa-linkedin"></i>
            <a style={{background:"#0668c3",borderRadius:"10px",padding:"5px"}} href="https://www.linkedin.com/in/mohamed-ashraf-1b9929311/" target="_blank">Linkedin</a>
          </h3>
          <p></p>
        </li>
      </ul>
    </>
  );
}
