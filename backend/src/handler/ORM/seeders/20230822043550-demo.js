'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arrData = require('../data/cars.json');
    arrData.forEach(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    }); 

    for (let i = 0; i < arrData.length; i++) {
      const el = arrData[i];
      const { model, manufacture, capacity, rentPerDay, image, createdAt, updatedAt } = el;
      const name = el.manufacture + ' ' + el.model;
      // size, small, medium, large
      const size = el.capacity > 0 && el.capacity <= 4 ? 'small' : el.capacity > 4 && el.capacity <= 7 ? 'medium' : 'large';
      const image_id = i+1;
      const rent_per_day = rentPerDay;
      const image_url = `https://res.cloudinary.com/dzed8n2kj/image/upload/v1692602482/bcr-management-dashboard/${image.split('/')[2]}`;
      await queryInterface.bulkInsert('Cars', [{ name, size, rent_per_day, image_id, image_url, createdAt, updatedAt }]);
    }
    return true;
  },
  //npx sequelize-cli db:seed:all,
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};

