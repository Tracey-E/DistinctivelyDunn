const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");

app.use(cors());
app.use(express.json());

//routes//
app.get("/", (req, res) => {
  res.status(200).send("hi");
});

//create//

//create design
app.post("/designs", async (req, res) => {
  try {
    const { name } = req.body;
    const newDesign = await pool.query(
      "insert into designs (name) values($1) ",[name]
    );
    res.json(newDesign);
  } catch (error) {
    console.error(error.message);
  }
});
//create design_color
app.post("/designColors", async (req, res) => {
  try {
    const { color } = req.body;
    const newDesignColor = await pool.query(
      "insert into designcolors (color) values($1) ",[color]
    );
    res.json(newDesignColor);
  } catch (error) {
    console.error(error.message);
  }
});
//create bagColor
app.post("/bagColor", async (req, res) => {
  try {
    const { name } = req.body;
    const newBagColor = await pool.query(
      "insert into bagcolor (name) values($1) ",[name]
    );
    res.json(newBagColor);
   
  } catch (error) {
    console.error(error.message);
  }
});
//create created bag
app.post("/createdbag", async (req, res) => {
  try {
    const { createdBag } = req.body;
    const newCreatedBag = await pool.query(
      "insert into createdbag ((color_id), (designcolors_id), (designs_id), (bagid),(quantity),(itemtype_id)) values($1) ",[
        createdBag
      ]
    );
    res.json(newCreatedBag);
  } catch (error) {
    console.error(error.message);
  }
});
//create item
app.post("/items", async (req, res) => {
  try {
    const { itemName } = req.body;
    const newItem = await pool.query(
      "insert into designs (itemName) values($1) returning *"[itemName]
    );
    res.json(newItem.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//create orders
app.post("/orders", async (req, res) => {
  try {
    const { order } = req.body;
    const neworder = await pool.query(
      "insert into orders (customerid), (ordertotal),(createdbagid) values($1) returning *"[order_id]
    );
    res.json(neworder.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//create customer
app.post("/customers", async (req, res) => {
  try {
    const { customer } = req.body;
    const neworder = await pool.query(
      "insert into customers (firstname),(lastname),(email), (address) values($1) returning *"[customerid]
    );
    res.json(newcustomer.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
//get//

//get design
app.get("/design/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const design = await pool.query(
      "select * from designs where design_id =$1",
      [id]
    );
  } catch (error) {
    console.error(error.message);
  }
});
//get designColor
app.get("/designColor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const color = await pool.query(
      "select * from designcolor where color_id =$1",
      [id]
    );
  } catch (error) {
    console.error(error.message);
  }
});
//get bagColor
app.get("/bagColor", async (req, res) => {
  try {
   
    const bagColor = await pool.query(
      "select * from bagcolor  where name = name",
     
    );
  } catch (error) {
    console.error(error.message);
  }
});
//get createdbag
app.get("/createdbag/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const createedBag = await pool.query(
      "select * from createdbag ",
      
    );
  } catch (error) {
    console.error(error.message);
  }
});
//get item
app.get("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await pool.query("select * from items where items_id =$1", [
      id,
    ]);
  } catch (error) {
    console.error(error.message);
  }
});

//get orders
app.get("/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const iorder = await pool.query(
      "select * from orders where orders_id =$1",
      [id]
    );
  } catch (error) {
    console.error(error.message);
  }
});

//get all//

//get all designs
app.get("/designs", async (req, res) => {
  try {
    const allDesigns = await pool.query(
      "select * from designs ORDER BY name Asc"
    );

    res.json(allDesigns.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//get all design_color
app.get("/designColors", async (req, res) => {
  try {
    const allDesignColors = await pool.query(
      "select * from designcolors ORDER BY color ASC"
    );
   
    res.json(allDesignColors.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//get all bagColor
app.get("/bagColors", async (req, res) => {
  try {
    const allBagColors = await pool.query(
      "select * from bagcolor order by name asc"
    );
    res.json(allBagColors.rows);
  
  } catch (error) {
    console.error(error.message);
  }
});
//get all createdbags
app.get("/createdBags", async (req, res) => {
  try {
    const allCreatedbags = await pool.query(
      "select * from createdbag "
      );
      console.log(allCreatedbags)
    res.json(allCreatedbags.rows);
 
  } catch (error) {
    console.error(error.message);
  }
});
//get all item
app.get("/items", async (req, res) => {
  try {
    const allItems = await pool.query("select * from items");
    res.json(allItems.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get all orders
app.get("/orders", async (req, res) => {
  try {
    const allOrders = await pool.query("select * from orders");
    res.json(allOrders.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get all customers
app.get("/customers", async (req, res) => {
  try {
    const allCustomers = await pool.query("select * from customers");
    res.json(allCustomers.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//delete//

//delete design

app.get("/design/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDesign = await pool.query(
      "delete from designs where designs_id =$1",
      [id]
    );
    res.json("succesfully deleted");
  } catch (error) {
    console.error(error.message);
  }
});

//delete design_color

app.get("/designcolor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDesignColor = await pool.query(
      "delete from designcolor where designcolor_id =$1",
      [id]
    );
    res.json("succesfully deleted");
  } catch (error) {
    console.error(error.message);
  }
});
//delete bagColor

app.get("/bagColor", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBagColour = await pool.query(
      "delete from bagcolor where name = name",
      
    );
    res.json("succesfully deleted");
  } catch (error) {
    console.error(error.message);
  }
});
//delete created_item

app.get("/createditem/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCreated_item = await pool.query(
      "delete from createditem where createditem_id =$1",
      [id]
    );
    res.json("succesfully deleted");
  } catch (error) {
    console.error(error.message);
  }
});
//delete item
app.get("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await pool.query(
      "delete from items where items_id =$1",
      [id]
    );
    res.json("succesfully deleted");
  } catch (error) {
    console.error(error.message);
  }
});

//delete orders

app.get("/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await pool.query(
      "delete from orders where orders_id =$1",
      [id]
    );
    res.json("succesfully deleted");
  } catch (error) {
    console.error(error.message);
  }
});

//port

app.listen(5000, () => {
  console.log("server started");
});
