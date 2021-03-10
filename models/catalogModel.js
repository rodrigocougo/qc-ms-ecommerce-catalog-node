const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model para registro dos doadores
const schema = new Schema({
  code: { type: String, unique: [true, 'Já existe este código em nossa base de dados'], size: 80, name: "product.label.code" },
  title: { type: String, size: 80, name: "product.label.title" },
  description: { type: String, size: 80, name: "product.label.description" },
  status: { type: String, size: 80, default: 'Iniciado...', enum: ['Iniciado...', 'Em andamento...', 'Finalizado...'], name: "product.label.status" },
  imgurl: { type: String, size: 250, name: "product.label.imgurl" },
  mandatory_fee: { type: Boolean, default: false, name: "product.label.mandatory_fee" },
  limit_authorized_customers: { type: Number, size: 8, default: 0, name: "product.label.limit_authorized_customers" },
  interested_customers:  { type: Number, size: 8, default: 0, name: "product.label.interested_customers" },
  products: [
    {
      type: String,
      /* ref: "Role" */
    }
  ],
  authorized_customers: [
    {
      type: String
      /* type: mongoose.Schema.Types.ObjectId, */
      /* ref: "Role" */
    }
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("catalogModel", schema);
