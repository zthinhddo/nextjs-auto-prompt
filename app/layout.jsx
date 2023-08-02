import '@styles/globals.css';

// Create metadata
export const metadata = {
    title: "Smart auto prompt",
    description: 'Discover & Share AI Prompts',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main>
          <div className="app">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;