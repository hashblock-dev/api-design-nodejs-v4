import jwt from "jsonwebtoken";

export const createJWT = (user: any) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET as string
  );
  return token;
};

export const protect = (req: any, res: any, next: any) => {
  const bearer = req.headers.authorization || "";
  if (!bearer) {
    res.status(401);
    res.json({ message: "Unauthorized" });
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "Unauthorized" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    res.json({ message: "Not valid token" });
    return;
  }
};
