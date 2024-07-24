// src/components/Header.tsx
import ConnectWallet from "./ConnectWallet";

const Header = () => (
  <header className="header">
    <div className="logo">ChainFunds</div>
    <nav className="nav">
      <a>Product</a>
      <a>Team</a>
      <a>Contact</a>
    </nav>
    <ConnectWallet />
  </header>
);

export default Header;
