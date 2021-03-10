const mongoose = require("mongoose");
const BusinessError = require("../utils/errors/BusinessError");
mongoose.set("useFindAndModify", false);

class CatalogService {
  constructor() {
    if (!mongoose) {
      throw new BusinessError("Objeto mongoose informado não é válido!");
    }
    this.catalogModel = mongoose.model("catalogModel");
  }

  /* Retorna lista LegalPerson com os dados NaturalPerson populados em progresso, caso exista o usuário */
  async getAllRegisters() {
    let model = await this.catalogModel
      .find()
      .then(function (model) {
        return model;
      })
      .catch(function (err) {
        throw new BusinessError("Falha na busca", 400);
      });
    return model;
  }

  async getRegister(id) {
    let model = await this.catalogModel
      .find({ _id: id })
      .then(function (model) {
        return model;
      })
      .catch(function (err) {
        throw new BusinessError("Registro não encontrado", 400);
      });
    return model;
  }

  async insertRegister(body) {
    const modelList = await this.catalogModel
      .create(body)
      .then(function (result) {
        return result;
      })
      .catch(function (err) {
        console.log(err)
        return res.json({ error: "erro ao inserir registro" });
      });
    return modelList;
  }

  async updateRegister(id, body) {
    const model = await this.findRegister(id);
    if (!model || model.length != 1)
      throw new BusinessError("Erro ao carregar usuário", 400);
    const result = await this.catalogModel
      .findByIdAndUpdate(model[0]._id, body, { new: true })
      .then(function (result) {
        return result;
      })
      .catch(function (err) {
        return res.json({ error: "erro ao atualizar registro" });
      });
    return result;
  }

  /* Funções agregadas */
  async findRegister(id) {
    return await this.catalogModel.find({ _id: id });
  }

  async findRegisterFilter(filter) {
    return await this.catalogModel.find(filter);
  }
}

module.exports = CatalogService;
