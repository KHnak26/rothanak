import Logo from "/src/assets/pn-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="PN Logo" />
      <h1>Students results for (fake batch name)</h1>
    </header>
  );
}

export default Header;