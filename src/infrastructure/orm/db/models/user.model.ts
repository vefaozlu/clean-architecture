import { DataTypes } from "sequelize";
import sequelize from "../db.config";
import short from "short-uuid";

const User = sequelize.define(
  "User",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING,
      defaultValue: short.generate(),
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["ID", "id"],
      },
    ],
    timestamps: true,
    paranoid: true,
  }
);

export default User;
