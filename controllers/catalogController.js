const CatalogService = require('../services/catalogService');
const BusinessError = require('../utils/errors/BusinessError');

class CatalogController {
  
  async getAllCatalogController(req, res) {
    try {
      const response = await new CatalogService().getAllRegisters();
      return res.json(response);
    } catch (error) {
      if (error instanceof BusinessError) {
        return res.status(error.status).json({ error: error.message });
      }
      throw error;
    }
  }

  async getCatalogController(req, res) {
    try {
      const response = await new CatalogService().getRegister(req.params.id);
      return res.json(response);
    } catch (error) {
      if (error instanceof BusinessError) {
        return res.status(error.status).json({ error: error.message });
      }
      throw error;
    }
  }

  async insertCatalogController(req, res) {    
    try {
      const response = await new CatalogService().insertRegister(
        req.body
      );
      return res.json(response);
    } catch (error) {
      return res.json({ error: "erro ao inserir registro" });
      /* if (error instanceof BusinessError) {
        return res.status(error.status).json({ error: error.message });
      }
      throw error; */
    }
  }

  async updateCatalogController(req, res) {
    try {
      const response = await new CatalogService().updateRegister(
        req.params.id,
        req.body
      );
      return res.json(response);
    } catch (error) {
      return res.json({ error: "erro ao atualizar registro" });
      /* if (error instanceof BusinessError) {
        return res.status(error.status).json({ error: error.message });
      }
      throw error; */
    }
  }

}

module.exports = new CatalogController();