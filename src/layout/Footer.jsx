function Footer() {
  return (
    <footer className="page-footer green lighten-2">
      <div className="footer-copyright">
        <div className="container">
          {`© ${new Date().getFullYear()}. Ruslan Gaziev`}
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
