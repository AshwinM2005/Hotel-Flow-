import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";

/* -------------------- Layout -------------------- */

function Layout({ children }) {
  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>🏨 Hotel Bliss</h2>

        <Nav />
      </aside>

      <main style={styles.main}>
        <Header />
        <div style={styles.content}>{children}</div>
      </main>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <NavItem to="/" label="Home" />
      <NavItem to="/new-booking" label="New Booking" />
      <NavItem to="/bookings" label="My Bookings" />
      <NavItem to="/documents" label="My Documents" />
      <NavItem to="/services" label="Hotel Services" />
      <NavItem to="/profile" label="Profile" />
      <NavItem to="/logout" label="Logout" />
    </nav>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...styles.navItem,
        background: isActive ? "#2563eb" : "transparent",
        color: isActive ? "#fff" : "#333"
      })}
    >
      {label}
    </NavLink>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <h3>Hello, Alex 👋</h3>
      <div>🔔 ⚙️</div>
    </header>
  );
}

/* -------------------- Pages -------------------- */

function Dashboard() {
  return (
    <>
      <Card title="Your Upcoming Stay">
        <div style={styles.hero}>Hotel View</div>

        <div style={styles.row}>
          <Info label="Check-in" value="Oct 25, 3:00 PM" />
          <Info label="Check-out" value="Oct 28, 11:00 AM" />
          <Info label="Guests" value="2 Adults, 1 Child" />
        </div>
      </Card>

      <div style={styles.grid}>
        <SmallCard title="Verification Status">
          <p>Pending</p>
          <button style={styles.button}>Upload ID</button>
        </SmallCard>

        <SmallCard title="Loyalty Rewards">
          <h2>1,250</h2>
          <p>Points</p>
        </SmallCard>
      </div>
    </>
  );
}

function NewBooking() {
  return <Page title="New Booking">Create a new hotel booking here.</Page>;
}

function MyBookings() {
  return <Page title="My Bookings">Your past and upcoming bookings.</Page>;
}

function MyDocuments() {
  return <Page title="My Documents">Upload and manage your documents.</Page>;
}

function HotelServices() {
  return <Page title="Hotel Services">Spa, restaurant, transport, room service.</Page>;
}

function Profile() {
  return <Page title="Profile">User profile settings.</Page>;
}

function Logout() {
  const navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => navigate("/"), 1000);
  }, [navigate]);

  return <Page title="Logging out">You are being logged out...</Page>;
}

/* -------------------- Reusable UI -------------------- */

function Page({ title, children }) {
  return (
    <Card title={title}>
      <p>{children}</p>
    </Card>
  );
}

function Card({ title, children }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function SmallCard({ title, children }) {
  return (
    <div style={styles.smallCard}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <small>{label}</small>
      <div><b>{value}</b></div>
    </div>
  );
}

/* -------------------- App Entry -------------------- */

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new-booking" element={<NewBooking />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/documents" element={<MyDocuments />} />
          <Route path="/services" element={<HotelServices />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Layout>
    </Router>
  );
}

/* -------------------- Styles -------------------- */

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    fontFamily: "sans-serif",
    background: "#f4f6f8"
  },
  sidebar: {
    width: "220px",
    background: "#fff",
    padding: "20px",
    borderRight: "1px solid #ddd"
  },
  logo: {
    marginBottom: "20px"
  },
  navItem: {
    display: "block",
    padding: "10px",
    marginBottom: "6px",
    borderRadius: "6px",
    textDecoration: "none"
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  header: {
    padding: "16px",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd"
  },
  content: {
    padding: "20px",
    overflowY: "auto"
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px"
  },
  smallCard: {
    background: "#fff",
    padding: "16px",
    borderRadius: "10px"
  },
  hero: {
    height: "160px",
    background: "#3b82f6",
    color: "#fff",
    fontSize: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    marginBottom: "20px"
  },
  row: {
    display: "flex",
    justifyContent: "space-between"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },
  button: {
    padding: "8px 12px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer"
  }
};
