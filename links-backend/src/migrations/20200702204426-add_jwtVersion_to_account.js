
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColum('Accounts', 'jwtVersion', {

    type: Sequelize.INTEGER,
    allowNull: false,
    after: 'password',
    defaultValue: 0,

   });
  
  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Accounts', 'jwtVersion');
   
  },
};