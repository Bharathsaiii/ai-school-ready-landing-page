import "./../styles/products.css";

const Products = () => {
  return (
    <section className="products">
      <div className="container">

        <h2>Our AI Solutions for Schools</h2>

        <div className="grid">

          <div className="card">
            <h3>Cypher</h3>
            <p>AI learning companion for students.</p>
          </div>

          <div className="card">
            <h3>Morpheus</h3>
            <p>AI assistant for teachers.</p>
          </div>

          <div className="card">
            <h3>Zion</h3>
            <p>All AI tools in one platform.</p>
          </div>

          <div className="card">
            <h3>NEO</h3>
            <p>Hands-on AI innovation lab.</p>
          </div>

          <div className="card">
            <h3>Matrix</h3>
            <p>Complete AI infrastructure.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Products;