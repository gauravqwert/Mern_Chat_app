import jwt from "jsonwebtoken";
const generateToken = (id) => {
  return jwt.sign({ id }, "dfgghuhbjhgbjhgyhuj", {
    expiresIn: "30d",
  });
};
export default generateToken;
