

export default (sequelize, { STRING, UUID, UUIDV1 }) => {
  const Item = sequelize.define("Item", {
    id: {
      primaryKey: true,
      allowNull: false,
      type: UUID,
      defaultValue: UUIDV1(),
    },
    userId: {
      allowNull: false,
      type: UUID,
    },
    item: {
      type: STRING,
      allowNull: false,
    },
    balance: {
      type: STRING,
      allowNull: false,
    },
  });



  return Item;
};
