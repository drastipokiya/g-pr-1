function Product() {
  return (
    <div>
      <h1>Product Table</h1>
      <table className="table-striped table-bordered table-hover table-danger">
        <thead>
          <tr>
            <th className="table-primary">Image</th>
            <th className="table-Secondary">Name</th>
            <th className="table-success">Description</th>
            <th className="table-warning">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
                alt="sneakers"
                width="100"
              />
            </td>
            <td className="table-warning">Cyxus</td>
            <td>Non-Slip Fitness Leisure Running Sneakers</td>
            <td className="table-success">$29</td>
          </tr>
          {/* Add more product rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
